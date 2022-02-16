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
      <a
        class="menu-link"
        href={item.url}
        class:menu-link-active={isActive(item.url)}>
        {#if item.icon}
          <Icon slug={item.icon}></Icon>
        {/if}
        <span class="menu-label">
          {item.label}
        </span>
      </a>
    </li>
  {/each}
</ol>
