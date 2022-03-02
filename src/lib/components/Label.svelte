<script lang="ts">
  import Icon from './Icon.svelte';
  export let text: string;
  export let icon: string;
</script>

<style lang="css">
  .label {
    display: flex;
    align-items: center;
  }

  .icon {
    margin-right: 1em;
  }
</style>

<div class="label">
  {#if icon}
    <Icon slug={icon}></Icon>
  {/if}
  <span class="label-text">{text}</span>
</div>
