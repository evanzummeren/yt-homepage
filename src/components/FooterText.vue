<template>
  <div>
    <div class="container__footer">
      <div class="column container__2-12">
        <!-- <h4>Additional data</h4> -->
      </div>
      <div class="column container__3-12">
        <h3>For journalists</h3>
        <p>In the future there will be public datasets available that have been aggregated through this tool.</p>
      </div>
      <div class="column container__3-12">
        <h3>For developers</h3>
        <p>If you feel that the current interface doesn't fit your needs, then you can also use our public API. Please fill in <a href="https://erikvanzummeren.typeform.com/to/ER9H43Kl" class="regularlink" target="_blank">this form</a> to get in contact.</p>
      </div>
      <div class="column container__3-12">
        <h3>Donate</h3>
        <p>RadiTube is supported through grants. If you would like to make a donation through PayPal please click <a href="https://www.paypal.com/donate?hosted_button_id=DB3TDJ7854YQG" target="_blank">here</a>.</p>
      </div>
    </div>

    <div class="container__footer container__bottom">
      <div class="column container__2-12">
        <h4>Reach out</h4>
      </div>
      <div class="column container__3-12">
        <h3>Collaborate</h3>
        <p>Raditube currently tracks around 550 different channels. Are you researching certain channels that aren’t covered? Please reach out through <a href="https://erikvanzummeren.typeform.com/to/RVQom7v5" class="regularlink" target="_blank">this form</a>. You can also use this form if you are willing to help curate the list of channels that are currently being tracked.</p>
      </div>
      <div class="column container__3-12">
        <h3>Methodology</h3>
        <p>A list of indexed channels can be found on <a href="https://tool.raditube.com/channels/1" class="regularlink" target="_blank">this page</a>. Clicking on the channel will show you the videos that have been indexed. More details can be found in this Medium post.</p>
      </div>
      <div class="column container__3-12">
        <h3>About</h3>
        <p>RadiTube is a search engine which indexes radical and conspiratorial content on YouTube. It was launched in November 2020. The core team currently consists of Erik van Zummeren and Cameron Ballard.</p>
        <br/>
        <p>Important support has been provided by the <a href="https://www.sidnfonds.nl" class="regularlink" target="_blank">SIDN Fonds</a>, <a href="https://www.limelight.foundation/" target="_blank">Limelight Foundation</a>, SVDJ, <a href="https://www.scrapinghub.com" class="regularlink" target="_blank">ScrapingHub</a> and <a href="https://www.digitalocean.com" class="regularlink" target="_blank">DigitalOcean</a>.<br/></p>
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
