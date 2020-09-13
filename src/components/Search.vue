<template>
  <div class="container">
    <h3>Features</h3>
    <h2>Perform full text search on ‘radical’ YouTube content</h2>

    <div class="searchbox">
      <span>elite pedophile ring</span>
      <div class="searchbox__button">search</div>
    </div>

    <div class="results">
      <div class="result result__first">
        <div class="result__text">
          <span class="result__text--innershadow"></span>
          proven true there actually was an international <span class="highlight">elite pedophile ring</span> proven true there actually was an international
        </div>
        <span class="result__thumb">
          <span class="result__thumb--innershadow"></span>
        </span>
      </div>

      


    </div>
  </div>
</template>

<script>
export default {
  name: "Search"
}
</script>

<style scoped>
.container {
  /* height: 200vh; */
  display: grid;
  grid-template-columns: repeat(16, [col-start] 1fr);
  align-items: start;
  justify-content: start;
  grid-auto-flow: column;
  grid-row-gap: 2rem;
  column-gap: 1rem;
  margin-left: 4rem;
  margin-right: 4rem;
  padding-top: 4rem;
}

h3 {
  grid-column: col-start / 16;
  font-family: "Flaco";
  color: #FFE923;
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: 100;
}

h2 {
  grid-column: col-start / 16;
  font-family: "GilReg";
  font-size: 2rem;
  margin-top: 0;
  color: white;
  font-weight: 100;
}

.searchbox {
  grid-column: col-start / 16;
  display: flex;
}

.searchbox span {
  background-image: url("../assets/search.svg");
  background-repeat: no-repeat;
  background-position: .5rem .2rem;
  color: white;
  font-family: 'Flaco';
  font-size: 1.25rem;
  border-bottom: 1px solid #2F2F2F;
  line-height: 2rem;
  width: 24rem;
  display: block;
  padding-left: 3rem;
}

.searchbox__button {
  margin-left: 2rem;
  line-height: 2rem;
  color: #6A6A6A;
  font-family: 'Flaco';
  font-size: 1.25rem;
  border-bottom: 1px solid #2F2f2f;
  background: #1A1A1A;
  padding-left: 2rem;
  padding-right: 2rem;
  font-weight: 100;
}

.results {
    grid-column: col-start / 16;
  display: grid;
}

.result {
width: 100vw;
  margin-top: 4rem;
  margin-left: -4rem;
  margin-bottom: 4rem; /*DETELETE*/
}

.result__text {
  color: #BBBBBB;
  font-family: "Flaco";
  font-size: 1rem;
  position: absolute;
  z-index: 10;
}

.result__text .highlight {
  background: #FFE923;
  padding: .25rem;
  color: black;
  border-radius: 5px;
}

.result__thumb {
  height: 90px;
  width: 160px;
  background: url("../assets/thumb_1.png");
  background-size: cover;
  position: absolute;
  margin-top: -40px;
  z-index: 0;
  margin-left: 580px;
}

.result__thumb--innershadow {
  height: 90px;
  width: 160px;
  background: rgb(0,0,0);
background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 45%);
display: block;
}

.result__text--innershadow {
  height: 40px;
  width: 160px;
  background: rgb(0,0,0);
  background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 45%);
  display: block;
  position: absolute;
}
</style>