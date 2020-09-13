<template>
  <div class="introduction">
    <svg>
      <g v-for="vindex in 90" :key="vindex">
      <g v-for="index in widthPoints" :key="index">
        <line class="st0" :x1="64 * index" :y1="vindex * 64 - 64" :x2="64 * index" :y2="vindex * 64 + 6 - 64"/>
        <line class="st0" :x1="64 * index + 3" :y1="vindex * 64 - 64 + 3" :x2="64 * index - 3" :y2="vindex * 64 - 64 + 3"/>
      </g>
      </g>
    </svg>

    <div class="bg__elem__one"></div>
    <div class="bg__elem__two"></div>
    <div class="bg__elem__three"></div>
    <div class="bg__elem__four"></div>

    <div class="step step__one"></div>
    <div class="step step__two"></div>
    <div class="step step__three"></div>
    <div class="step step__four"></div>
    <div class="step step__five"></div>

    <h2>{{text}}</h2>

  </div>
</template>

<script>
import scrollama from "scrollama";

export default {
  name: "Introduction",
  data: function() {
    return {
      text: "Every minute more than 500 hours of video is uploaded to YouTube",
      widthPoints: 10,
    }
  },
  created: function() {
    this.widthPoints = Math.ceil(window.innerWidth/64);
  },
  mounted: function() {
    const scroller = scrollama();

    // setup the instance, pass callback functions
      scroller
        .setup({
          step: ".step"
        })
        .onStepEnter(response => {
          console.log(response)
          if (response.index === 0) {
            this.text = "Every minute more than 500 hours of video is uploaded to YouTube"
          } else if (response.index === 1) {
            this.text = "Some of these videos have a devastating effect on our society"            
          } else if (response.index === 2) {
            this.text = "They polarize groups to each other"            
          } else if (response.index === 3) {
            this.text = "And radicalize individuals"            
          } else if (response.index === 4) {
            this.text = "However, due to YouTube's algorithmic nature, it's often difficult to understand what's happening in the dark corners of the platform"            
          }

//           However,  due to YouTube’s algorithmic nature, it’s often difficult
// to understand what’s happening in the dark corners of the platform
          // { element, index, direction }
        })
        // .onStepExit(response => {
        //   // console.log(response)
        //   // { element, index, direction }
        // });

      // setup resize event
      window.addEventListener("resize", scroller.resize);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.introduction {
  background: black;
  min-height: 400vh;
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
}

p {
  color: black;
}

svg {
  width: 100%;
  height: 400vh;
  background: black;
  position: absolute;
}

.st0{
  fill:none;
  stroke:#575756;
  stroke-width:0.5;
  stroke-miterlimit:10;
}

.bg__elem__one {
  border-radius: 100%;
  width: 3rem;
  height: 3rem;
  background-image: url("../assets/crosshair.svg"), url("../assets/noise_gif1.gif");
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
  background-image: url("../assets/crosshair.svg"), url("../assets/noise_gif2.gif");
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
  background-image: url("../assets/crosshair.svg"), url("../assets/noise_gif3.gif");
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
  background-image: url("../assets/crosshair.svg"), url("../assets/noise_gif4.gif");
  background-position: center center;
  background-size: 6px, cover;
  background-repeat: no-repeat;
  position: absolute;
  margin-left: 90.5rem;
  margin-top: 30.71rem;
}

.step {
  width: 10px;
  height: 10px;
  /* background: white; */
  position: absolute;
}

.step__one {
  margin-top: 50vh;
}

.step__two {
  margin-top: 100vh;
}

.step__three {
  margin-top: 150vh;
}

.step__four {
  margin-top: 200vh;
}

.step__five {
  margin-top: 250vh;
}

</style>
