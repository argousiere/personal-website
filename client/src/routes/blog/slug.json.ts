import fetchPost from '$lib/scripts/fetchPost';

export const get = async ({ slug }) => {
  try {
    const post = fetchPost({ slug })

    if (!post) {
      return {
        status: 404,
        body: {
          error: 'Post not found',
        }
      };
    }
    return {
      status: 200,
      body: post,
    }
  }

  catch (err) {
    return {
      body: {
        error: 'Something went wrong',
      },
      status: 500
    };
  }
}