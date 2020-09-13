<template>
  <div id="app">
    <div class="hero">
      <h1>Understanding radical<br>YouTube communities</h1>
      <span class="cta">Why and what?</span>
      <div class="line"></div>
      <video playsinline autoplay muted poster="polina.jpg">
        <source src="./assets/videobg.mp4" type="video/mp4">
      </video>
    </div>
    <Introduction />
    <Search />
  </div>
</template>

<script>
import Introduction from "./components/Introduction.vue";
import Search from "./components/Search.vue";

export default {
  name: "App",
  components: {
    Introduction, Search
  }
};
</script>

<style>
* {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}

body {
  margin: 0;
  font-size: 16px;
}

@font-face {
  font-family: "GilReg";
  src: url("./assets/fonts/gil-reg.woff2") format("woff2"),
       url("./assets/fonts/gil-reg.woff") format("woff");
}

@font-face {
  font-family: "Flaco";
  src: url("./assets/fonts/fl-mono.woff") format("woff");
}

#app {
  background: #000000;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  /* display: flex; */
  flex-direction: row;
  flex-wrap: nowrap;
}

.hero {
  min-width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}


h1 {
  color: white;
  position: absolute;
  font-family: "GilReg";
  z-index: 100;
  /* margin-top: 33vh; */
  font-size: 4rem;
  text-align: center;
}

.cta {
  color: white;
  position: absolute;
  z-index: 100;
  margin-top: 12rem;
  font-family: "Flaco";
}

@keyframes moveBg {
  from {background-position: 0 0;}
  to {background-position: 0 425px;}
}

.line {
  position: absolute;
  z-index: 99;
  margin-top: 42rem;
  background-image: url("./assets/line.svg");
  background-size: cover;
  width: 11px;
  height: 425px;
  animation-name: moveBg;
  animation-duration: 5s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

video {
  object-fit: cover;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
}
</style>
