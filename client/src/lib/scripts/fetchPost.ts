const fetchPost = async ({ slug }) => {
  const posts = import.meta.globEager('/posts/*.md');
  const name = Object.keys(posts)
    .find(path => path.includes(`${slug}.md`));

  if (!name) {
    return undefined;
  }

  return posts[name];
}

export default fetchPost;