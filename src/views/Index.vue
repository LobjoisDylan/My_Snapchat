<template>
  <div class="background-grey">
    <div class="background-yellow">
    <img src="http://www.agconnect.nl/sites/ag/files/snapchat.jpg">

        <form action="/connection" method="get">
          <button class="log-in">LOG IN</button>
        </form>

        <form action="/register" method="get">
          <button class="sign-in">SIGN IN</button>
        </form>
    </div>
  </div>
</template>

<script>

</script>

<style>

.background-grey {
  background-color: rgb(33,33,33);
  height: 695px;
  width: 100%;
}

.background-yellow {
  background-color: rgb(254,255, 0);
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

.log-in {
  height: 100px;
  background-color: rgb(233,39,84);
  color: white;
  font-size: 20px;
  font-weight: bold;
  width: 500px;
  margin-top:210px;
  border:none;
}

.sign-in {
  height: 100px;
  background-color: rgb(60,178,226);
  color: white;
  font-size: 20px;
  font-weight: bold;
  width: 500px;
  border:none;
}

.margin {
  padding-top:40px;
}

</style>
