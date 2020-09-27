<template>
  <div class="searchcta">
    <span class="searchcta__heading">Try it out. Search for </span>
    <input v-model="message" placeholder="type here">
    <span class="searchcta__heading">in</span>
    <select v-model="selected">
      <option disabled value="">Select a community</option>
      <option>qanon</option>
      <option>altright</option>
      <option>C</option>
    </select>
    <button class="searchbutton">Search</button>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: "Search",
  data: function() {
    return {
      message: "george soros",
      selected: ""
    }
  },
  mounted: function() {

    anime({
      targets: '.searchcta',
      translateY: [100, 0],
      scale: [1.2, 1],
      opacity: [0, 1],
      duration: 1000,
      easing: 'easeInOutQuad'
    });

  }
}
</script>

<style lang="scss" scoped>
@import "../styles/_features.scss";

.searchcta {
  position: fixed;
  bottom: 6rem;
  width: calc(100% - 8rem);
  margin-left: 4rem;
  margin-right: 4rem;
  background: #C4C4C4;
  height: 4rem;
  z-index: 200;
  opacity: 0;
}

.searchcta__heading {
  font-family: "Flaco";
  line-height: 4rem;
  margin-left: 2rem;
  font-size: .8rem;
  color: #1A1A1A;
  margin-right: .5rem;
}

input, select, button {
  outline: none;
  -webkit-appearance: none; 
  border:none;
  background-image:none;
  background-color:transparent;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
}

input {
  background-image: url("../assets/search.svg");
  background-size: 16px;
  background-repeat: no-repeat;
  border-bottom: 1px solid #2F2F2F;
  font-family: "Flaco";
  font-size: .8rem;
  padding-left: 1.5rem;
}

select {
  border-bottom: 1px solid #2F2F2F;
  font-family: "Flaco";
  font-size: .8rem;
  margin-left: 1rem;
  margin-top: 1px;
}

.searchbutton {
  border-bottom: 1px solid #2F2F2F;
  font-family: "Flaco";
  font-size: .8rem;
  margin-left: 1rem;
  margin-top: 1px;
  padding: .3rem .6rem;
  background-color: #1A1A1A;
  color: #6A6A6A;
  cursor: pointer;
}
</style>