import axios from "axios";

export default {
    changetitl({commit},preload){
        commit("changetitl",preload)
    },
    novelcontent({commit},url){
        axios.get(url)
            .then(res=>{
                return res.data;
            })
            .then(json=>{
                commit("novelcontent",json)
            })
    },
    diagramcontent({commit},url){
        axios.get(url)
            .then(res=>{
                return res.data;
            })
            .then(json=>{
                commit("diagramcontent",json)
            })
    }
}