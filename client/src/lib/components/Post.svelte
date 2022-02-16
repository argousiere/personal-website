<script lang="ts">
  import type { Post } from '$lib/types';
  import Tags from '$lib/components/Tags.svelte';
  import Image from '$lib/components/Image.svelte';
  export let post: Post;
</script>

<div class="card">
  <div class="card-cover">
    <Image source={post.cover_url} alt={post.title} />
  </div>
  
  <div class="card-body">
    <h2 class="card-title">{post.title}</h2>
    <time>{new Date(post.date).toLocaleDateString()}</time>
    
    {#if post.description}
      <p class="card-description">{post.description}</p>
    {/if}
  </div>

  {#if post.tags}
    <div class="card-footer">
      <Tags tags={post.tags} />
    </div>
  {/if}
</div>