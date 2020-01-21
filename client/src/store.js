import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
   state:{
    themeMode:'Light',
    currentPlayingVideo:{
        channel:'',
        videoTag:'',
        videoIframe:''
    },
// zStoreSubCategories:{
//         subCategoryName:'Code Editors',
//         availableDownloads:[
//             {
//                 softwareName:'Visual Studio Code',
//                 softwareLogoSrc:'vsCode.svg',
//                 shortDescription:'This is a short description of this software.That goes on and on and one and one.I mean, you get the jist,right?Good',
//                 downloadLinks:[
//                     {
//                         platform:'Windows',
//                         link:'https://code.visualstudio.com/docs/?dv=win'
//                     },
//                     {
//                         platform:'Mac',
//                         link:'https://code.visualstudio.com/docs/?dv=osx'
//                     },
//                     {
//                         platform:'Linux',
//                         link:'https://code.visualstudio.com/docs/?dv=linux64_deb'
//                     }
//                 ]

//             },
//             {
//                 softwareName:'Atom',
//                 softwareLogoSrc:'atom.svg',
//                 shortDescription:'This is a short description of this software.That goes on and on and one and one.I mean, you get the jist,right?Good',
//                 downloadLinks:[
//                     {
//                         platform:'Windows',
//                         link:'https://code.visualstudio.com/docs/?dv=win'
//                     },
//                     {
//                         platform:'Mac',
//                         link:'https://code.visualstudio.com/docs/?dv=osx'
//                     },
//                     {
//                         platform:'Ubuntu',
//                         link:'https://code.visualstudio.com/docs/?dv=linux64_deb'
//                     }
//                 ]

//             },
//             {
//                 softwareName:'Intellij',
//                 softwareLogoSrc:'intellij-idea.svg',
//                 shortDescription:'This is a short description of this software.That goes on and on and one and one.I mean, you get the jist,right?Good',
//                 downloadLinks:[
//                     {
//                         platform:'Windows',
//                         link:'https://code.visualstudio.com/docs/?dv=win'
//                     },
//                     {
//                         platform:'Mac',
//                         link:'https://code.visualstudio.com/docs/?dv=osx'
//                     },
//                     {
//                         platform:'Kali',
//                         link:'https://code.visualstudio.com/docs/?dv=linux64_deb'
//                     }
//                 ]

//             }
//         ]
//     }


  },//End of State object
  getters:{
    allCategories: state=>state.categories,
    subMains: state=>state.subMains,
    allLanguages: state=>state.languages,
    allTutorials: state=>state.tutorials,
    zStoreCategories:state=>state.zStoreCategories,
    zStoreSubCategories:state=>state.zStoreSubCategories,
    requestedVideo:state=>state.currentPlayingVideo,
    themeMode: state=>state.themeMode

  },
  mutations: {
    addToZplayer: (state , videoObject)=>{
        state.currentPlayingVideo.channel = videoObject.channel;
        state.currentPlayingVideo.videoTag = videoObject.videoTag;
        state.currentPlayingVideo.videoIframe = videoObject.videoIframe;

    },

    TOGGLE_SWITCH: (state, switchState)=>{
        state.themeMode=switchState
    },
    addTutorials: (tutorials,state)=>{
        tutorials.forEach(tutorial => {
            state.tutorials.push(tutorial)
        });
        state.tutorials=tutorials
    },
  },
  actions: {
  }
})
