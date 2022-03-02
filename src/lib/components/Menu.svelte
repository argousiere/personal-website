<script lang="ts">
  import { page } from '$app/stores';
  import type { MenuItem } from '../models/menu';
  import Icon from './Icon.svelte';
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
    <li class="menu-item">
      <Icon slug={item.icon} />
      <a
        class="menu-link"
        href={item.url}
        class:menu-link-active={isActive(item.url)}>
        <Label text={item.label} />
      </a>
    </li>
  {/each}
</ol>
