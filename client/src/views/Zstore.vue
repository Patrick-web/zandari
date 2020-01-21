<template>
    <div class='wrapper'>
            <pageTitle title="Z Store" />
                <!-- <div class="switches">
                    <span id="sysSwitch">PC</span>
                    <span id="sysSwitch">Android</span>
                </div> -->
            <div  class="boxContainer getShadow ">
                <div v-for="storeCategory in zStoreCategories" :key="storeCategory.category"  @click="redirectTo(storeCategory.category)" class="box">
                <img :src="getImgUrl(storeCategory.category)">
                <p class="title">{{storeCategory.category}}</p>
             </div>
        </div>

    </div>
</template>
<script>
import pageTitle from '../components/pageTitle'
import {mapGetters} from 'vuex'
import axios from 'axios' ;
export default {
    name:'Zstore',
    components:{
        pageTitle
    },
    methods:{
        getImgUrl(pic) {
        return require('../assets/categoriesImgs/' + pic + '.svg')
        },
        redirectTo(category){
            this.$router.push(`/ZstoreSub/${category}`)
        }

    },
        data(){
        return{
            zStoreCategories:[]
        }
    },

    // computed:mapGetters(['zStoreCategories']),
    async created(){
        const response = await  axios.get(`/api/zstore`) 
          response.data.forEach((zStoreCategory)=>{
              this.zStoreCategories.push(zStoreCategory)
          })  

    }
}
</script>

<style scoped>
    .switches{
        border:1px solid rgba(0, 0, 0, 0);
        text-align: center;
        display: grid;
        grid-template-columns: 1fr 1fr;
        color:rgb(255, 255, 255);
        margin:10px;
    }
    #sysSwitch{
        font-size:1.2em;
        background:rgb(42, 145, 241);
        padding:5px;
        border-radius:20px;
        width:100px;
        margin:auto;
        box-shadow: 0px 0px 4px rgb(61, 61, 61);
    }

</style>