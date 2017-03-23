
export const addevent = ({ commit }, param) =>{
    commit('ADDEVENT',{items: param});
}
export const addlistevent = ({ commit }, param) =>{
    commit('ADDLISTEVENT',{items: param});
}
export const delevent = ({ commit }, param) =>{
    commit('DELEVENT', param);
}
export const deleventlist = ({ commit }, param) =>{
    commit('DELEVENTLIST', param);
}
export const edit = ({ commit }, param) =>{
    commit('EDIT', param);
}