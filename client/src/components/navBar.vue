<template>
    <div class="navBar">
        <span class="navs">
            <router-link to='/ZCategories' class="nav">
                <p class="navName">Categories</p>
                <img v-on:click="colapseNav()" class="navIcon" src="../assets/actionBtns/categories.svg" id="categories" alt="">
            
            </router-link>
            <router-link to='/Zstore' class="nav" v-on:click="colapseNav()">
                <p class="navName">Zstore</p>
                <img v-on:click="colapseNav()" class="navIcon" src="../assets/actionBtns/zstore.svg" id="zstore" alt="">
            </router-link>
            <router-link to='/Zdocs' class="nav" v-on:click="colapseNav()">
                <p class="navName">Zdocs</p>
                <img v-on:click="colapseNav()" class="navIcon" src="../assets/actionBtns/zdocs.svg" id="zdocs" alt="">
            </router-link>
        </span>
        <div id="switch">
            <switchBt/>
        </div>    
    </div>
</template>

<script>
import switchBt from './switchBt';
import {mapGetters , mapActions} from 'vuex';

export default {
    name:'navBar',
    components:{
        switchBt
    },
    methods:{
         ...mapGetters(['themeMode']),


    },
    created(){
    }
}
</script>

<style scoped>
    #closeNav{
        opacity: 0;
    }
    #backIcon{
        width: 15px;
        margin-bottom:-2px;
    }
    #editorIcon{
        width: 15px;
    }
    #switch{
        top:0;
        width: 50px;
        height:40px;
        margin-top:-2px;
        position: absolute;
        right:10px;
        padding-top: 0px;
        /* margin:5px; */
    }

    .navBar{
        background:rgb(162, 0, 255);
        position: relative;
        /* margin-top:-10px; */
        padding:2px;
        margin-left:200px;
        margin-right:200px;
        margin-bottom: 10px;
        box-shadow:0px 0px 10px rgb(48, 48, 48);
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
        clip-path: none;
    }

    .navs{
        margin:auto;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        text-align: center;
        font-size: 1.1em;
        margin-left: 70px;
    }
    .nav{
        margin:5px;
        margin-top: 0px;
        margin-bottom: -2px;
        color:white;
        width:150px;
        padding:2px;
        padding-top: 8px;
        padding-bottom: 8px;
        transition: all 0.4s;
        font-size: 1.1em;
        border-bottom: 3px solid transparent;
    }
    .nav:hover{
        border-bottom: 3px solid white;
        background: rgba(255, 255, 255, 0.171);

    }
    .navName{
        display: inline;

    }
    .navIcon{
        display: none;
    }
    .switch{
        
    }
    @media screen and (max-width: 700px) {
        .navBar{
            width: 200px;
            height: 200px;
            border-radius: 0px;
            clip-path: circle(22% at 0% 0%);            
            position: fixed;
            z-index: 2;
            top:0;
            left:0;
            transition: 0.1s all;
            overflow: hidden;
            margin-left:0px;
            margin-right:0px;
        }
        .navName{
            display: none;
        }
        .navIcon{
            display: initial;
        }
        .navs{
            display: block;
            background: none;
            margin: 0;
            width: 200px;
            height: 200px;
            /* clip-path: circle(100% at 0% 0%);             */
            position: relative;
            padding: 2px;
            margin-left: -2px;
        }
        .nav{
            background: none;
            border:none;
            border-radius:0;
            margin:0;
        }
        .nav:hover{
            border:none;
            background:none;

        }
        #categories{
            width: 40px;
            margin-top: 20px;
            margin-left: 80px;
        }
        #zstore{
            float: right;
            width: 50px;
            margin-top: 20px;
            margin-right:60px;  
        }
        #zdocs{
            float: left;
            width: 50px;
            margin-top: 65px;
            margin-left: 10px;   
        }
        #switch{
            /* display: none; */
            transform: rotate(-45deg);
            position: absolute;
            right:0;
            left:30px;
            top:50px;
        }
    }
</style>