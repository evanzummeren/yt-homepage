<template>
  <div id="app">
    <header>
      <span class="logo">abc</span>
      <span class="right">
        <a href="https://www.google.com" target="_blank" class="toollink"><span class="right__cta">Try it out</span></a>
        <a href="https://www.twitter.com" target="_blank"><span class="right__twitter"></span></a>
        <span class="right__lang">EN<span class="off">/NL</span></span>
      </span>
    </header>
    <div class="hero">
      <h1>Understanding radical<br>YouTube communities</h1>
      <h5 class="cta">Scroll down to find out more</h5>

      <div class="cta__container">
        <div class="line"></div>
      </div>

      <div class="vidblock video__sq--1" ref="firstblock"></div>
      <div class="vidblock video__sq--2n" ref="secondblock"></div>
      <div class="vidblock video__sq--3n" ref="thirdblock"></div>

    </div>
    <div class="step step__leavehero"></div>

    <Introduction />
    <FixedSearch />
    <Search v-on:showCTA="showFooterCTA" />
    <Community />
    <Notification />
    <FooterText />
  </div>
</template>

<script>
import Introduction from "./components/Introduction.vue";
import Search from "./components/Search.vue";
import Community from "./components/Community.vue";
import Notification from "./components/Notification.vue";
import FooterText from "./components/FooterText.vue";

import FixedSearch from "./components/FixedSearchCTA.vue";

import Scrollytelling from "./components/Scrollytelling.js";

import contra from "./assets/square_contrapoints.mp4";
import cons from "./assets/square_cons.mp4";
import akkad from "./assets/square_english.mp4";

import * as PIXI from 'pixi.js';
import anime from "animejs";

export default {
  name: "App",
  mixins: [Scrollytelling],
  data: function() {
    return {
      vidAnimation: {},
      lang: "en",
      searchcta: false
    }
  },
  components: {
    Introduction, Search, Community, Notification, FooterText, FixedSearch
  },
  mounted: function() {
    this.initiateScrolls();
    this.loadVids('firstblock', contra)
    this.loadVids('secondblock', cons)
    this.loadVids('thirdblock', akkad)

    anime({
      targets: 'h1, .cta, .line',
      translateY: [10, 0],
      duration: 2000,
      scale: [1.1, 1],
      easing: 'easeInOutQuad',
      delay: function(el, i) {
        return 500 + (i * 750);
      }
    });

    this.vidAnimation = anime({
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
    },
    loadVids(classname, vidEl) {
      const app = new PIXI.Application({
        transparent: true,
        width: 200,
        height: 200
      });

      this.$refs[classname].appendChild(app.view);

      const container = new PIXI.Container();
      app.stage.addChild(container);

      const texture = PIXI.Texture.from(vidEl);
      const videoSprite = new PIXI.Sprite(texture);
      const videoController = videoSprite.texture.baseTexture.resource.source;

      videoController.muted = true;
      videoController.autoplay = true;
      videoSprite.width = app.screen.width;
      videoSprite.height = 200;

      container.addChild(videoSprite);
    }
  }
};
</script>

<style>
@import "./styles/_responsive.scss";
@import "./styles/_scrollytelling.scss";

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
  margin: 2rem 4rem;
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
  color: white;
  line-height: 2.3rem;
  font-family: "Flaco";
}

.toollink:link, .toollink:visited {
  text-decoration: none;
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
  flex-direction: column;
}

h1 {
  color: white;
  font-family: "GilReg";
  z-index: 100;
  font-size: 4rem;
  text-align: center;
  margin: 2rem 0 0 0;
}

/* CTA CONTAINER */

@keyframes moveBg {
  from {background-position: 0 0;}
  to {background-position: 0 425px;}
}

.cta__container {
  position: relative;
  z-index: 100;
  flex-direction: column;
}

.cta {
  color: white;
  margin-top: 1rem;
  font-size: 1rem;
  font-family: "Flaco";
  font-weight: 100;
  z-index: 100;
}

.line {
  position: absolute;
  background-image: url("./assets/line.svg");
  background-size: cover;
  width: 11px;
  height: 425px;
  margin-top: 1rem;
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
  top: 30%;
  left: 29%;
}

.video__sq--2 {
  width: 200px;
  height: 200px;
  position: absolute;
  margin-top: -11rem;
  margin-left: 12rem;
}

.video__sq--2n {
  width: 200px;
  height: 200px;
  position: absolute;
  top: 25%;
  left: 54%;
}

.video__sq--3 {
  width: 200px;
  height: 200px;
  position: absolute;
  margin-top: 9rem;
  margin-left: 7rem;
}

.video__sq--3n {
  width: 200px;
  height: 200px;
  position: absolute;
  top: 60%;
  left: 50%;
}

.fullvideo {
  object-fit: cover;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
}

#sprite {
  width: 100%;
}

/* Scrollytelling */
.step__leavehero {
  margin-top: -25vh;
}
</style>
