const fetchPosts = async ({ offset = 0, limit = 10, tag = '' } = {}) => {
  const posts = await Promise.all(
    Object.entries(import.meta.glob('/posts/*.md')).map(async ([path, resolver]) => {
      const { metadata } = await resolver();
      const slug = path.split('/').pop().slice(0, -3);
      return { ...metadata, slug };
    })
  );

  let sortedPosts = posts.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
  
  if (tag) {
    sortedPosts = sortedPosts.filter(post => post.tags.includes(tag));
  }

  if (offset) {
    sortedPosts = sortedPosts.slice(offset);
  }
  
  if (limit && limit < sortedPosts.length && limit != -1) {
    sortedPosts = sortedPosts.slice(0, limit);
  }

  return sortedPosts;
};

export default fetchPosts;