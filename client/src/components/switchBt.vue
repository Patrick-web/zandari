<template>
    <div v-on:click="toggleSwitch" @click= "$emit('toggleSwitch')" class="switchBox">
        <p class="switchBt"></p>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
    name:"switchBt",
    methods:{
        ...mapMutations([
            'TOGGLE_SWITCH'
        ]),
        ...mapGetters(['themeMode']),
        toggleSwitch(){
            const switchBt=document.querySelector('.switchBt');
            if((localStorage.getItem('ZandariTheme')) == 'Light'){
                switchBt.style.bottom='2px';
            switchBt.style.background='#2E2E2E';
            localStorage.removeItem('ZandariTheme');
            JSON.stringify(localStorage.setItem('ZandariTheme','Dark'));
            console.log(localStorage.getItem('ZandariTheme'));

            }else{
                switchBt.style.background='orange';
            switchBt.style.bottom='28px';
            localStorage.removeItem('ZandariTheme');
            JSON.stringify(localStorage.setItem('ZandariTheme','Light'));
            console.log(localStorage.getItem('ZandariTheme'));
            }
        }
    },
    created(){
  
    }
}
</script>

<style scoped>
    .switchBox{
        border-radius: 20px;
        width:20px;
        height:55px;
        margin:0px;
        margin-top: -5px;
        padding: 2px;
        text-align: center;
        position: relative;
        background:#EBEBEB;
        transform: rotate(90deg)
    }
    .switchBt{
        margin: 0px;
        width: 20px;
        height: 28px;
        background: var(--gradient);
        border-radius: 20px;
        position: absolute;
    }
    .switchBox:hover{
        cursor: pointer;
    }
    @media screen and (max-width: 700px) {
        .switchBox{
            border: 2px white solid;
            background: none;
            width:20px;
            height:55px;
        }
        .switchBt{
            width:20px;
            background: orange;
            height: 28px;
        }
    }
</style>