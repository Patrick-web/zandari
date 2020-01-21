<template>
    <div class="wrapper">
    <div id="pgTitle" class="getShadow">
        <p id="actualTitle">subDoc</p>
    </div>
        <div class="boxContainer getShadow ">
                <div  v-for="doc in docs" :key="doc.area" v-on:click ="redirectTo(doc.area)" class="box">
                <p class="docTitle">Doc title</p>
                <a  :href="getExternalLink()">
                  <p class="docLink"> Open </p>  
                </a>
                </div>
        </div>
    </div>

</template>

<script>
import {mapGetters} from 'vuex';
import switchBt from "../components/switchBt.vue";
import pageTitle from '../components/pageTitle.vue';
import axios from 'axios' ;

export default {
    name:"docs",
    components:{
        pageTitle,
        switchBt
    },
    data(){
        return{
            pageTitle:'',
            docs:[]
        }
    },

    methods:{
        ...mapGetters(['themeMode']),
        getExternalLink(docName) {

        
        },
        redirectTo(doc){
            this.$router.push(`/requesteddoc/${doc}`)
        }
    },
    
    async created(){
        console.log("Hit");
          const response = await  axios.get(`/api/zdocs`) 
          console.log(response.data);  
          response.data.forEach((doc)=>{
              this.docs.push(doc)
          })  

        console.log(this.docs);

        setTimeout(()=>{
        if(this.themeMode() == 'Dark'){
        document.querySelector('.wrapper').style.background='#171717';
        document.querySelector('.boxContainer').style.background='#111111';
        document.querySelector('#pgTitle').style.background='#9B1650';
        const boxesArray = document.querySelectorAll('.box');
        boxesArray.forEach((box)=>box.style.background='black')
        const boxTitleArray = document.querySelectorAll('.title');
        boxTitleArray.forEach((title)=>title.style.background='#9B1650')
        document.querySelector('body').style.background='#171717';

        }else{
        document.querySelector('.wrapper').style.background='white';
        document.querySelector('.boxContainer').style.background='#EBEBEB';
        const boxesArray = document.querySelectorAll('.box');
        boxesArray.forEach((box)=>box.style.background='rgb(241, 241, 241)')
        const boxTitleArray = document.querySelectorAll('.title');
        boxTitleArray.forEach((title)=>title.style.background='#4A86E8')
        document.querySelector('body').style.background='white';
        }
        },500)
        }
    
}
</script>

<style scoped>
  .docTitle{
      color:white;
      border-radius:20px;
      margin:10px;
      font-size:1.4em;
      padding:2px;
      background: rgb(23, 112, 245);
  }
  .docLink{
      background: rgb(23, 112, 245);
      color:white;
      border-radius:20px;
      margin:10px;
      margin-left:80px;
      margin-right:80px;
      font-size:1.4em;
      padding:5px;
      transition: all 0.4s;
  }
  .docLink:hover{
      margin-left:60px;
      margin-right:60px;
      background: rgb(255, 174, 0);
  }

</style>