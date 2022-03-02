<script lang="ts">
  import type { Post } from '$lib/models/types';
  import Image from '$lib/components/Image.svelte';
  export let post: Post;
  export let orientation = 'vertical';
</script>

<div class="card" class:card--horizontal={orientation === 'horizontal'}>
  <div class="card-cover">
    <Image source={post.cover_url} alt={post.title} />
  </div>
  
  <div class="card-content">
    <div class="card-body">
      {#if post.category}
        <span class="category">{post.category}</span>
      {/if}
      <h2 class="card-title">
        <a class="link" href="/blog/{post.slug}">{post.title}</a>
      </h2>
      
      <p class="card-description">
        {#if post.description}
          {post.description}
        {/if}
      </p>
    </div>
  
    <div class="card-footer">
      <time>{new Date(post.date).toLocaleDateString()}</time>
    </div>
  </div>
</div>