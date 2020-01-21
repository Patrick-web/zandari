<template>
  <div id="app">
     <navBar/>
    <img v-on:click="expandNav()" class="toggle" src="./assets/actionBtns/navToggle.svg" id="navToggle" alt="">
    <img v-on:click="closeNav()" class="toggle" src="./assets/actionBtns/close.svg" id="closeNav" alt="">
    
    <router-view/>

  </div>
</template>

<script>
import {mapGetters , mapActions} from 'vuex';
import switchBt from "./components/switchBt.vue";
import navBar from "./components/navBar.vue";

export default {
  name: 'app',
  components: {
    switchBt,
    navBar
  },
  data (){
      return{
      }
  },
  methods: {
        ...mapGetters(['themeMode']),
        expandNav(){
             document.querySelector('.navBar').style.clipPath='circle(100% at 0% 0%)'
             document.querySelector('#navToggle').style.display='none'
             document.querySelector('#closeNav').style.display='block'
         },
        closeNav(){
            console.log("clicked");
            document.querySelector('.navBar').style.clipPath='circle(22% at 0% 0%)'
            document.querySelector('#closeNav').style.display='none'
            document.querySelector('#navToggle').style.display='block'

        }
  },
  created() {
    //   localStorage.setItem('ZandariTheme',"Light");
  },

 
}
</script>

<style>
body{
    margin: 0;
    padding: 0;
}
#app {
  font-family: Roboto;
  padding: 10;
  --blue:#4A86E8;
  --gradient: linear-gradient(90deg,orange,red);
    
  width: 100%;
  /* height: 100vh; */
  /* overflow: hidden; */
  margin: 0;
}
.toggle{
    display: none;
}
#navToggle{
    width: 30px;
    float: left;
    position: fixed;
    z-index: 2;
    cursor: pointer;
    margin-left: 5px;
    margin-top: 5px;
}
#closeNav{
    display: none;
    width: 30px;
    float: left;
    position: fixed;
    z-index: 2;
    cursor: pointer;
}
.activePage{
    border-bottom: rgb(255, 0, 85);
}
iframe{
    /* position: absolute; */
    top: 0;
    left: 0;
    width: 100%;
    height: 60vh;
    }

    .wrapper{
        margin: 0px;
    }
    
    .boxContainer{
        background: #EBEBEB;
        display:grid;
        grid-template-columns: 1fr 1fr 1fr;
        column-gap: 5px;
        row-gap: 5px;
        text-align: center;
        border-radius: 10px;
        width:900px;
        padding-bottom: 5px;
        margin: auto;
        margin-top:20px;
        padding: 20px;
        position:relative;
        overflow: hidden;
    }
    .box{
        margin:auto;
        margin-top:8px;
        margin-bottom:8px;
        text-align: center;
        background:rgb(241, 241, 241);
        border-radius: 15px;
        transition: all 0.4s ease-in-out;
        width:250px;
        height:230px;
        position: relative;
        box-shadow: 0px 0px 5px rgb(85, 85, 85);
        /* overflow: hidden; */
    }
    .box img{
        transition: all 0.4s;
        transform: scale(0.8);
        width:200px;
        height: 210px;
        margin-top: -10px;   

    }
    .box:hover{
        border-radius: 10px;
        box-shadow: 0px 0px 8px rgb(63, 63, 63);

    }
    .box:hover img{
        transform: scale(0.9);
    }
    .title{
        text-align: center;
        font-size: 1.2em;
        background:#4A86E8;
        /* height:50px; */
        padding-top:5px;
        padding-bottom: 5px;
        padding-left: 0;
        padding-right: 0;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        color: white;
        /* position:absolute; */
        width:100%;
        /* bottom:0; */
    }
    #titleBar{
        padding-top:5px;
        position: relative;
    }
    #nextBt{
        border-radius: 100%;
        border:none;
        outline: none;
        position:absolute;
        z-index: 2;
        top:45%;
        right:-25px;
        transition: 0.1s ease-in-out;
    }
    ::-webkit-scrollbar{
        display: none;
    }
    @media screen and (max-width: 700px) {
        iframe{
            margin-top: 0;
            padding-top: 0;
            height: 40vh;
        }
        .toggle{
            display: initial;
            margin: 8px;
        }
        .wrapper{
            width: 100%;
        }
        .boxContainer{
            grid-template-columns: 1fr 1fr;
            width:100%;
            margin: auto;
            margin-top: 10px;
            padding:2px;
        }
        .box{
            width:140px;
            height: 140px;
            margin:auto;
            margin-top:10px;
            margin-bottom: 10px;
            border-radius: 8px;
            position: relative;
            box-shadow: 0px 0px 5px rgb(85, 85, 85);
        }
        .title{
            padding: 5px;
            padding-left: 0px;
            padding-right: 0px;
            padding-top:8px;
            margin:0;
            font-size:1em;
            height: 20px;
            border-bottom-left-radius: 8px;
            border-bottom-right-radius: 8px;
            position: absolute;
            width:140px;
            bottom:0;
            text-align: center;
        }
        .box img{
            width: 90px;
            height: 100px;
            margin-top: 0px;
            padding: 0;
        }
}

.getShadow{
    box-shadow: 0px 0px 5px rgb(73, 73, 73);
}
.lesserShadow{
    box-shadow: 0px 0px 5px rgb(107, 107, 107);
}
a{
  text-decoration:none;
  color: white;

}
</style>
