import fetchPosts from '$lib/scripts/fetchPosts';

export const get = async () => {
  try {
    return {
      status: 200,
      body: await fetchPosts(),
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