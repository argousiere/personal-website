<script lang="ts">
  import type { Post } from '$lib/models/types';
  import Tags from '$lib/components/Tags.svelte';
  import Image from '$lib/components/Image.svelte';
  export let post: Post;
</script>

<article class="blog">
  <span class="category">{post.category}</span>
  <div class="card-cover">
    <Image source="{post.cover_url}" alt={post.title} />
  </div>

  <header>
    <h1 class="blog-title">{post.title}</h1>

    {#if post.description}
      <p class="blog-description">
        {post.description}
      </p>
    {/if}

    <time>{new Date(post.date).toLocaleDateString()}</time>
  </header>
  
  <div class="blog-contents">
    <svelte:component this={post.content} />
  </div>

  <footer>
    Tagged In: <Tags tags={post.tags} />
  </footer>
</article>
