<template>
  <div class="container">
    <div class="step step__initiatefulltext"></div>
    <div class="step step__one"></div>
    
    <h4>Features</h4>
    <h2 class="fulltext">Search through the subtitles of YouTube videos</h2>
    <p class="description">Compare how different channels cover similar topics. Find out how both the tone as well as the intensity of these topics change over time.</p>

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
          <span class="result__innertext"> proven true there actually was an international</span>
        </div>
        <span class="result__thumb" style="margin-left: 580px">
          <span class="result__thumb--innershadow"></span>
        </span>
      </div>

      <div class="result result__first" style="margin-left: 3rem">
        <div class="result__text">
          <span class="result__text--innershadow"></span>
          <span class="result__innertext">proven true there actually a completely secret </span>
          <span class="highlight"><span class="highlight__innertext">elite pedophile ring</span></span>
          <span class="result__innertext"> proven true there actually was an international</span>
        </div>
        <span class="result__thumb" style="margin-left: 580px">
          <span class="result__thumb--innershadow"></span>
        </span>
      </div>

            <div class="result result__first" style="margin-left: 8rem">
        <div class="result__text">
          <span class="result__text--innershadow"></span>
          <span class="result__innertext">proven true there actually a completely secret </span>
          <span class="highlight"><span class="highlight__innertext">elite pedophile ring</span></span>
          <span class="result__innertext"> proven true there actually was an international</span>
        </div>
        <span class="result__thumb" style="margin-left: 580px">
          <span class="result__thumb--innershadow"></span>
        </span>
      </div>

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
          if(response.index === 6) {
            this.showHeader()
          }
        })

      window.addEventListener("resize", scrollerTwo.resize);
  },
  methods: {
    showHeader() {
      var _this = this;

      anime({
        targets: '.fulltext, .searchbox',
        translateY: [3, 0],
        opacity: [0, 1],
        duration: 1000,
        easing: 'easeInOutQuad',
        delay: function(el, i) {
          return i * 500;
        },
        complete: function() {
          if(_this.searchActivated === false) {
            _this.animateSearch();
          }
          _this.$emit('showCTA');           
        }
      });
    },
    animateSearch() {
      this.searchActivated = true;
      var options = {
        strings: ['elite pedophile ^200 ring'],
        typeSpeed: 60
      };

      new Typed('.innerstring', options);
      var _this = this;

      setTimeout(function(){ console.log('bla'); _this.showVideoResults() }, 2000);
    },
    showVideoResults() {

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
          return i * 300;
        }        
      }, '-=2000').add({
        targets: '.result__innertext',
        opacity: [0, 1],
        // translateY: [10,0],
        duration: 1000,
        delay: function(el, i) {
          return i * 300;
        }        
      }, '-=1000');

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
}

.result__text--innershadow {
  height: 40px;
  width: 160px;
  background: rgb(0,0,0);
  background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 45%);
  display: block;
  position: absolute;
}

.step__initiatefulltext {
  margin-top: -20vh;
}

.step__two {
  margin-top: 100vh;
}

.result__innertext, .highlight, .result__thumb, .result__thumb--innershadow, .highlight__innertext {
  opacity: 0;
}
</style>