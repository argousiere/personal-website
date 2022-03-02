<script lang="ts">
  import Menu from '$lib/components/Menu.svelte';
  import Image from '$lib/components/Image.svelte';
  import Icon from '$lib/components/Icon.svelte';
  import type { MenuItem } from '$lib/models/menu';
  let isOpen;
  let items: MenuItem[] = [
    {
      id: 'home',
      label: 'Home',
      icon: 'home',
      url: '/',
    },
    {
        id: 'about',
        icon: 'glasses',
        label: 'About',
        url: '/about'
    },
    {
        id: 'blog',
        icon: 'book-and-pencil',
        label: 'Blog',
        url: '/blog'
    }
  ];

  const toggle = () => {
      isOpen = !isOpen;
  }

  const close = () => {
    if (isOpen) {
      isOpen = false;
    }
  }
</script>

<aside class="sidebar" class:sidebar--show={isOpen}>
  <button class="sidebar-toggle" on:click={toggle}><Icon slug="hamburger" /></button>
  <div class="sidebar-content">
    <header class="profile">
      <figure class="profile-photo">
        <Image source="c_scale,h_206/v1645439476/profile_photo.jpg" alt="Profile avatar"></Image>
      </figure>
      <h1 class="profile-name">Jeanella Klarys Pascual</h1>
      <h2 class="profile-subheading">Front-end Developer & Illustrator</h2>
      <p class="profile-blurb">Waiting for the day her cerebellum returns from the nebulae, bloated with the answers to all her vexing, otherworldly questions.</p>
    </header>
  
    <nav on:mouseup={close}>
      <Menu {items}></Menu>
    </nav>
  </div>
</aside>
