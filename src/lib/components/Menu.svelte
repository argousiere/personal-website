<script lang="ts">
  import { page } from '$app/stores';
  import type { MenuItem } from '../models/menu';
  import Label from './Label.svelte';
  export let items: MenuItem[] = [];
  $: isActive = (url: string): boolean => {
    if (url === '/') {
      return $page.url.pathname === url;
    }

    return $page.url.pathname.includes(url);
  };
</script>

<ol class="menu">
  {#each items as item}
    <li class="menu-item"
    class:menu-item-active={isActive(item.url)}>
      <a
        class="menu-link"
        href={isActive(item.url) ? undefined : item.url}>
        <Label icon={item.icon} text={item.label} />
      </a>
    </li>
  {/each}
</ol>
