<script lang="ts" context="module">
  import type { Load } from '@sveltejs/kit';
  import { variables } from '$lib/variables';

  export const load: Load = async ({ params, fetch }) => {
    const { slug } = params;

    const res = await fetch(`${variables.API_URL}/posts/${slug}`);

    if (res.status === 404) {
      const error = new Error(`Post with slug ${ slug } cannot be found`);
      return { status: res.status, error };
    } else {
      const result: SearchResult<Post> = await res.json();
      return {
        props: {
          post: result.data
        }
      }
    }
  };
</script>

<script lang="ts">
  import type { Post, SearchResult } from '$lib/types';
  import { marked } from 'marked';
  import { onMount } from 'svelte';

  export let post: Post;
  let content: Post['attributes']['content'];

  onMount(async () => {
    content = marked(post.attributes.content);
  });
</script>

<h1 class="text-center">{post.attributes.title}</h1>
<div class="border border-gray-500 my-4 mx-8 p-6 rounded">
  {@html content}
</div>
