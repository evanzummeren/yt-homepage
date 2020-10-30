<template>
  <div class="introduction">
    <svg>
      <g v-for="vindex in 60" :key="vindex">
      <g v-for="index in widthPoints" :key="index">
        <line class="st0" :x1="64 * index" :y1="vindex * 64 - 64" :x2="64 * index" :y2="vindex * 64 + 6 - 64"/>
        <line class="st0" :x1="64 * index + 3" :y1="vindex * 64 - 64 + 3" :x2="64 * index - 3" :y2="vindex * 64 - 64 + 3"/>
      </g>
      </g>
    </svg>

    <div class="bg__elem__one noiseblocks"></div>
    <div class="bg__elem__two noiseblocks"></div>
    <div class="bg__elem__three noiseblocks"></div>
    <div class="bg__elem__four noiseblocks"></div>

    <div class="step step__firstsen"></div>
    <div class="step step__secondsen"></div>
    <div class="step step__thirdsen"></div>
    <div class="step step__bottom"></div>

    <h2 class="introline">{{text}}</h2>

  </div>
</template>

<script>
import scrollama from "scrollama";
import anime from "animejs";

export default {
  name: "Introduction",
  data: function() {
    return {
      text: "YouTube's personal recommendation engine makes it difficult to understand what's happening on this platform",
      widthPoints: 10,
    }
  },
  created: function() {
    this.widthPoints = Math.ceil(window.innerWidth/64);
  },
  mounted: function() {
    const scroller = scrollama();

      scroller
        .setup({
          step: ".step"
        })
        .onStepEnter(response => {
          if (response.element.className.includes("firstsen")) {
            this.initAnimation()
            this.fadeInHeading()
            this.text = "YouTube's personal recommendation engine makes it difficult to understand what's happening on this platform";
          } else if (response.element.className.includes("secondsen") && response.direction == "up") {
            this.flickr();
            this.text = "YouTube's personal recommendation engine makes it difficult to understand what's happening on this platform"            
          // } else if (response.element.className.includes("secondsen") && response.direction == "down") {
          //   this.flickr();
          //   this.text = "understand what's happening on this platform"            
          // } else if (response.element.className.includes("thirdsen") && response.direction == "up") {
          //   this.flickr();
          //   this.text = "understand what's happening on this platform"            
          } else if (response.element.className.includes("thirdsen") && response.direction == "down") {
            this.flickr();
            this.text = "This tool tracks the most radical YouTube channels, and makes it searchable for an audience of journalists, researchers and academics."            
          } else if (response.element.className.includes("bottom") && response.direction == "down") {
            this.fadeOutHeading();
          } else if (response.element.className.includes("bottom") && response.direction == "up") {
            this.fadeInHeading();
          }
        })
        // .onStepExit(response => {
        //   // console.log(response)
        //   // { element, index, direction }
        // });

      // setup resize event
      window.addEventListener("resize", scroller.resize);
  },
  methods: {
    initAnimation() {
      anime({
        targets: '.bg__elem__one, .bg__elem__two, .bg__elem__three, .bg__elem__four',
        opacity: [0, 1],
        scale: [1.3, 1],
        easing: 'easeInOutQuad',
        delay: function(el, i) {
          return i * 100;
        }
      });
    },
    fadeInHeading() {
      anime({
        targets: '.introline',
        opacity: [0, 1],
        translateY: [10, 0],
        duration: 1500,
        easing: 'easeInOutQuad'
      });
    },
    fadeOutHeading() {
      anime({
        targets: '.introline',
        opacity: [1, 0],
        translateY: [0, -10],
        duration: 1500,
        easing: 'easeInOutQuad'
      });
    },
    flickr() {
      anime({
        targets: '.introline',
        opacity: [1, 0, 1, 0, 1],
        duration: 300,
        easing: 'easeInOutQuad'
      });      
    }
  }
};
</script>

<style scoped>
.introduction {
  background: black;
  min-height: 230vh;
  min-width: 100%;
  display: flex;
}

h2 {
  position: -webkit-sticky; /* for Safari */
  position: sticky;
  color: white;
  width: 100vw;
  padding-left: 20%;
  padding-right: 20%;
  text-align: center;
  font-family: "GilReg";
  font-size: 2rem;
  margin-top: 20rem;
  align-self: flex-start;
  top: 50%;
  opacity: 0;
  font-weight: 100;
}

p {
  color: black;
}

svg {
  width: 100%;
  height: 250vh;
  background: black;
  position: absolute;
}

.st0{
  fill:none;
  stroke:#575756;
  stroke-width:0.5;
  stroke-miterlimit:10;
}

.noiseblocks {
  opacity: 0;
}

.bg__elem__one {
  border-radius: 100%;
  width: 3rem;
  height: 3rem;
  background-image: url("../assets/crosshair.svg"), url("https://cdn.zummie.com/assets/noise_gif1.gif");
  background-position: center center;
  background-size: 6px, cover;
  background-repeat: no-repeat;
  position: absolute;
  margin-left: 14.5rem;
  margin-top: 6.71rem;
}

.bg__elem__two {
  border-radius: 100%;
  width: 3rem;
  height: 3rem;
  background-image: url("../assets/crosshair.svg"), url("https://cdn.zummie.com/assets/noise_gif2.gif");
  background-position: center center;
  background-size: 6px, cover;
  background-repeat: no-repeat;
  position: absolute;
  margin-left: 22.5rem;
  margin-top: 50.71rem;
}

.bg__elem__three {
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
  width: 3rem;
  height: 3rem;
  background-image: url("../assets/crosshair.svg"), url("https://cdn.zummie.com/assets/noise_gif3.gif");
  background-position: center center;
  background-size: 6px, cover;
  background-repeat: no-repeat;
  position: absolute;
  margin-left: 70.5rem;
  margin-top: 14.71rem;
}

.bg__elem__four {
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
  width: 3rem;
  height: 3rem;
  background-image: url("../assets/crosshair.svg"), url("https://cdn.zummie.com/assets/noise_gif4.gif");
  background-position: center center;
  background-size: 6px, cover;
  background-repeat: no-repeat;
  position: absolute;
  margin-left: 90.5rem;
  margin-top: 30.71rem;
}

.step__secondsen { margin-top: 100vh; }
.step__thirdsen { margin-top: 145vh; }
.step__three { margin-top: 150vh; }
.step__bottom { margin-top: 220vh; }
</style>
