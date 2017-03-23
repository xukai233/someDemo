
import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions.js';
import * as getters from './getters.js';
import router from '../router'
// import * as mutations from './mutations.js';
Vue.use(Vuex);
const localEvent = function(item){
    this.get = function () {
        return JSON.parse(localStorage.getItem(item));
    }
    this.set = function (obj) {
        localStorage.setItem(item,JSON.stringify(obj));
    }
    this.clear = function () {
        localStorage.removeItem(item);
    }
}
const local = new localEvent('ucex');
const state = {
    personal:{},
    passwordOk:false,
    headerTitle:"首页"
}
const mutations = {
    SET_LOGIN(state,data){
      if(data[0].code=='0000'){
        data[1].zt=true;
        local.set(data[1]);
      	state.personal = JSON.parse(data[0].data)
        state.passwordOk = true
      	router.push('/home');
      }
    },
    SET_PASSOK(state,data){
        state.passwordOk = data
    },
    SET_CLEAR(state){
        local.clear()
        state.passwordOk = false
        router.push('/login');
    },
    UPDATE_TITLE(state,title){
        console.log(title);
        state.headerTitle = title
    }
}

export default new Vuex.Store({
    state,
    actions,
    getters,
    mutations
})