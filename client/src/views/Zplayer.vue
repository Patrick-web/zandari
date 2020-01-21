<template>
    <div class="zPlayer">
        <div class="playerArea">
            
        </div>
        <div id="videoTitle">{{videoTitle}} Course by {{channelProvider}}</div>
        <div class="tabArea">
        <div class="tabSwitch">
            <div class="active">Alternatives</div>
            <div class="tab">Blogs</div>
            <div class="tab">Websites</div>
            <div class="tab">Requirements</div>
        </div>

        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';
import navBar from '../components/navBar.vue'
export default {
    name:'zPlayer',
    components:{
        navBar
    },
    data(){
        return{
            videoTitle:'',
            channelProvider:'',
            videoIframe:''
        }
    },
    methods:{

    },
    computed:{
        ...mapGetters(['requestedVideo'])
    },
    created(){
        const videoObject = JSON.parse(localStorage.getItem('zvideo')) 
        this.videoTitle=videoObject.videoName; 
        this.channelProvider=videoObject.channel; 
        // console.table(videoObject);
        // console.table(videoObject.iframe);
        setTimeout(()=>{
            document.querySelector('.playerArea').innerHTML=videoObject.iframe
            document.querySelector('.navBar').style.display = 'none'
            document.querySelector('.toggle').style.display = 'none'
        },0)

    }
}
</script>

<style scoped>
    .zPlayer{
        text-align: center;
        width: 100%;
        /* overflow: hidden; */
    }
    .playerArea{
    width: 100%;
    }

    #videoTitle{
     color: white;
     background: rgb(0, 98, 255);   
     margin-top:0px;
     margin-bottom: 2px;
     font-size: 1.2em;
     padding:5px;
     /* width: 90%; */
    }

    .tabSwitch{
        position: absolute;
        display: grid;
        background: #009688;
        width: 60%;
        margin: auto;
        margin-top: -25px;
        border-radius: 30px;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        color: white;
        overflow: hidden;
        z-index: 2;
        box-shadow: 0px 0px 3px rgba(29, 29, 29, 0.541);
        left: 20%;
    }
    .tab{
        padding-top: 10px;
        padding-bottom: 10px;
        font-size: 1.2em;
        transition: 0.4s all;
    }
    .tab:hover{
        background: rgb(8, 24, 78);
        cursor: pointer;

    }
    .active{
        background: rgb(255, 0, 128);
        padding-top: 10px;
        padding-bottom: 10px;
        font-size: 1.2em;

    }
    .tabArea{
        width: 98%;
        margin: auto;
        height: 600px;
        background: rgb(224, 224, 224);
        z-index: -1;
        margin-top: 40px;
        border-radius: 10px;
        box-shadow: 0px 0px 5px rgb(136, 136, 136);
    }


    @media screen and (max-width: 700px) {
    #videoTitle{
     margin-top: 90px;
    }

    }
</style>