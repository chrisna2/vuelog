<template>
    <div class="hello">
        <b-img class="avatar" src="https://classicalbumsundays.com/wp-content/uploads/2016/08/daft-punk-768x462.jpeg" rounded alt="Rounded image"></b-img>
        <br>
        <h4 style="color:#42b983"><img src="../assets/logo.png" width="40px">uelog</h4>
        <h6>made by</h6>
        <h5 style="color:#42b983">Hyunkee Na</h5>
        <br>
    </div>
</template>

<script>
export default {
  name: 'Home',
  props: {

  }
}
</script>

<style>
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.avatar {
    width: 20%;
    height: auto;
    margin: 20px;
}
</style>