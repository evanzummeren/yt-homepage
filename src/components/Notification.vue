<template>
    <div class="notification">
      <div class="header">

        <div class="container">
          <h2 class="tempfix">Get notified when a channel mentions a specific topic</h2>
          <p class="description">[Tool] keeps track of the videos that gets uploaded to YouTube. You can subscribe to specific topics and receive an email if a video mentions a topic that you are interested in.</p>
        </div>

      </div>

      <div class="wrapperball" ref="wrapperball">
        <h3 class="vidtext" ref="textball">{{activeText.keyword}}</h3>

      </div>
      <div class="smallwrapperball" ref="smallwrapperball"></div>


      <!-- <video class="vidball" playsinline loop autoplay muted poster="polina.jpg"> -->
        <!-- <source src="../assets/ball.mp4" type="video/mp4"> -->
      <!-- </video> -->

      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 936.3 457" style="enable-background:new 0 0 936.3 457;" xml:space="preserve">
        <g id="bg">
          <rect class="st0" width="936.3" height="457"/>
        </g>

        <g id="xy">
          <polyline class="st1" points="588.2,-0.8 588.2,335.4 335.4,335.4 335.4,-0.8 	"/>
          <polyline class="st1" points="594.5,-0.8 594.5,338.5 329.1,338.5 329.1,-0.8 	"/>
          <polyline class="st1" points="601.3,-0.8 601.3,341.9 322.3,341.9 322.3,-0.8 	"/>
          <polyline class="st1" points="609,-0.8 609,345.7 314.6,345.7 314.6,-0.8 	"/>
          <polyline class="st1" points="617.5,-0.8 617.5,350 306.1,350 306.1,-0.8 	"/>
          <polyline class="st1" points="627,-0.8 627,354.8 296.5,354.8 296.5,-0.8 	"/>
          <polyline class="st1" points="637.8,-0.8 637.8,360.2 285.7,360.2 285.7,-0.8 	"/>
          <polyline class="st1" points="650.2,-0.8 650.2,366.4 273.4,366.4 273.4,-0.8 	"/>
          <polyline class="st1" points="664.3,-0.8 664.3,373.5 259.2,373.5 259.2,-0.8 	"/>
          <polyline class="st1" points="680.8,-0.8 680.8,381.7 242.7,381.7 242.7,-0.8 	"/>
          <polyline class="st1" points="700.2,-0.8 700.2,391.4 223.3,391.5 223.3,-0.8 	"/>
          <polyline class="st1" points="723.4,-0.8 723.4,403.1 200.1,403.1 200.1,-0.8 	"/>
          <polyline class="st1" points="751.6,-0.8 751.6,417.2 171.9,417.2 171.9,-0.8 	"/>
          <line class="st1" x1="784.7" y1="434.7" x2="137" y2="434.7"/>
        </g>

        <g id="z">
          <line class="st1" x1="335.4" y1="335.4" x2="137" y2="434.7"/>
          <line class="st1" x1="0" y1="387.7" x2="335.4" y2="303.7"/>
          <line class="st1" x1="0" y1="272.2" x2="335.4" y2="272.1"/>
          <line class="st1" x1="0" y1="156.9" x2="335.4" y2="240.5"/>
          <line class="st1" x1="0" y1="41.5" x2="335.4" y2="208.9"/>
          <line class="st1" x1="97.6" y1="-0.8" x2="335.4" y2="177.3"/>
          <line class="st1" x1="367" y1="335.4" x2="218.1" y2="434.7"/>
          <line class="st1" x1="493.4" y1="335.4" x2="542.9" y2="434.7"/>
          <line class="st1" x1="461.8" y1="335.4" x2="461.8" y2="434.7"/>
          <line class="st1" x1="398.6" y1="335.4" x2="299.3" y2="434.7"/>
          <line class="st1" x1="430.2" y1="335.4" x2="380.5" y2="434.7"/>
          <line class="st1" x1="525" y1="335.4" x2="624.1" y2="434.7"/>
          <line class="st1" x1="824.7" y1="0" x2="588.2" y2="177.3"/>
          <line class="st1" x1="936.3" y1="153.6" x2="588.2" y2="240.5"/>
          <line class="st1" x1="936.3" y1="34.9" x2="588.2" y2="208.9"/>
          <line class="st1" x1="936.3" y1="272.3" x2="588.2" y2="272.1"/>
          <line class="st1" x1="936.3" y1="391" x2="588.2" y2="303.7"/>
          <line class="st1" x1="588.2" y1="335.4" x2="784.7" y2="434.7"/>
          <line class="st1" x1="556.6" y1="335.4" x2="705.4" y2="434.7"/>
          <line class="st1" x1="733.8" y1="0" x2="588.2" y2="145.6"/>
          <line class="st1" x1="139.7" y1="-50.8" x2="335.4" y2="145.3"/>
          <line class="st1" x1="598.3" y1="-0.8" x2="588.2" y2="19.4"/>
          <path class="st1" d="M588.2,6"/>
          <line class="st1" x1="300.3" y1="-50.8" x2="335.4" y2="19.2"/>
          <line class="st1" x1="277.2" y1="-50.8" x2="335.4" y2="50.8"/>
          <line class="st1" x1="617.5" y1="-0.8" x2="588.2" y2="50.8"/>
          <line class="st1" x1="643.2" y1="0" x2="588.2" y2="82.4"/>
          <line class="st1" x1="720.1" y1="-50.8" x2="588.2" y2="114"/>
          <line class="st1" x1="246.4" y1="-50.8" x2="335.4" y2="82.4"/>
          <line class="st1" x1="203.3" y1="-50.8" x2="335.4" y2="114"/>
          <line class="st1" x1="598.3" y1="-0.8" x2="588.2" y2="19.2"/>
        </g>
      </svg>

  </div>
</template>

<script>
import scrollama from "scrollama";
import * as PIXI from 'pixi.js';
import anime from "animejs";
import bigball from '../assets/ball.mp4'
import smallball from '../assets/ball_2.mp4'

export default {
  name: "Notification",
  data: function() {
    return {
      activeText: {
        pos: 0,
        keyword: 'blabla',
        color: 'FFF'
      },
      ballTriggered: false,
      words: [
        {
          keyword: "bill gates",
          color: "#919191"
        },
        {
          keyword: "deep state",
          color: "#919191"
        },
        {
          keyword: "wayfair",
          color: "#FFF"
        },
        {
          keyword: "drain the swamp",
          color: "#919191"
        },
        {
          keyword: "disclosure",
          color: "#919191"
        }
      ]
    }
  },
  mounted: function() {
       const scroller = scrollama();

      scroller
        .setup({
          step: ".notification"
        })
        .onStepEnter(response => {
          if (this.ballTriggered === false ) {
            this.generateBall(300, 500, 'wrapperball', 'bigball');
            this.generateBall(150, 300, 'smallwrapperball', 'smallball');
            this.ballTriggered = true;
          }

          console.log(response)
          anime({
            targets: '#xy .st1',
            opacity: [0, 1],
            duration: 1000,
            easing: 'easeInOutQuad',
            delay: function(el, i) { return i * 100; }
          })

          anime({
            targets: '#z .st1',
            translateY: [10, 0],
            opacity: [0, 1],
            duration: 1000,
            easing: 'easeInOutQuad',
            // delay: function(el, i) { return i * 100; }
          })

        })
        // .onStepExit(response => {
        //   // console.log(response)
        //   // { element, index, direction }
        // });

      // setup resize event
      window.addEventListener("resize", scroller.resize);



    this.changeText(this.activeText.pos);


  },
  methods: {
    generateBall(w, h, classname, balltype) {

      const app = new PIXI.Application({
        transparent: true,
        width: w,
        height: h
      });

      this.$refs[classname].appendChild(app.view);

      const container = new PIXI.Container();
      app.stage.addChild(container);

      const radius = w/2;
      const circle = new PIXI.Graphics()
        .beginFill(0xFF0000)
        .drawCircle(radius, radius, radius)
        .endFill();

      let thisballfootage = bigball;
      let yMovement = [0, 20, 0, 20, 0]

      if (balltype === 'bigball') {
        this.animateText();
        thisballfootage = bigball
      } else if (balltype === 'smallball') {
        thisballfootage = smallball;
        yMovement = [10, 0, 10, 0, 10]
      }

      const texture = PIXI.Texture.from(thisballfootage);

      const bounds = new PIXI.Rectangle(0, 0, radius * 2, radius  * 2);
      const newTexture = app.renderer.generateTexture(circle, PIXI.SCALE_MODES.NEAREST, 1, bounds);
      const focusmask = new PIXI.Sprite(newTexture);

      container.addChild(focusmask);

      const videoSprite = new PIXI.Sprite(texture);
      const videoController = videoSprite.texture.baseTexture.resource.source;
      videoSprite.mask = focusmask;

      videoController.loop = true;
      videoController.muted = true;
      videoController.playsinline = true;
      videoController.autoplay = true;
      videoSprite.width = app.screen.width;
      videoSprite.height = w;

      anime({
        targets: container,
        y: yMovement,
        duration: 5000,
        loop: true,
        easing: 'easeInOutQuad'
      })

      container.addChild(videoSprite);
    },
    animateText() {
      anime({
        targets: this.$refs.textball,
        translateY: [0, 20, 0, 20, 0],
        duration: 5000,
        loop: true,
        easing: 'easeInOutQuad'
      })

    },
    changeText(pos) {
      console.log(pos);
      this.activeText.keyword = this.words[pos].keyword;
      let _this = this;
      let newPos = pos + 1;
      if(pos == this.words.length) {
        console.log('bla')
        newPos = 0;
      }

      anime({
        targets: this.$refs.textball,
        color: this.words[pos].color,
        duration: 1000,
        easing: 'easeInOutQuad'
      })

      setTimeout(function(){ _this.changeText(newPos) }, 5000);
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/_features.scss";

.notification {
  width: 100vw;
  height: 100vh;
}

.header {
  position: absolute;
  width: 100vw;
  // height: 500px;
  background: rgb(0,0,0);
  background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%);
}

.st0{
  stroke:#000000;
  stroke-miterlimit:10;
}

.st1{
  fill:none;
  stroke:#676766;
  stroke-width:0.25;
  opacity: 0;
  stroke-linecap:round;
  stroke-linejoin:round;
}

// .vidball {
//   width: 250px;
//   height: 250px;
//   position: absolute;
//   border-radius: 200px;
//   margin-left: 40rem;
//   margin-top: 25rem;
// }

.wrapperball {
  position: absolute;
  margin-left: 52rem;
  margin-top: 25rem;
  width: 300px;
  height: 300px;
}

.smallwrapperball {
  position: absolute;
  margin-left: 38rem;
  margin-top: 25rem;
  width: 150px;
  height: 150px;  
}

.vidtext {
  width: 300px;
  line-height: 300px;
  text-align: center;
  position: absolute;
  color: white;
  font-family: 'GilReg';
  z-index: 10;
  top: -30px;
  font-size: 2rem;
  transform-style: preserve-3d;
}
</style>