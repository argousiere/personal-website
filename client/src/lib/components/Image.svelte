<script lang="ts">
  export let source: string;
  export let alt: string;
  let baseUrl = import.meta.env.VITE_IMG_CDN_URL;
  $: visible = true;
</script>

{#if visible}
  <img class="image" src="{baseUrl}/{source}" alt={alt} on:error={ () => visible = false } />
{/if}