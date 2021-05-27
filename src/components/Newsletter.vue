<template>
  <div class="fixedsearchcta">
    <span v-if="subscribed" class="searchcta__heading">
      Thank you! Please check your inbox to verify your subscription.
    </span>
    <span v-if="!subscribed" class="searchcta__heading">
      Get notified when this feature launches. Sign up for our very irregular newsletter!
    </span>

    <form
      v-if="!subscribed"
      class="newsletter__form"
      @submit="joinNewsletter"
      method="post"
    >
      <input v-model="email" type="email" placeholder="email@email.com">
      <button class="searchbutton">Join</button>

    </form>

  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "FixedSearchCTA",
  data: function() {
    return {
      email: "",
      subscribed: false,
      url: "https://tool.raditube.com/search/q/%22biden%20is%20a%22/cat/qanon,altright,althealth,breadtube,conspiracy,marxism/sort/desc"
    }
  },
  methods: {
    joinNewsletter: function (e) {
      e.preventDefault();
      // this.$parent.amplitudeInstance.logEvent('Newsletter — Joined');

      console.log(this.email);

      axios.post('https://y1yd1oyc37.execute-api.us-east-1.amazonaws.com/submitEmail', {
        "email": this.email,
        "activated": false,
        "newsletter": true
      })
      .then((result) => {
        this.processRegistration(result)
      }, (error) => {
        console.log(error);
      });

      
      console.log('SEND APPLICATION')
      // window.open(`https://tool.raditube.com/search/q/${this.email}/cat/qanon,altright,althealth,breadtube,conspiracy,marxism/sort/desc`, '_blank');
    },
    processRegistration: function (result) {
      console.log('process')
      console.log(result.data);


      axios.post('https://y1yd1oyc37.execute-api.us-east-1.amazonaws.com/sendVerification', {
        "email": result.data.email,
        "uuid": result.data.id
      })
      .then(() => {
        this.subscribed = true;
      }, (error) => {
        console.log(error);
      });
    },
    trackClick: function (elem) {
      this.$parent.amplitudeInstance.logEvent(elem);
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
  display: flex;
  /* position: absolute; */
}

.newsletter__form {
  // width: 300px;
  line-height: 4rem;
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
  background-image: url("../assets/email.svg");
  background-position: 3px 2px;
  background-size: 16px;
  background-repeat: no-repeat;
  border-bottom: 1px solid #2F2F2F;
  font-family: "Flaco";
  font-size: .8rem;
  padding-left: 1.75rem;
  width: 12rem;
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