<script lang="ts" context="module">
  import type { Load } from '@sveltejs/kit';
  import fetchPost from '$lib/scripts/fetchPost';

  export const load: Load = async ({ params }) => {
    const { slug } = params;

    try {
      const res = await fetchPost({ slug });

      return {
        props: {
          PostContent: res.default,
          metadata: { ...res.metadata }
        }
      };
    } catch(error) {
      return {
        status: 404,
        error: error.message
      };
    }
  };
</script>

<script lang="ts">
  import type { Post } from '$lib/models/types';
  import Blog from '$lib/components/Blog.svelte';
  export let metadata;
  export let PostContent;

  const post: Post = {
    ...metadata,
    content: PostContent
  };
</script>

<a class="link" href="/blog">&lt; Back</a>
<Blog {post} />
