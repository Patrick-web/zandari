<template>
    <div class="wrapper">
        <div id="titleBar">
            <pageTitle title="Documentations" />
        </div>
        <div id="searchBox">
        <input type="text" v-model="query" placeholder="Search" id="searchBar">
        <p id="query">Search for : {{query}}</p>
        </div>
        <div class="docsContainer getShadow ">
            <a v-for="doc in docs" :key="doc.docTitle" :href="getLink(doc.docTitle)" target="blank" class="docpill">
                <p class="docTitle">{{doc.docTitle}}</p>
                <img class="linkImg" src="../assets/actionBtns/link.svg" alt="">
            </a>


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
            docs:[],
            query:''
        }
    },

    methods:{
        ...mapGetters(['themeMode']),
        getLink(docname) {
            for(var i=0;i<this.docs.length;i++){
                if(this.docs[i].docTitle == docname){
                    return this.docs[i].docLink
                }

            }
        },

    },
    
    async created(){
        const response = await  axios.get(`/api/zdocs`);
          const docs = response.data;
          docs.forEach(doc => {
              this.docs.push(doc)
          });
            setTimeout(()=>{
            const searchBar = document.querySelector('#searchBar')
            searchBar.addEventListener('keyup',(e)=>{
                document.querySelector('#titleBar').style.display = 'none'

                if(e.key == "Enter"){
                    document.querySelector('#titleBar').style.transform = 'translateX(400px)'
                    document.querySelector('#titleBar').style.opacity = '0'
                    setTimeout(()=>{
                        document.querySelector('#query').style.marginTop = '10px'
                    },100)
                }
                if(e.key == "Backspace"){
                    document.querySelector('#query').style.marginTop = '-37px'
                    
                }
                console.log(searchBar.value);
                if(searchBar.value == ''){
                console.log(searchBar.value);
                    document.querySelector('#titleBar').style.display = 'block'
                    document.querySelector('#titleBar').style.transform = 'translateX(0px)'
                    document.querySelector('#titleBar').style.opacity = '1'
                    
                }
            })
            

        })

        setTimeout(()=>{
        if(this.themeMode() == 'Dark'){
        document.querySelector('.wrapper').style.background='#171717';
        document.querySelector('.docsContainer').style.background='#111111';

        }else{
        document.querySelector('.wrapper').style.background='white';
        document.querySelector('.docsContainer').style.background='#EBEBEB';
        document.querySelector('body').style.background='white';
        }
        },500)
        }
    
}
</script>

<style scoped>
    #titleBar{
        transition: 0.2s all;
    }
    .docsContainer{
        background: #EBEBEB;
        display:grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        column-gap: 5px;
        row-gap: 20px;
        text-align: center;
        border-radius: 10px;
        width:900px;
        padding-bottom: 5px;
        margin: auto;
        margin-top:50px;
        padding: 20px;
        position:relative;
        overflow: hidden;
    }
    #query{
        background: rgb(3, 214, 102);
        padding:8px;
        margin: auto;
        margin-top:-37px;
        border-radius: 20px;
        color: white;
        transition: 0.2s all;
    }
    #searchBox{
        display: none;
        margin-top:20px;
        margin-bottom:-30px;
        position: relative;
    }
    #searchBar{
        margin-top:20px;
        width:200px;
        margin: auto;
        border-radius: 20px;
        border: none;
        background:rgb(255, 255, 255);
        box-shadow: 0px 0px 8px gray;
        padding:8px;
        outline: none;
        font-size: 1.2em;
        transition: 0.4s;
        z-index: 2;
    }
    #searchBar:hover{
        box-shadow: 0px 0px 15px rgb(128, 128, 128);
        width:250px;
        border-radius: 2px;
    }
    ::-webkit-input-placeholder{
        font-size: 0.9em;
    }
    .docpill{
        background: linear-gradient(90deg,orange,rgb(238, 26, 157));
        text-align: left;
        position: relative;
        height: 35px;
        border-radius: 20px;
        width:200px;
    }
    .docpill:hover{
        background: linear-gradient(90deg,rgb(26, 171, 238),rgb(5, 209, 141));
        cursor: pointer;
    }
    .docpill:hover .linkImg{
        top:4px;
        width:28px;
        transform: rotate(10deg);
    }
    .docTitle{
        margin-top:5px;
        margin-left:15px;
        color:white;
        font-size: 1.2em;
    }
    .linkImg{
        width:23px;
        position: absolute;
        right:10px;
        top:5px;
        transition: 0.2s all;
    }
</style>