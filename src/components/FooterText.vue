<template>
  <div>
    <div class="container__footer">
      <div class="column container__2-12">
        <h4>Additional data</h4>
      </div>
      <div class="column container__3-12">
        <h3>For journalists</h3>
        <p>For your convenience we have released a couple of public datasets that have been aggregated through this tool. [Rephrase: You can get these sheets and publish them in your articles]</p>
      </div>
      <div class="column container__3-12">
        <h3>For developers</h3>
        <p>If you feel that the current interface doesn't fit your needs, then you can also use our public API. Please fill in <a href="https://erikvanzummeren.typeform.com/to/ER9H43Kl" class="regularlink" target="_blank">this form</a> to get in contact.</p>
      </div>
    </div>

    <div class="container__footer container__bottom">
      <div class="column container__2-12">
        <h4>Reach out</h4>
      </div>
      <div class="column container__3-12">
        <h3>Collaborate</h3>
        <p>This tool currently tracks 235 different channels. Are you researching certain channels that aren’t covered? Please reach out through <a href="https://erikvanzummeren.typeform.com/to/RVQom7v5" class="regularlink" target="_blank">this form</a>. We are also looking for volunteers willing to curate the list of channels are being tracked.</p>
      </div>
      <div class="column container__3-12">
        <h3>Media</h3>
        <p>For press inquiries please use this form</p>
      </div>
      <div class="column container__3-12">
        <h3>About</h3>
        <p>This project was...</p>
      </div>
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

h4 {
  font-family: "Flaco";
  color: #FFE923;
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: 100;
}

.container__footer {
  margin-bottom: 2rem;
  display: grid;
  margin: 0 4rem;
  padding-top: 4rem;
  column-gap: 2rem;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-flow: column;
}

.container__bottom {
  min-height: 75vh;
}

.container__2-12 {
  grid-column: span 2; 
}

.container__3-12 {
  grid-column: span 3; 
}

h3 {
  font-family: "GilReg";
  font-size: 1.5rem;
  margin-top: 0;
  color: white;
  font-weight: 100;
  margin-top: 1rem;
}

p {
  font-family: 'Flaco';
  color: #ababab;
}
</style>