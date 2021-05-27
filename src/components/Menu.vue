<template>
  <header>
    <span class="logo">
      <img src="../assets/raditube.svg" />
    </span>
    <span class="right">
      <a href="https://tool.raditube.com" target="_blank" class="toollink" v-on:click="trackClick('Menu — Try out the Tool')"><span class="right__cta">Try it out</span></a>
      <a href="https://twitter.com/raditube_com" target="_blank" v-on:click="trackClick('Menu — Go to Twitter')"><span class="right__twitter"></span></a>
    </span>
  </header>
</template>

<script>
export default {
  name: 'Menu',
  methods: {
    trackClick(elem) {
      console.log(elem)
      this.$parent.amplitudeInstance.logEvent(elem);
    }    
  }

}
</script>

<style>

</style>