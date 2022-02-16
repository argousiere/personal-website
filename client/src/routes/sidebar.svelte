<script lang="ts">
  import Menu from '$lib/components/Menu.svelte';
  import Image from '$lib/components/Image.svelte';
  import type { MenuItem } from '$lib/models/menu';
  let isOpen = true;
  let items: MenuItem[] = [
    {
      id: 'home',
      label: 'Home',
      icon: 'home',
      url: '/',
    },
    {
        id: 'about',
        icon: 'user',
        label: 'About',
        url: '/about'
    },
    {
        id: 'blog',
        icon: 'notes',
        label: 'Blog',
        url: '/blog'
    }
  ];

  const toggle = () => {
      isOpen = !isOpen;
  }
</script>

<aside class="sidebar">
  <header class="profile">
    <figure class="profile-photo">
      <Image source="c_scale,h_206/v1645439476/profile_photo.jpg" alt="Profile avatar"></Image>
    </figure>
    <h1 class="profile-name">Jeanella Klarys Pascual</h1>
    <h2 class="profile-subheading">Front-end Developer and Illustrator</h2>
    <p class="profile-blurb">Waiting for the day her cerebellum returns from the nebulae, bloated with the answers to all her vexing, otherworldly questions.</p>
  </header>

  <nav>
    <Menu {items}></Menu>
  </nav>
</aside>
