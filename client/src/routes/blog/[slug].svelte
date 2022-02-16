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
  import Tags from '$lib/components/Tags.svelte';
import Image from '$lib/components/Image.svelte';
  export let PostContent;
  export let metadata;
</script>

<article class="card">
  <div class="card-cover">
    <Image source="{metadata.cover_url}" alt={metadata.title} />
  </div>
  
  <div class="card-body">
    <h1 class="card-title">{metadata.title}</h1>
    <svelte:component this={PostContent} />
  </div>

  <div class="card-footer">
    <Tags tags={metadata.tags} />
  </div>
</article>
