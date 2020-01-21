<template>
    <div class="vhs">
        <div class="vh vh1">
            <img id="logo" src="../assets/homeImgs/unofficialLogo.png" alt="">
            <img id="uni" class="sideIllustration" src="../assets/homeImgs/uni-logo.svg" alt="">
            <h1 class="heading">
                The You <span><img id="tube" src="../assets/homeImgs/tube.svg" alt=""></span>
                University
                </h1>
            <p class="explainer">Get youtube tutorials in a well structured and organized layout for easy and quality learning</p>
            <p class="explainer">Save time by getting rid of  click baits and poor quality vague tutorials</p>
            <p class="explainer">Easily follow the tutorial by quickly and easily accessing the required resources</p>
            <p class="preview" id="howPreview">How</p>
            <img id="scroll" src="../assets/homeImgs/scrollIndicator.svg" alt="">
            <router-link to="/ZCategories">
            <p class="signUp"  v-on:click="bringBackNav()">Sign Up</p>
            </router-link>
        </div>
        <div class="vh vh2">
            <img id="organize1"  src="../assets/homeImgs/organize.svg" alt="">
            <h1 class="heading">Structuring and Organizing Youtube</h1>
            <p class="explainer">Our content managers (Youtube students like you and I) select the best tutorials they and others used to grow and learn in their respective areas and upload them to Zandari</p>
            <p class="explainer">Zandari then organizes this tutorials into categories and subcategories in a manner easy and quick for you get the exact tutorial your looking for.</p>
            <p class="explainer">Only quality tutorials are allowed on the platform to ensure you get the only the best of the best</p>
            <div class="previewWrapper">
            <p class="preview">Show Me</p>
            </div>
        </div>
        <div class="vh vh3">
            <img id="store"  src="../assets/homeImgs/store.svg" alt="">
            <img id="checklist"  src="../assets/homeImgs/checklist.svg" alt="">
            <img id="box"  src="../assets/homeImgs/box.svg" alt="">
            <h1 class="heading">So the tutorial needs you to download some stuff...</h1>
            <p class="explainer">You will just head over to Zstore, search for the requirements (softwares, packages the such) download them and Boom!! you are good to go</p>
            <p class="explainer">Don't waste time on google maybe even finding out you downloaded the wrong stuff or not finding what you are looking for</p>
            <div class="explainer">
                <p>Fast</p>
                <p>Easy</p> 
                <p>Stressfree</p>
             </div>
            <div class="previewWrapper">
            <p class="preview">Show Me</p>
            </div>
        </div>
        <div class="vh vh4">
            <img id="docSearch"  src="../assets/homeImgs/docSearch.svg" alt="">
            <h1 class="heading">Need to dive deeper than the tutorial?</h1>
            <p class="explainer">Check out Zdocs to quickly access the official documentation, books and guides on the area you are currently into.</p>
            <p class="explainer">Each tutorial is linked to useful blogs, articles and websites for further research on the topic recommended by other people</p>
            <div class="previewWrapper" id="last">
            <p class="preview" id="lastShowme">Show Me</p>
            </div>            
            <p class="signUp" id="bottomOne">Sign Up</p>
            <div class="community">
            <p id="appeal">Hae there, you can join the Zandari community and help me make it as awesome and usefull as it can be.</p>
            <p id="Join">Join</p>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    methods: {
        bringBackNav(){
            console.log("bring back clicked");
            document.querySelector('.navBar').style.display = "block"
            
        }
    },
    created() {
        setTimeout(()=>{
            document.querySelector('.navBar').style.display = 'none';
            document.querySelector('.toggle').style.display = 'none';
        },0)
    },
}
</script>
<style  scoped>
    h1{
        margin: 0;
        padding: 0;
    }
    #tube{
        width: 70px;
        margin: 0;
        margin-bottom: -7px;
        margin-left: -5px;
    }
    .vhs{
        margin: 0;
        padding: 0;
    }
    .vh{
        margin: 0;
        padding: 0;
        background: bisque;
        height: 100vh;
        width: 100%;
        position: relative;
        overflow: hidden;
    }
    .sideIllustration{
        position: absolute;
        right: 10px;
        top:50px;
        width: 70vh;
    }
    .vh1{
        background: linear-gradient(90deg,orange,#FF00FF)
    }
    .heading{
        color: white;
        margin: 20px;
        font-size: 2.5em;
        width: 55%;
    }
    .explainer{
        color: white;
        margin-left: 20px;
        margin-top: 4vh;
        margin-bottom: 4vh;
        font-size: 1.8em;
        width: 55%;
        background: rgba(255, 255, 255, 0.205);
        border-left: 8px solid white;
        padding: 20px;
    }
    #logo{
        margin-top: 10px;
        margin-left: 10px;
        width: 15%;
    }
    #uni{
        position: absolute;
        right: 10px;
        top:30px;
        width: 35%;
    }
    #scroll{
        position: absolute;
        left: 50%;
        margin-top:15px;
        width: 3%;
    }
    .previewWrapper{
        background: none;
        width: 20%;
        margin-left:150px ;
    }
    .preview{
        color: white;
        background: rgba(255, 255, 255, 0.191);
        padding: 10px;
        border-radius: 30px;
        border: 1px white solid;
        width:150px;
        text-align: center;
        margin: auto;
        font-size: 1.4em;
        transition: 0.4s all;
    }
    .preview:hover{
        width: 180px;
        cursor: pointer;
        background: rgba(0, 89, 255, 0.253);
        
    }
    .signUp{
        color: white;
        background: #09ac9b;
        border:2px solid white;
        padding: 10px;
        width:200px;
        text-align: center;
        font-size: 2em;
        border-radius: 30px;
        position: absolute;
        right: 10%;
        transition: 0.4s all ease-in-out;
        margin-top: -80px;
    }
    .signUp:hover{
        cursor: pointer;
        right: 9%;
        width: 220px;
        background: black;
        color: red;
    }
    #howPreview{
        position: absolute;
        text-align: center;
        color: white;
        font-size: 1.9em;
        left:35%;
        width: 8%;
        background: rgba(255, 255, 255, 0.191);
        padding: 10px;
        border-radius: 30px;
        border: 1px white solid;
    }
    .vh2{
        background: linear-gradient(90deg,#B249F9,#F01755)

    }
    #organize1{
        position: absolute;
        right: 10px;
        top:20px;
        width: 70vh;
    }
    .vh3{
        background: linear-gradient(90deg,#009688,#4A86E8)

    }
    #store{
        position: absolute;
        right: 5%;
        top:20px;
        width:15%;
    }
    #checklist{
        position: absolute;
        width: 15%;
        right: 5%;
        top:220px;
    }
    #box{
        position: absolute;
        width: 15%;
        right: 5%;
        bottom: 10px;
    }
    .vh4{
        background: #000037;

    }
    #lastShowme{
        
    }
    #docSearch{
        position: absolute;
        width: 30%;
        right: 5%;
        top:5vh;
    }
    .community{
        text-align: center;
        height: 150px;
        margin-top: 70px;
    }
    #appeal{
        background: #F01755;
        color: white;
        padding: 10px;
        width: 800px;
        border-radius: 30px;
        margin: auto;
    }
    #Join{
        background: rgb(233, 145, 4);
        color: rgb(255, 255, 255);
        width: 100px;
        margin: auto;
        border-radius: 30px;
        padding: 10px;
        text-align: center;
        font-size: 1.5em;
        border: 2px solid white;
        transition: 0.4s all;
        margin-top:20px;
    }
    #Join:hover{
        width: 130px;
        cursor: pointer;
        background: rgb(233, 4, 233);
    }
    #bottomOne{
        margin-top: -20px;
    }
    .navBar{
        /* display: none; */
    }
</style>