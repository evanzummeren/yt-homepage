<template>
  <div class="community">
    <div class="step step__communitystart"></div>

		<div class="header">
      <div class="container">
        <h2 class="inspect__heading">Understand people behind these channels by analyzing their comments</h2>
        <p class="inspect__description">Often times the only way creators can interact with their audience is through the comment section. This tool extracts all these comments so you can find out what they are actually talking about.</p>
      </div>
    </div>

    <div class="container__video">
      <div class="midcaption"><span class="innercaption">Define users that are</span><br/><span class="innercaption">commenting on the same channels</span></div>
      <h3 class="leftcaption captions">Alt-right</h3>
      <h3 class="rightcaption captions">Breadtube</h3>

      <div class="community__darkfill"></div>
      <video class="communityvideo" playsinline autoplay loop muted poster="../assets/community_placeholder.jpg">
        <source src="../assets/community_morph.mp4" type="video/mp4">
      </video>
    </div>

    <div class="step step__communityend"></div>
  </div>
  
</template>

<script>
export default {
  name: "Community"
}
</script>

<style lang="scss" scoped>
@import "../styles/_features.scss";

h2, .inspect__description, .captions, .midcaption {
  opacity: 0;
  z-index: 100;
}

.community {
  width: 100vw;
  height: 100vh;
}

.header {
  position: absolute;
  width: 100vw;
  background: rgb(0,0,0);
  background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%);
}

.imagebg {
  fill: url(#image)
}

.community__darkfill {
  width: 100vw;
  height: 100vh;
  background: black;
  position: absolute;
}

.communityvideo {
  object-fit: cover;
  width: 100vw;
  height: 100vh;
}

h3 {
  color: white;
  font-family: 'GilReg';
  position: absolute;
  font-size: 1.5rem;
}

.container__video {
  display: flex;
  align-items: center;
}

.captions {
  margin-top: 3%;
}

.leftcaption {
  margin-left: 21%;
}

.rightcaption {
  margin-left: 72%;
}

.midcaption {
  position: absolute;
  margin-left: 50%;
  margin-top: -10%;
  font-family: 'Flaco';
  color: white;
  font-size: .8rem;
  z-index: 10;
}

.innercaption {
  background-color: #1A1A1A;
  padding: .2rem .5rem; 
  margin-top: .5rem;
}
</style>