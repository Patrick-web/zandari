<template>
    <div class="wrapper">
            <div id="titleBar">
                <div id="pgTitle" class="getShadow">
                    <p id="actualTitle">{{pageTitle}}</p>
                </div>
            </div>

        <div  class="boxContainer getShadow ">
                <div v-for="subCategory in subCategories" :key="subCategory.subName"  @click="redirectTo(subCategory.subName)" class="box">
                <img :src="getLogoUrl(subCategory.subName)">
                <p class="title">{{subCategory.subName}}</p>
                </div>
        </div>
    </div>

</template>

<script>
import {mapGetters , mapActions} from 'vuex';
import switchBt from "../components/switchBt.vue";
import pageTitle from '../components/pageTitle.vue';
import axios from 'axios' ;

export default {
    name:"Programming",
    components:{
        pageTitle,
        switchBt,
    },
    data(){
        return{
            pageTitle:'',
            subCategories:[]
        }
    },
    methods:{
        ...mapActions(['connectToDB']),
        ...mapGetters(['themeMode']),
        redirectTo(subCategory){
            console.log(subCategory);
            this.$router.push(`/subCategory/${subCategory}`)
        },
        getLogoUrl(subName) {
            for(var i=0;i<this.subCategories.length;i++){
                if(this.subCategories[i].subName==subName){
                    return this.subCategories[i].logoUrl
                }
            }
        },
    },
    computed:{
        ...mapGetters(['allLanguages']),
        },
    async created(){

        const response = await  axios.get(`/api/subCategories/${this.$route.params.requested}`) 
          response.data.subcategory.forEach((sub)=>{
              this.subCategories.push(sub)
          })  
          console.log(this.subCategories);
          console.log(this.$route.params.requested);
          this.pageTitle=this.$route.params.requested;


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
</style>