<template>
  <div class="background-grey">
    <div class="background-yellow">
      <div>
        <img src="https://img.bfmtv.com/c/630/420/c07908e7/fa8090f612d1b5a1d27c06cb.jpeg" class="logo-snap">
        <a href="" v-on:click="logout"><img src="../assets/logout.png" class="logout"></a>
        <input type="file" id="file" ref="file" v-on:change="handleFileUpload()"/>
        <button v-on:click.prevent="submitFile()" class="margins">Upload</button>
        <ul>
          <li v-for="emails in email" v-text="emails" v-on:click="envoie(emails)"></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import VueSelectImage from 'vue-select-image'
export default {

  data(){
    return {
      duration: '5',
      to: '',
      image: '',
      email: []
    }
  },

  created: function() {
    if(!localStorage.token) {
      console.log("token");
      if(localStorage.logout == "logout") {
        console.log("logout");
        window.location.href = "/connection";
      }
    }
  },

  methods: {
    logout() {
      if(localStorage.token) {
        localStorage.removeItem('token');
        window.location.href = "/connection";
        console.log(localStorage);
        localStorage.logout = "logout";
      }
    },

    submitFile(){
      axios.get('https://api.snapchat.wac.epitech.eu/all', {
        headers: {
          'Content-Type': 'application/json',
          'token': localStorage.token,
        },
      }).then(response => {
        for(var i = 0; i < response.data.data.length; i++) {
          this.email.push(response.data.data[i]["email"]);
        }
      })
    },

    envoie(to) {
      let formData = new FormData();
      this.to = to;
      formData.append('image', this.image);
      formData.append('duration', this.duration);
      formData.append('to', this.to);
      axios.post( 'https://api.snapchat.wac.epitech.eu/snap', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'token': localStorage.token,
        },
      }).then(response => {
        localStorage.snap = "snap";
        alert('Envoie de ' + this.image + ' a ' + this.to + " d'une durée de "
        + this.duration + ' secondes')

      }).catch(function(){
        console.log('Incorrect');
      });
    },

    handleFileUpload() {
      this.image = this.$refs.file.files[0];
    },
  }
}
</script>

<style scoped>

ul {
  list-style-type: none;
}

.background-grey {
  background-color: rgb(33,33,33);
  min-height:100vh;
  height: 100%;
  width: 100%;
}

.background-yellow {
  background-color: rgb(254,255, 0);
  min-height:100vh;
  height: 100%;
  width: 500px;
  margin: 0 auto;
}

#nav {
  display:none;
}

#nav a {
  display: none;
}

img {
  width: 50px;
}

.logo-snap {
  width: 150px;
  margin-left:130px
}

.logout {
  width:40px;
  margin-left:90px;
  margin-bottom: 30px;
}

.margins {
  margin-bottom: 40px;
}

</style>
