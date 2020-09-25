<template>
  <div class="container_footer">
    <div class="column container__one">
      <h3>Collaborate</h3>
      <p>This tool currently tracks 235 different channels. Are you doing research into a certain channel or community that isn't covered by this tool? Please reach out through this form. We are also looking for volunteers willing to curate the list of channels that we are currently tracking.</p>
    </div>
    <div class="column container__two">
      <h3>Press</h3>
      <p>Journalists are one of the core audiences for this tool. For the sake of the convenience we have also released a couple of public datasets that have been aggregated through this tool.<br/><br/>For seperate inquiries please contact</p>
    </div>
    <div class="column container__three">
      <h3>For developers</h3>
      <p>If you feel that the current interface doesn't fit your needs, then you can also use our public api. Please contact</p>
    </div>
    <div class="column container__four">
      <h3>About</h3>
      <p>This project was...</p>
    </div>

  </div>
</template>

<script>
export default {
  name: "FooterText"
}
</script>

<style lang="scss" scoped>
@import "../styles/_features.scss";

.container_footer {
  margin-bottom: 2rem;
  height: 100vh;
  display: grid;
  margin: 0 4rem;
  padding-top: 4rem;
  column-gap: 1rem;
  // grid-auto-columns: 1fr;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-flow: column;
}

.container__one {
  grid-column: span 3; 
}

.container__two {
  grid-column: span 3; }

.container__three {
  grid-column: span 3; }

.container__four {
  grid-column: span 3; }

h3 {
  font-family: "GilReg";
  font-size: 1.5rem;
  margin-top: 0;
  color: white;
  font-weight: 100;
}

p {
  font-family: 'Flaco';
  color: #ababab;
}
</style>