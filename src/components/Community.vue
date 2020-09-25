<template>
  <div class="community">
		<div class="header">
      <div class="container">
        <h2 class="tempfix">Understand the communities behind these channels</h2>
        <p class="description">Often the only way creators can interact with their audience is through the comment section. This tool extracted all these comments so you can find out what they are actually talking about.</p>
      </div>
    </div>

    <h3 class="leftcaption">Alt-right</h3>
    <h3 class="rightcaption">Breadtube</h3>
    

    <video class="communityvideo" playsinline autoplay loop muted poster="polina.jpg">
      <source src="../assets/community_morph.mp4" type="video/mp4">
    </video>

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
  height: 200px;
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
  margin-top: 100px;
}

h3 {
  color: white;
  font-family: 'GilReg';
  position: absolute;
  font-size: 1.5rem;
}

.leftcaption {
  margin-left: 21%;
  margin-top: 33%;
}

.rightcaption {
  margin-left: 72%;
  margin-top: 33%;
}
</style>