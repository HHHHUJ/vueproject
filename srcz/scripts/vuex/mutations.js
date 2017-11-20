export default {
    changetitl(state,preload){
        state.headTitle = preload;
    },
    novelcontent(state,json){
      state.novelcontent = json;
    },
    diagramcontent(state,json){
        state.diagramcontent = json;
    }
}