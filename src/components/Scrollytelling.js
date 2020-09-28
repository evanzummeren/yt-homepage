import scrollama from "scrollama";
import anime from "animejs";

export default {
  methods: {
    initiateScrolls() {
      this.hero();
      this.community();
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
     community() {
      const scrollerCommunity = scrollama();

      scrollerCommunity
        .setup({
          step: ".step"
        })
        .onStepEnter(response => {  
          if (response.element.className.includes("communitystart") && response.direction === "down") {
            this.communityEnterAnim()
          } else if (response.element.className.includes("communityend") && response.direction === "up") {
            this.communityEnterAnim()
          }
        })
        .onStepExit(response => {
          if (response.element.className.includes("communityend") && response.direction === "down") {
            this.communityLeaveAnim();
          } else if (response.element.className.includes("communitystart") && response.direction === "up") {
            this.communityLeaveAnim()
          }
        });
  
        window.addEventListener("resize", scrollerCommunity.resize);
     },
     communityEnterAnim() {
      anime({
        targets: '.inspect__heading, .inspect__description, .captions, .midcaption',
        translateY: [3, 0],
        opacity: [0, 1],
        duration: 1000,
        easing: 'easeInOutQuad',
        delay: function(el, i) {
          return i * 500;
        }
      });

      anime({
        targets: '.community__darkfill',
        opacity: [1, 0],
        duration: 1000,
        easing: 'easeInOutQuad',
        delay: 1000
      });
     },
     communityLeaveAnim() {
      anime({
        targets: '.inspect__heading, .inspect__description, .captions, .midcaption',
        translateY: [0, 3],
        opacity: [1, 0],
        duration: 1000,
        easing: 'easeInOutQuad',
        delay: function(el, i) {
          return i * 500;
        }
      });

      anime({
        targets: '.community__darkfill',
        opacity: [0, 1],
        duration: 1000,
        easing: 'easeInOutQuad',
        delay: 300
      });

     }
  }
}