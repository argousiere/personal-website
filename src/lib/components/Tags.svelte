<script lang="ts">
  export let tags: string[] = [];
</script>

{#if tags && tags.length}
  <ul class="tags">
    {#each tags as tag}
      <li class="tag" data-id={tag}>
        <span>{tag}</span>
      </li>
    {/each}
  </ul>
{/if}