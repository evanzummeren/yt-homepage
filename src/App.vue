<template>
  <div id="app">
    <div class="hero">
      <h1>Understanding radical<br>YouTube communities</h1>
      <span class="cta">Why and what?</span>
      <div class="line"></div>

      <video class="vidblock video__sq--1" playsinline autoplay muted poster="polina.jpg">
        <source src="./assets/square_contrapoints.mp4" type="video/mp4">
      </video>

            <video class="vidblock video__sq--2" playsinline autoplay muted poster="polina.jpg">
        <source src="./assets/square_prager.mp4" type="video/mp4">
      </video>

            <video class="vidblock video__sq--3" playsinline autoplay muted poster="polina.jpg">
        <source src="./assets/square_english.mp4" type="video/mp4">
      </video>

      <!-- <video class="fullvideo" playsinline autoplay muted poster="polina.jpg">
        <source src="./assets/videobg.mp4" type="video/mp4">
      </video> -->
    </div>
    <Introduction />
    <Search />
    <Community />
  </div>
</template>

<script>
import Introduction from "./components/Introduction.vue";
import Search from "./components/Search.vue";
import Community from "./components/Community.vue";

import anime from "animejs";

export default {
  name: "App",
  components: {
    Introduction, Search, Community
  },
  mounted: function() {
    anime({
      targets: 'h1, .cta, .line',
      translateY: [10, 0],
      duration: 2000,
      scale: [1.1, 1],
      easing: 'easeInOutQuad',
      delay: function(el, i) {
        return i * 1000;
      }
    });

    anime({
      targets: '.vidblock',
      scale: [1.2, .9],
      opacity: [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, .8],
      duration: 6000,
      easing: 'easeInOutQuad',
      delay: function(el, i) {
        return i * 300;
      }
    });
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
  /* opacity: 0; */
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

.vidblock {
  opacity: 0;
}

.video__sq--1 {
  width: 200px;
  height: 200px;
  position: absolute;
  margin-top: -6rem;
  margin-left: -13rem;
}

.video__sq--2 {
  width: 200px;
  height: 200px;
  position: absolute;
  margin-top: -11rem;
  margin-left: 12rem;
}

.video__sq--3 {
  width: 200px;
  height: 200px;
  position: absolute;
margin-top: 9rem;
    margin-left: 7rem;
}



.fullvideo {
  object-fit: cover;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
}

.step {
  width: 10px;
  height: 2px;
  background: white;
  position: absolute;
  margin-left: 20px;
}
</style>
