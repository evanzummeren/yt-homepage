<template>
<div>
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
  <Newsletter />
  <Notification />
  <FooterText />
</div>
  
</template>

<script>
import Introduction from "./Introduction.vue";
import Search from "./Search.vue";
import Community from "./Community.vue";
import Newsletter from "./Newsletter.vue";
import Notification from "./Notification.vue";
import FooterText from "./FooterText.vue";

import FixedSearch from "./FixedSearchCTA.vue";
import Scrollytelling from "./Scrollytelling.js";

import contra from "../assets/square_contrapoints.mp4";
import cons from "../assets/square_cons.mp4";
import akkad from "../assets/square_english.mp4";

import * as PIXI from 'pixi.js';
import anime from "animejs";

export default {
  name: 'LandingPage',
  mixins: [Scrollytelling],
  data: function() {
    return {
      vidAnimation: {},
      searchcta: true,
    }
  },
  components: {
    Introduction, Search, Community, Newsletter, Notification, FooterText, FixedSearch
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

}
</script>

<style>

</style>