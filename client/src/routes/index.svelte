<script lang="ts" context="module">
  import type { Load } from '@sveltejs/kit';
  import type { SearchResults, Post } from '$lib/types';
  import { variables } from '$lib/variables';

  export const load: Load = async ({ fetch }) => {
    const res = await fetch(`${variables.API_URL}/posts`);

    const list: SearchResults<Post> = await res.json()

    return {
      status: res.status,
      props: {
        posts: res.ok && list.data,
      }
    };
  };
</script>

<script lang="ts">
  import { goto } from '$app/navigation';

  export let posts: Post[];
</script>


<div class="my-4">
  <h1 class="text-center text-3xl font-bold">My wonderful blog</h1>
</div>

<div class="container mx-auto mt-4">
  {#each posts as post}
    <div data-slug={post.attributes.slug} class="hover:bg-gray-200 cursor-pointer px-6 py-2 border-b border-gray-500" on:click={() => goto("/blog/" + post.attributes.slug)}>
      <h4 class="font-bold">{post.attributes.title}</h4>
      <p class="mt-2 text-gray-800">{post.attributes.content}</p>
      <p class="text-gray-500">By:</p>
    </div>
  {/each}
</div>
