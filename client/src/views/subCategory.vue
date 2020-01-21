<template>
    <div class="wrapper">
        <div class="errorLogger" v-if="error">{{errorMessage}}</div>
            <div id="titleBar" class="subs_titlebar" >
                <div id="pgTitle" class="getShadow">
                    <p id="actualTitle">{{pageTitle}}</p>
                </div>
                <div class="videoSwitch">
                    <div class="vActive" v-on:click="getCourses()" id="coursesSwitch">Courses</div>
                    <div v-if="frameworksAvailable" class="vSwitch" v-on:click="getFrameworks()" id="frameworksSwitch">Frameworks</div>
                </div>
            </div>
            <div  class="Container getShadow ">
                <div class="subsBox">
                    <div v-for="course in courses" :key="course.iframe_or_Link"  v-on:click="setStorageAndRedirect(course.channel,course.iframe_or_Link)" class="box sub">
                        <img :src="getCourseLogo()">
                        <p class="title">{{pageTitle}} Course by {{course.channel}}</p>
                    </div>
                </div>
                <div v-if="frameworksAvailable" class="frameworksBox">
                    <div v-for="framework in frameworks" :key="framework.frameworkName" class="framework">
                
                        <p class="frameworkName">{{framework.frameworkName}}</p>
                        <div class="frameworkUploads">
                            <div v-for="upload in framework.uploads" :key="upload.iframe_or_Link" v-on:click="setStorageAndRedirectFrame(framework.frameworkName,upload.channel,upload.iframe_or_Link,)" class=" frame">
                                <img :src="getFrameworkLogo(framework.frameworkName)">
                                <p class="title frameTitle">{{framework.frameworkName}} Course by {{upload.channel}}</p>
                            </div>
                        </div>
                        <img class="expandBox" src="../assets/actionBtns/next.svg" alt="">
                    </div>
                </div>
            </div>
    </div>
    
</template>

<script>
import {mapGetters , mapActions , mapMutations} from 'vuex';
import switchBt from "../components/switchBt.vue";
import pageTitle from '../components/pageTitle.vue';
import axios from 'axios' ;
import { setTimeout } from 'timers';


export default {
    name:"Language",
    components:{
        pageTitle,
        switchBt,
    },
    data(){
        return{
            pageTitle:'',
            courses:[],
            courseLogoUrl:'',
            frameworksAvailable:false,
            frameworks:[],
            error:false,
            errorMessage:'Error in fetching please releod'
        }
    },
    methods:{
        ...mapGetters(['themeMode','requestedVideo']),
        ...mapMutations([
            'addToZplayer'
        ]),
        setStorageAndRedirect(channel,iframe){
            localStorage.removeItem('zvideo')

            const videoObject = {
                channel:channel,
                videoName:this.pageTitle,
                iframe:iframe
            }

            localStorage.setItem('zvideo', JSON.stringify(videoObject))
            this.$router.push(`/Zplayer`)
        },
        setStorageAndRedirectFrame(framework,channel,iframe){
            localStorage.removeItem('zvideo')

            const videoObject = {
                channel:channel,
                videoName:framework,
                iframe:iframe
            }

            localStorage.setItem('zvideo', JSON.stringify(videoObject))
            this.$router.push(`/Zplayer`)
        },
        getCourseLogo() {
            return this.courseLogoUrl
        },
        getFrameworkLogo(frameworkTitle){
            let logoUrl = 'null';
            for(var i=0;i<this.frameworks.length;i++){
                if(this.frameworks[i].frameworkName == frameworkTitle){
                    logoUrl =  this.frameworks[i].logoUrl;
                }
            }
            return logoUrl

        },
        getFrameworks(){
            document.querySelector('#coursesSwitch').classList.remove('vActive')
            document.querySelector('#frameworksSwitch').classList.add('vActive')
            document.querySelector('#frameworksSwitch').classList.remove('vSwitch')
            document.querySelector('#coursesSwitch').classList.add('vSwitch')
            
            const subCategories = document.querySelectorAll('.sub');
            subCategories.forEach((sub)=>{
                sub.style.transform = 'translateX(-1000px)';
                setTimeout(()=>{
                    sub.style.display = 'none';
                },300)
            })
            document.querySelector('.frameworksBox').style.display = 'inline-block'
        },
        getCourses(){
            document.querySelector('#frameworksSwitch').classList.remove('vActive')
            document.querySelector('#coursesSwitch').classList.add('vActive')
            document.querySelector('#coursesSwitch').classList.remove('vSwitch')
            document.querySelector('#frameworksSwitch').classList.add('vSwitch')

            const subCategories = document.querySelectorAll('.sub');
            subCategories.forEach((sub)=>{
                sub.style.display='initial'
                setTimeout(()=>{
                    sub.style.transform = 'translateX(0px)';
                },200)
            })
            document.querySelector('.frameworksBox').style.display = 'none'

        },

    },
    async created(){
        //Try fetch block for fetching intro courses
        try{
            
            const response = await  axios.get(`/api/courses/${this.$route.params.requested}`) 
                response.data.uploads.forEach((upload)=>{
                    this.courses.push(upload)
                  })  
                  this.pageTitle=response.data.subName;
                  this.courseLogoUrl = response.data.logoUrl;
        }catch(err){
            this.error = true;
            this.errorMessage = 'Sorry, a problem occured in getting the videos.Please reload';
            displayOffStuff()
            setTimeout(()=>{
                document.querySelector('.errorLogger').style.top = '50px';

            },20)
        }
          
            //Try fetch block for fetching intro frameworks
            //Helps avoid errors when attempting to fetch frameworks for an area that does not have such
          try {
              const areaData = await axios.get(`/api/frameworks/${this.$route.params.requested}`)
                const frameworks = areaData.data.frameworks
                // this.frameworks= {...frameworks}
                frameworks.forEach((framework)=>{
                    this.frameworks.push(framework)
                })
                console.log(this.frameworks);
                console.log(areaData);
                this.frameworksAvailable = true // for conditional rendering of the frame_switch
              
          } catch (error) {
              this.error = true;
              this.errorMessage = 'Sorry, a problem occured in getting the videos.Please reload';
            displayOffStuff()
              document.querySelector('.errorLogger').style.top = '50px';
          }

        //Clear the pre-dom elements if the fetch request failed
        function displayOffStuff(){ 
            document.querySelector('.subs_titlebar').style.display = 'none';
            document.querySelector('.Container').style.display = 'none';
        }
         
        //Function for expanding the framework box
        setTimeout(()=>{
            const frameworks = document.querySelectorAll('.framework');
             frameworks.forEach((frame)=>{
                 frame.addEventListener('click',(e)=>{
                     console.log(e.target);
                    if(e.target.className=='expandBox'){
                        console.log("Btn clicked");
                        const framesDiv = e.currentTarget.querySelector('.frameworkUploads');
                        if(framesDiv.classList[1]!='expanded'){
                            e.target.style.transform = 'rotate(90deg)';
                            framesDiv.style.height = '100%';
                            framesDiv.classList.add('expanded')

                        }else{
                            e.target.style.transform = 'rotate(0deg)';
                            framesDiv.style.height = '250px';
                            //Use get Computed Style of the bax as the height due to responsive 
                            framesDiv.classList.remove('expanded')
                        }


                    }
                 
                 })
                   
            })        
        },200)

        document.querySelector('.toggle').style.display = 'block';
        document.querySelector('.navBar').style.display = 'block'
            

      //THEME MODE 
        const theme = localStorage.getItem('ZandariTheme');
      
      
        setTimeout(()=>{
        if(theme == 'Dark'){
            document.querySelector('.wrapper').style.background='#171717';
        document.querySelector('.Container').style.background='#111111';
        const frameworkUploads = document.querySelectorAll('.frameworkUploads');
        frameworkUploads.forEach((upload)=>{
            upload.style.background='black';
        })        
        const frames = document.querySelectorAll('.frame');
        frames.forEach((frame)=>{
            frame.style.background='black'
        })
        document.querySelector('#pgTitle').style.background='#9B1650';
        const boxesArray = document.querySelectorAll('.box');
        boxesArray.forEach((box)=>box.style.background='black')
        const boxTitleArray = document.querySelectorAll('.title');
        boxTitleArray.forEach((title)=>title.style.background='#9B1650')
        document.querySelector('body').style.background='#171717';

        }else{
            document.querySelector('.wrapper').style.background='white';
        document.querySelector('.Container').style.background='#EBEBEB';
        const frameworkUploads = document.querySelectorAll('.frameworkUploads');
        frameworkUploads.forEach((upload)=>{
            upload.style.background='rgb(193, 211, 240';
        })
        const frames = document.querySelectorAll('.frame');
        frames.forEach((frame)=>{
            frame.style.background='rgb(241, 241, 241)'
        })
        const boxesArray = document.querySelectorAll('.box');
        boxesArray.forEach((box)=>box.style.background='rgb(241, 241, 241)')
        const boxTitleArray = document.querySelectorAll('.title');
        boxTitleArray.forEach((title)=>title.style.background='#4A86E8')
        document.querySelector('body').style.background='white';
        }
        },0)
               
            // document.querySelector('.navBar').style.display = 'block'
    }
}
</script>

<style scoped>
    .errorLogger{
        position: fixed;
        background: rgb(240, 9, 78);
        color: white;
        padding:10px;
        font-size: 1.2em;
        border-radius: 30px;
        width:510px;
        left:32%;
        right: 50%;
        top:-50px;
        transition: .4s all;
    }
    .Container{
        width:900px;
        margin: auto;
        margin-top:50px;
        position:relative;
        overflow: hidden;
        border-radius: 10px;
        padding-bottom: 20px;
    }
    .videoSwitch{
        position:absolute;
        height: 50px;
        background: rgb(235, 231, 231);
        width:250px;
        border-radius:50px;
        left: 40%;
        top:90px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        text-align: center;
        box-shadow: 0px 0px 5px rgb(85, 85, 85);
        overflow: hidden;
        z-index: 1;
        /* justify-content: center;
        align-items: center; */
    }
    .vSwitch{
        display: inline-block;
        font-size: 1.3em;
        text-align: center;
        padding:10px;
        transition: 0.4s all ;
        color: rgba(0, 0, 0, 0.815);
        cursor: pointer;
    }
    .vSwitch:hover{
        background: #a2fff7b7;
        
    }
    .vActive{
        display: inline-block;
        font-size: 1.3em;
        text-align: center;
        padding:10px;
        background: #009688;
        color:white;
        transition: 0.4s all;
        cursor:default;
    }
    .subsBox{
        display:grid;
        grid-template-columns: 1fr 1fr 1fr;
        column-gap: 5px;
        row-gap: 5px;
        text-align: center;
        border-radius: 10px;
        width:900px;
        padding-bottom: 5px;
        margin: auto;
        margin-left:10px;
        margin-top:10px;
        padding: 20px;
        position:relative;
        overflow: hidden;
        margin-left:-20px;
    }
    .frameworksBox{
        display: inline-block;
        display: none;
        margin:auto;
        margin-left: 50px;

    }
    .framework{
        margin:auto;
        margin-top:10px;
        margin-bottom:30px;
        position: relative;
        margin-left:20px;
        
    }
    .frameworkUploads{
        background: rgb(193, 211, 240);
        border-radius: 10px;
        transition: 1s all;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        height:250px;
        overflow: hidden;
        transition: 0.4s all;
    }
    .frame{
        transform: scale(0.8);
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
    }

    .frame img{
        width:280px;
        transition: all 0.4s;
        margin-left: -10px;

    }
    .frame:hover img{
        transform: scale(1.1);
    }
    .frameworkName{
        background: #1cb1f7;
        position: absolute;
        left:20px;
        top:-20px;
        width: auto;
        color: white;
        font-size: 1.3em;
        padding: 10px;
        padding-left:15px;
        padding-right:15px;
        border-radius: 30px;
        z-index: 2;
    }

    .expandBox{
        position: absolute;
        left:90%;
        top:-25px;
        border-radius: 100%;
        box-shadow: 0px 0px 5px rgb(87, 137, 167);
        transition: 0.2s all;
    }

    .expandBox:hover{
        box-shadow: 0px 0px 10px rgb(87, 137, 167);
    }
    @media screen and (max-width: 700px) {
        .Container{
            width:100%;
            margin-top: 30px;

        }
        .videoSwitch{
            height: 45px;
            left:10%;
            top:60px;
        }
        .subsBox{
            grid-template-columns: 1fr 1fr;
            width: 100%;
        }
        .title{
            padding-top: 0px;
            word-wrap: break-word;
            width: 140px;
            padding-bottom: 10px;
            font-size: 0.8em;
            height: 30px;
        }
        .frameworksBox{
            margin-right: 10px;
            margin-left: -10px;
            width: 100%;
        }
        .framework{

        }
        .frameworkUploads{
            margin:auto;
            grid-template-columns: 1fr 1fr;
            height: 165px;
        }
        .frame{
            margin-top: 20px;
            width: 150px;
            height: 150px;
            margin-left: -5px;
        }
        .frame p{
            width: 150px;
        }
        .frameTitle{
        font-size:1.0em; 
    }
        .frame img{
            width: 180px;
        }
        .expandBox{
            left: 85%;
        }
    }
</style>