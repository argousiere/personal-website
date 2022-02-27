<script lang="ts">
  import { page } from '$app/stores';
  import type { MenuItem } from '../models/menu';
  import Icon from './Icon.svelte';
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
    <li class="menu-item">
      {#if item.icon}
        <Icon slug={item.icon}></Icon>
      {/if}
      <a
        class="menu-label link"
        href={item.url}
        class:menu-link-active={isActive(item.url)}>
        {item.label}
      </a>
    </li>
  {/each}
</ol>
