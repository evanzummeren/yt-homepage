<template>
  <div class="container">
    <div class="step step__entersearch"></div>
    
    <h4>Features</h4>
    <h2 class="fulltext">Search through the subtitles of YouTube videos</h2>
    <p class="description desc__search">Compare how different channels cover similar topics. Find out how both the tone as well as the intensity of these topics change over time.</p>

    <div class="searchbox">
      <span class="string"><span class="innerstring"></span></span>
      <div class="searchbox__button">search</div>
    </div>

    <div class="results">

      <div class="result result__first">
        <div class="result__text">
          <span class="result__text--innershadow"></span>
          <span class="result__innertext">proven true there actually was an international </span> 
          <span class="highlight"><span class="highlight__innertext">elite pedophile ring</span></span> 
          <span class="result__innertext"> that had its own private island and jeffrey</span>
        </div>
        <span class="result__thumb" style="margin-left: 580px">
            <span class="result__thumb--innershadow"></span>
            <v-sprite :id="'sprite'"
              :spritesheet="require('../assets/spritesheet_knowles.jpg')"
              :json="require('../assets/spritesheet_thumb.json')"
              :yoyo="false"
              :fps="3"
              ref="firstsprite"
            ></v-sprite>
        </span>
      </div>

      <div class="result result__first" style="margin-left: 3rem">
        <div class="result__text">
          <span class="result__text--innershadow"></span>
          <span class="result__innertext">by the way. Trudeau's best friend jailed after </span>
          <span class="highlight"><span class="highlight__innertext">elite pedophile ring</span></span>
          <span class="result__innertext"> bust. This guy was Justin Trudeau's college roommate</span>
        </div>
        <span class="result__thumb" style="margin-left: 580px">
            <span class="result__thumb--innershadow"></span>
            <v-sprite :id="'sprite'"
              :spritesheet="require('../assets/spritesheet_faith.jpg')"
              :json="require('../assets/spritesheet_thumb.json')"
              :yoyo="false"
              :fps="3"
              ref="secondsprite"
            ></v-sprite>
        </span>
      </div>

      <div class="result result__first" style="margin-left: 8rem">
        <div class="result__text">
          <span class="result__text--innershadow"></span>
          <span class="result__innertext">in which this has happened. Survivor of alleged </span>
          <span class="highlight"><span class="highlight__innertext">elite pedophile ring</span></span>
          <span class="result__innertext"> including former prime minister speaks out a woman claiming</span>
        </div>
        <span class="result__thumb" style="margin-left: 580px">
            <span class="result__thumb--innershadow"></span>
            <v-sprite :id="'sprite'"
              :spritesheet="require('../assets/spritesheet_akkad.jpg')"
              :json="require('../assets/spritesheet_thumb.json')"
              :yoyo="false"
              :fps="3"
              ref="thirdsprite"
            ></v-sprite>
        </span>
      </div>

    <div class="step step__leavesearch"></div>


    </div>
  </div>
</template>

<script>
import scrollama from "scrollama";
import anime from "animejs";
import Typed from 'typed.js';

export default {
  name: "Search",
  data: function() {
    return {
      searchActivated: false
    }
  },
  mounted: function() {
    const scrollerTwo = scrollama();

    scrollerTwo
      .setup({
        step: ".step"
      })
      .onStepEnter(response => {
        if (response.element.className.includes("entersearch") && response.direction === "down") {
          this.showElem();
        } else if (response.element.className.includes("leavesearch") && response.direction === "up") {
          this.showElem();
        }
      })
      .onStepExit(response => {
        if (response.element.className.includes("leavesearch") && response.direction === "down") {
          this.hideAll();
        } else if (response.element.className.includes("entersearch") && response.direction === "up") {
          this.hideAll();
        }
      });

      window.addEventListener("resize", scrollerTwo.resize);
  },
  methods: {
    showElem() {
      var _this = this;

      anime({
        targets: '.fulltext, .description, .searchbox',
        translateY: [3, 0],
        opacity: [0, 1],
        duration: 1000,
        easing: 'easeInOutQuad',
        delay: function(el, i) {
          return i * 300;
        }
      });
      
      setTimeout(function(){ 
          _this.animateSearch();
      }, 1000);
    },
    hideAll() {
      anime({
        targets: '.fulltext, .desc__search, .searchbox, .result__innertext, .highlight, .result__thumb, .result__thumb--innershadow, .highlight__innertext',
        opacity: [1, 0],
        duration: 1000,
        easing: 'easeInOutQuad',
        delay: function(el, i) {
          return i * 50;
        }
      });      
    },
    animateSearch() {
      if (this.searchActivated === false) {
        var options = {
          strings: ['elite pedophile ^200 ring'],
          typeSpeed: 40
        };

        new Typed('.innerstring', options);
        this.searchActivated = true;
      }

      var _this = this;
      setTimeout(function(){ _this.showVideoResults() }, 1100);
    },
    showVideoResults() {
      var _this = this;
      setTimeout(function(){ 
        _this.$refs.firstsprite.stop()
        _this.$refs.secondsprite.stop()
        _this.$refs.thirdsprite.stop()
       }, 3000);


      var tl = anime.timeline({
        easing: 'easeInOutQuad'
      });

      tl.add({
        targets: '.result__thumb',
        translateX: [-20, 0],
        opacity: [0, 1],
        duration: 1000,
        delay: function(el, i) {
          return i * 500;
        }
      }).add({
        targets: '.result__text--innershadow',
        opacity: [0, 1],
        duration: 300,
        delay: function(el, i) {
          return i * 100;
        }        
      }, '-=1500').add({
        targets: '.result__thumb--innershadow',
        opacity: [0, 1],
        duration: 300,
        delay: function(el, i) {
          return i * 500;
        }        
      }, '-=1500').add({
        targets: '.highlight',
        opacity: [0, 1],
        duration: 1500,
        delay: function(el, i) {
          return i * 500;
        }        
      }, '-=1500').add({
        targets: '.highlight__innertext',
        opacity: [0, 1],
        translateY: [10,0],
        duration: 400,
        delay: function(el, i) {
          return i * 200;
        }        
      }, '-=2500').add({
        targets: '.result__innertext',
        opacity: [0, 1],
        duration: 1000,
        delay: function(el, i) {
          return i * 200;
        }        
      }, '-=1500');

    }

  }
}
</script>

<style lang="scss" scoped>
@import "../styles/_features.scss";

.container {
  margin-bottom: 2rem;
}

h4 {
  grid-column: col-start / 16;
  font-family: "Flaco";
  color: #FFE923;
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: 100;
}

.searchbox {
  grid-column: col-start / 16;
  display: flex;
  opacity: 0;
}

.string {
  background-image: url("../assets/search.svg");
  background-repeat: no-repeat;
  background-position: .5rem .2rem;
  color: white;
  font-family: 'Flaco';
  font-size: 1.25rem;
  border-bottom: 1px solid #2F2F2F;
  line-height: 2rem;
  width: 24rem;
  display: block;
  padding-left: 3rem;
}

.typed-cursor {
  color: #2F2F2F !important;
}

.searchbox__button {
  margin-left: 2rem;
  line-height: 2rem;
  color: #6A6A6A;
  font-family: 'Flaco';
  font-size: 1.25rem;
  border-bottom: 1px solid #2F2f2f;
  background: #1A1A1A;
  padding-left: 2rem;
  padding-right: 2rem;
  font-weight: 100;
}

.results {
  grid-column: col-start / 16;
  display: grid;
}

.result {
  width: 100vw;
  margin-top: 4rem;
  margin-left: -4rem;
  margin-bottom: 4rem; /*DETELETE*/
}

.result__text {
  color: #BBBBBB;
  font-family: "Flaco";
  font-size: 1rem;
  position: absolute;
  z-index: 10;
  white-space:nowrap;
  font-weight: 100;
}

.result__text .highlight {
  background: #fff59a;
  padding: .25rem;
  color: black;
  border-radius: 5px;
  display: inline-block;
}

.result__thumb {
  height: 90px;
  width: 160px;
  background: url("../assets/thumb_1.png");
  background-size: cover;
  position: absolute;
  margin-top: -40px;
  z-index: 0;
}

.result__thumb--innershadow {
  height: 90px;
  width: 160px;
  background: rgb(0,0,0);
  background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 45%);
  display: block;
  position: absolute;
}

.result__text--innershadow {
  height: 40px;
  width: 160px;
  background: rgb(0,0,0);
  background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 45%);
  display: block;
  position: absolute;
  z-index: 100;
}

.step__initiatefulltext {
  margin-top: -20vh;
}

.step__leavesearch {
  margin-top: 50vh;
}

.result__innertext {
  display: inline-block;
  margin: 0 .5rem;
}

.fulltext, .result__innertext, .highlight, .result__thumb, .result__thumb--innershadow, .description, .highlight__innertext {
  opacity: 0;
}
</style>