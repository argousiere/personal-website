<script context="module" lang="ts">
  import type { LoadInput } from '@sveltejs/kit';
  export async function load({ fetch }: LoadInput) {
    try {
      const blog = await fetch(`/blog.json`);
      const posts = await blog.json();
      return { props: { posts } };
    } catch (error) {
      return { props: { message: 'Error', posts: [] }}
    }
  }
</script>

<script lang="ts">
  import Post from '$lib/components/Post.svelte';
  import Label from '$lib/components/Label.svelte';
  export let posts = [];
</script>

<div class="page">
  <h1 class="page-title">
    <Label icon="book-and-pencil" text="Blog"></Label>
  </h1>
  <div class="post-list">
    <ol class="feed">
      {#each posts as post}
      <li class="feed-item">
        <a href="/blog/{post.slug}">
          <Post {post}></Post>
        </a>
      </li>
      {/each}
    </ol>
  </div>
</div>
