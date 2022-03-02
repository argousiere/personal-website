<style lang="scss" global>
  @font-face {
    font-family: "Esteban";
    src: url("/fonts/Esteban-Regular.ttf") format("ttf");
  }
  @font-face {
    font-family: "Lato";
    src: url("/static/fonts/Lato-Regular.ttf") format("ttf");
  }
  @font-face {
    font-family: "ArcadeClassic";
    src: url("/static/fonts/ArcadeClassic-Regular.woff") format("woff");
  }
  @font-face {
    font-family: "Welbutrin";
    src: url("/fonts/Welbutrin.woff") format("woff");
  }
  @font-face {
    font-family: "PressStart2P";
    src: url("/static/fonts/PressStart2P.woff") format("woff");
  }
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
