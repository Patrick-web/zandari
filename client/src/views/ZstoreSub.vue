<template>
    <div>
            <div id="titleBar">
                <div id="pgTitle" class="getShadow">
                    <p id="actualTitle">{{pageTitle}}</p>
                </div>
            </div>


        <div v-for="tab in softwareTabs" :key ='tab.sofName' class="tab" style="margin-top: 30px">
            <div class="logoArea">
                <img :src="getLogoUrl(tab.sofName)" alt="">
                <p class="dName">{{tab.sofName}}</p>
            </div>
            <div class="descriptionArea">
                <p class="dSectionTitle">Some Details</p>
                    <p class="section">{{tab.description}}</p>
            </div>
            <div class="utilityArea">
                <!-- <p id="visit">Visit their website</p> -->
                    <p class="dSectionTitle">Download</p>
                    <div class="downloadBtns">
                        <a v-for="link in tab.downloadLinks" :key='link.platform' target="blank" :href="getLinkUrl(link.link)">
                            <p class="btn">{{link.platform}}</p>
                        </a>
                        <!-- <a target="blank" href="https://code.visualstudio.com/docs/?dv=osx">
                        <p class="btn">Mac</p>
                        </a>
                        <a target="blank" href="https://code.visualstudio.com/docs/?dv=linux64_deb">
                        <p class="btn">Linux</p>
                        </a> -->

                    </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import pageTitle from '../components/pageTitle'
import axios from 'axios' ;
export default {
    name:'ZstoreSub',
    
    data(){
        return{
                pageTitle:'',
                softwareTabs:[]
        }
    },

    methods:{
        getLogoUrl(sofName) {
            for(var i=0;i<this.softwareTabs.length;i++){
                if(this.softwareTabs[i].sofName==sofName){
                    return this.softwareTabs[i].logoUrl
                }
            }
        },
        getLinkUrl(link) {
            return link.toString()
        }
    },
    async created(){
        const response = await axios.get(`/api/zstore/${this.$route.params.requested}`)

        const softwares = response.data.softwares;
        console.log(softwares);
        softwares.forEach((software)=>{
            this.softwareTabs.push(software);
    })
    this.pageTitle = this.$route.params.requested

}

    
}
</script>

<style scoped>
.tab {
    margin: auto;
    width: 800px;
    border-radius: 40px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    background: #EBEBEB;
    color: #3a3a3a;
    text-align: center;
    transition-duration: 0.6s;
    box-shadow:0px 0px 4px gray;

}

.tab:hover {
    box-shadow:0px 0px 10px gray;
}

.tab img {
    width: 180px;
}

#more {
    font-size: 1.1em;
    color: rgb(35, 109, 245);
    border-radius: 15px;
    background: #ffffff;
    transition-duration: 0.4s;
    position: absolute;
    width:100px;
    margin:auto;
    padding:2px;
    left:78px;
    bottom: 5px;
    box-shadow: 0px 0px 5px rgb(148, 148, 148);
}

#more:hover {
    cursor: pointer;
    box-shadow: 0px 0px 10px rgb(148, 148, 148);

}

.logoArea {
    border-right: 1px solid #bbbbbb;
    font-size: 1.2em;
    position: relative;
    padding-right: 5px;
    transition: all 0.4s;
}
.logoArea:hover{
    cursor: pointer;
}

.logoArea img {
    margin-top: 20px;
    margin-bottom: 10px;
}

.logoArea:hover #dName{
    background: lightseagreen;
}

.dName{
    font-size:1.1em;
    background: #009688;
    color: white;
    padding:5px;
    border-radius:30px;
    width:200px;
    margin:auto;
    margin-bottom:10px;
    transition: all 0.8s;

}


.descriptionArea {
    margin-top: 5px;
    border-right: 1px solid #bbbbbb;
    position: relative;
}

.utilityArea {
    padding-bottom: 10px;
    margin-top: 5px;
    margin-bottom: 0px;
    margin-left: 10px;
    margin-right: 10px;
    /* background: #EBEBEB; */
    color: #141414;
}

#visit {
    border: 1px solid rgb(12, 150, 160);
    border-radius: 20px;
    padding: 5px;
    margin-left: 20px;
    margin-right: 20px;
    color: rgb(26, 26, 26);
    font-size: 1.2em;

}


.downloadBtns {
    display: grid;
    row-gap: 5px;
    margin: auto;
    margin-top:15px;
    text-align: center;
}

.btn {
    color: rgb(0, 183, 255);
    background: rgb(255, 255, 255);
    border-radius: 20px;
    box-shadow: 0px 0px 2px rgb(148, 148, 148);
    font-size: 1.1em;
    padding: 5px;
    margin:auto;
    margin-top: 8px;
    margin-bottom: 3px;
    text-align: center;
    transition-duration: 0.4s;
    width: 150px;

}

.btn:hover {
    box-shadow: 0px 0px 12px rgb(148, 148, 148);
    transform: translateZ(500px)
}
.btn:active{
    background: rgb(23, 131, 231);
    color:white;
}

.dSectionTitle {
    margin-top: 5px;
    color: rgb(255, 255, 255);
    background: #009688;
    border-radius: 20px;
    font-size: 1.4em;
    margin:auto;
    margin-top:10px;
    padding:4px;
    width:180px;
    box-shadow: 0px 0px 5px rgb(173, 173, 173);
}
.section{
    padding:10px;
    color:rgb(87, 87, 87);
    text-align: justify;
}
.languages p {
    padding: 0px;
    margin: 0px;
    color: rgb(53, 146, 221);
    font-family: 'Courier New', Courier, monospace;
}

@media screen and (max-width: 700px) {

    
}

</style>