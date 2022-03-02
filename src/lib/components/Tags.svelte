<script lang="ts">
  import Label from './Label.svelte';
  export let tags: string[] = [];
</script>

{#if tags && tags.length}
  <ul class="tags">
    {#each tags as tag}
      <li class="tag" data-id={tag}>
        <Label icon={tag} text={tag} />
      </li>
    {/each}
  </ul>
{/if}