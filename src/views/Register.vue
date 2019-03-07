<template>
  <div class="home">
    <div class="background-grey">
      <div class="background-yellow">
        <a href="/"><img src="https://img.bfmtv.com/c/630/420/c07908e7/fa8090f612d1b5a1d27c06cb.jpeg"></a>
        <h1>Sign in</h1>
        <form action="" v-on:submit.prevent="submit" method="post">
          <input type="email" v-model="email" placeholder="email"/>
          <input type="password" v-model="password" placeholder="password"/>
          <div>
            <button>Sign in</button>
          </div>
          <ul v-if="errors && errors.length">
            <li v-for="error of errors">
              {{error.message}}
            </li>
          </ul>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Inscription from "@/components/Register.vue";
import axios from "axios";

export default {
  data() {
    return {
      email: '',
      password: '',
      errors: []
    }
  },

  methods: {
    submit() {
      axios.post('https://api.snapchat.wac.epitech.eu/inscription', {
        email: this.email,
        password: this.password
      })
      .then(response => {
        window.location.href = "/connection"
      })
      .catch(e => {
        console.log(localStorage.token);
        this.errors.push(e);
      })
    }
  }
}
</script>

<style scoped>

ul {
  list-style-type:none;
}

input {
  padding:10px;
  margin-left:5px;
  margin-top:10px;
  width: 250px;
}

button {
  width: 275px;
  padding: 10px;
  background-color: rgb(60,178,226);
  color: white;
  font-size:18px;
  margin-top:10px;
  border: none;
  margin-left:10px;
}

h1 {
  padding-top:150px;
  color:white;
}

img {
  width: 150px;
}

</style>
