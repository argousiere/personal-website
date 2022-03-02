<script lang="ts">
  export let slug: string;
</script>

<style lang="scss">
  .icon {
    display: inline-flex;

    img {
      width: 100%;
      height: 100%;
    }
  }
</style>

<span class="icon">
  <img 
    src="/icons/{slug}.svg" 
    alt="{slug} icon"
    aria-label="{slug}" />
</span>
