<template>
  <div class="home">
    <div class="background-grey">
      <div class="background-yellow">
          <a href="/"><img src="https://img.bfmtv.com/c/630/420/c07908e7/fa8090f612d1b5a1d27c06cb.jpeg"></a>
        <h1>Log In</h1>
        <form action="" v-on:submit.prevent="submit" method="post">
          <ul>
            <li><input type="email" v-model="email" placeholder="email"/></li>
            <li><input type="password" v-model="password" placeholder="password"/></li>
          </ul>
          <div>
            <button>Log in</button>
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
      token: '',
      errors: []
    }
  },

  methods: {
    submit() {
      axios.post('https://api.snapchat.wac.epitech.eu/connection', {
        email: this.email,
        password: this.password,
      })
      .then(response => {
        data: {
          var token = response.data.data.token;
          if(token != "") {
            localStorage.removeItem('logout')
            localStorage.token = token;
            window.location.href = "/home"
          }
        }
      })
      .catch(e => {
        this.errors.push(e);
      })
    }
  }
}
</script>

<style scoped>

form {
  display:inline-block;
  width:100%;
}

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
  background-color: rgb(233,39, 84);
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
