<template>
  <div id="app">
    <header>
      <span class="logo">abc</span>
      <span class="right">
        <span class="right__cta">Try it out</span>
        <a href="https://www.twitter.com" target="_blank"><span class="right__twitter"></span></a>
        <span class="right__lang">EN<span class="off">/NL</span></span>
      </span>
    </header>
    <div class="hero">
      <h1>Understanding radical<br>YouTube communities</h1>
      <span class="cta">Scroll down to find out more</span>
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
    <Search v-on:showCTA="showFooterCTA" />
    <Community />
    <Notification />
    <FooterText />
    <SearchCTA v-if="searchcta" />
  </div>
</template>

<script>
import Introduction from "./components/Introduction.vue";
import Search from "./components/Search.vue";
import Community from "./components/Community.vue";
import Notification from "./components/Notification.vue";
import FooterText from "./components/FooterText.vue";

import SearchCTA from "./components/SearchCTA.vue";

import anime from "animejs";

export default {
  name: "App",
  data: function() {
    return {
      lang: "en",
      searchcta: false
    }
  },
  components: {
    Introduction, Search, Community, Notification, FooterText, SearchCTA
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
  },
  methods: {
    showFooterCTA() {
      this.searchcta = true;
    }
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
  background: #000;
  margin: 0;
  font-size: 16px;
  overflow-x: hidden;
}

.regularlink, .regularlink:visited {
  color: white;
  text-decoration: none;
}

.regularlink:hover {
  color: white;
  border-bottom: 1px dotted white;
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
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  flex-direction: row;
  flex-wrap: nowrap;
}

header {
  position: fixed;
  color: white;
  margin-left: 4rem;
  margin-top: 2rem;
  z-index: 20;
  width: calc(100vw - 8rem);
  display: flex;
  justify-content: space-between;
}

.logo {
  background-image: url("./assets/logo.svg");
  line-height: 2.3rem;
  padding-left: 4rem;
  background-repeat: no-repeat;
  display: block;
  font-family: "Flaco";
  text-transform: uppercase;
}

.right, .right__cta, .right__lang {
  line-height: 2.3rem;
  font-family: "Flaco";
}

.right__twitter {
  background-image: url("./assets/twitter.svg");
  background-size: cover;
  width: 16px;
  height: 13px;
  display: inline-flex;
  opacity: .375;
  margin-right: 1rem;
  cursor: pointer;
}

.right__twitter:hover { opacity: 1; }

.right__cta {
  margin-right: 1rem;
  border: 1px solid #2F2f2f;
  background: black;
  padding: .4rem .7rem;
  border-radius: 10px;
  cursor: pointer;
}

.right__cta:hover {
  background: #FFE923;
  color: black;
}

.off {
  color: #6A6A6A;
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

#sprite {
  width: 100%;
}
</style>
