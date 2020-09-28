<template>
  <div class="community">
		<div class="header">
      <div class="container">
        <h2 class="tempfix">Inspect the people and comments behind these channels</h2>
        <p class="description">Often the only way creators can interact with their audience is through the comment section. This tool extracted all these comments so you can find out what they are actually talking about.</p>
      </div>
    </div>


    <div class="container__video">
      <div class="midcaption"><span class="innercaption">Find out which users are</span><br/><span class="innercaption">commenting on the same channel</span></div>
      <h3 class="leftcaption captions">Alt-right</h3>
      <h3 class="rightcaption captions">Breadtube</h3>
      <video class="communityvideo" playsinline autoplay loop muted poster="../assets/community_placeholder.jpg">
        <source src="../assets/community_morph.mp4" type="video/mp4">
      </video>
    </div>

  </div>
  
</template>

<script>
export default {
  name: "Community"
}
</script>

<style lang="scss" scoped>
@import "../styles/_features.scss";

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
}

.innercaption {
  background-color: #1A1A1A;
  padding: .2rem .5rem; 
  margin-top: .5rem;
}
</style>