<style lang="scss" global>
  @import "../app.scss";
</style>

<script lang="ts">
  import Sidebar from "./sidebar.svelte";
</script>

<div class="container">
  <div class="sidebar-layout">
    <Sidebar></Sidebar>

    <main class="main-content">
      <slot />
    </main>
  </div>
</div>
