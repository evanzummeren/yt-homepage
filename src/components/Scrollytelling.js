import scrollama from "scrollama";
import anime from "animejs";

export default {
  methods: {
    initiateScrolls() {
      this.hero()
    },
     hero() {
      const scrollerHero = scrollama();

      scrollerHero
        .setup({
          step: ".step"
        })
        .onStepEnter(response => {  
          if(response.element.className.includes("leavehero") && response.direction === "up") {
            anime({
              targets: '.vidblock',
              translateY: [50, 0],
              opacity: [0, 1],
              duration: 1000,
              delay: function(el, i) {
                return i * 300;
              },
              easing: 'easeInOutQuad'
            });

            this.vidAnimation.play();
          } 
        })
        .onStepExit(response => {
          if(response.element.className.includes("leavehero") && response.direction === "down") {

            this.vidAnimation.pause();

            anime({
              targets: '.vidblock',
              translateY: [0, -50],
              opacity: [1, 0],
              duration: 1000,
              delay: function(el, i) {
                return i * 300;
              },
              easing: 'easeInOutQuad'
            });
          }
        });
  
        window.addEventListener("resize", scrollerHero.resize);
     },
     introduction() {
       
     }
  }
}