<template>
  <div class="fixedsearchcta">
    <span class="searchcta__heading">Try it out. Search for </span>
    <input v-model="message" placeholder="type here">
    <button class="searchbutton">Search</button>
    <span class="searchcta__heading">sample queries: "joe biden" </span>

  </div>
</template>

<script>
export default {
  name: "FixedSearchCTA",
  message: "joe biden"

}
</script>

<style>
.fixedsearchcta {
  bottom: 6rem;
  width: calc(100% - 8rem);
  margin: 11rem 4rem 0 4rem;
  background: #1b1b1b;
  height: 4rem;
  z-index: 200;
  display: block;
  /* position: absolute; */
}

.searchcta__heading {
  font-family: "Flaco";
  line-height: 4rem;
  margin-left: 2rem;
  font-size: .8rem;
  color: white;
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
  color: white;
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
  background-color: #383838;
  color: #a9a9a9;
  cursor: pointer;
}

.searchbutton:hover {
  background-color: #1A1A1A;

}

</style>