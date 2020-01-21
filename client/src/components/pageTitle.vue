<template>
    <div id="pgTitle" class="getShadow">
        <p id="actualTitle">{{title}}</p>
    </div>
</template>

<script>
export default {
    name:"pageTitle",
    props:{
        title: String
    }
}
</script>

<style>
  #pgTitle{
      background:var(--blue);
      width: 500px;
      margin:auto;
      padding:5px;
      color: white;
      text-align:center;
      font-size: 3em;
      border-radius: 50px;
  }
  p{
      margin:0;
      padding: 0;
  }
      @media screen and (max-width: 700px) {
          #pgTitle{
              font-size: 1.8em;
              width:220px;
          }
      }
</style>