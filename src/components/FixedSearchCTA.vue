<template>
  <div class="fixedsearchcta">
    <span class="searchcta__heading">Try it out. Search for </span>
    <input v-model="query" placeholder="type here" v-on:keyup.enter="performSearch">
    <button class="searchbutton" v-on:click="performSearch">Search</button>
    <span class="searchcta__heading sec">or try <a :href="url" target="_blank">{{currentKey}}</a></span>

  </div>
</template>

<script>
export default {
  name: "FixedSearchCTA",
  data: function() {
    return {
      query: "reptilians",
      currentKey: '"biden is a"',
      url: "https://tool.raditube.com/search/q/%22biden%20is%20a%22/cat/qanon,altright,althealth,breadtube,conspiracy,marxism/sort/desc",
      sampleQueries: [
        {
          key: '"q says"',
          url: "https://tool.raditube.com/search/q/%22q%20says%22/cat/qanon,altright,althealth,breadtube,conspiracy,marxism/sort/desc/"
        },
        {
          key: 'vaccines',
          url: "https://tool.raditube.com/search/q/vaccines/cat/qanon,altright,althealth,breadtube,conspiracy,marxism/sort/desc/"
        },
        {
          key: '"covid~"',
          url: "https://tool.raditube.com/search/q/covid~/cat/qanon,altright,althealth,breadtube,conspiracy,marxism/sort/desc/"
        }       
      ]
    }
  },

  mounted: function() {
    let counter = 0;
    let arrLength = this.sampleQueries.length;
    

    window.setInterval(() => {
      this.currentKey = this.sampleQueries[counter].key;
      this.url = this.sampleQueries[counter].url;
      counter++;

      if (counter === arrLength) {
        counter = 0;
      }
    }, 5000);

  },
  methods: {
    performSearch: function () {
      this.$mixpanel.track('clicks', {
        'destination': 'fixedsearchcta'
      });
    
      window.open(`https://tool.raditube.com/search/q/${this.query}/cat/qanon,altright,althealth,breadtube,conspiracy,marxism/sort/desc`, '_blank');
    }
  }

}
</script>

<style lang="scss" scoped>
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

.sec {
  margin-left: 1rem;
}

a {
  color: white;
}

</style>