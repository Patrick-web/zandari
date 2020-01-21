<template>
    <div class="wrapper">
        <div id="titleBar">
            <pageTitle title="Categories" />
        </div>
        <div class="boxContainer getShadow ">
                <div  v-for="category in Categories" :key="category.name" v-on:click ="redirectTo(category.name)" class="box">
                <img :src="getImgUrl(category.name)">
                <p class="title">{{category.name}}</p>
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
    name:"Categories",
    components:{
        pageTitle,
        switchBt
    },
    data(){
        return{
            Categories:[]
        }
    },

    methods:{
        ...mapGetters(['themeMode']),
        getImgUrl(pic) {
        return require('../assets/categoriesImgs/' + pic + '.svg')
        },
        redirectTo(category){
            this.$router.push(`/requestedCategory/${category}`)
        }
    },
    computed:mapGetters(['allCategories']),
    
    async created(){
            // document.querySelector('.navBar').style.display = 'block'

          const response = await  axios.get(`/api/categories`) 
          console.log(response.data);  
          response.data.forEach((category)=>{
              this.Categories.push(category)
          })  

        const theme = localStorage.getItem('ZandariTheme');

        setTimeout(()=>{
        if(theme == 'Dark'){
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
        },0)
        }
    
}
</script>

<style scoped>
    @media screen and (max-width: 700px) {
    
    }
</style>