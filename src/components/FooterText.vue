<template>
  <div class="container_footer">
    <div class="column container__one">
      <h3>Collaborate</h3>
    </div>
    <div class="column container__two">
      <h3>Press</h3>
    </div>
    <div class="column container__three">
      <h3>For developers</h3>
    </div>
    <div class="column container__four">
      <h3>About</h3>
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
</style>