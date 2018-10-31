// import "core-js/fn/object/assign" ;
import Vue from 'vue' ;
import VueRouter from 'vue-router' ;
import App from './App.vue' ;
import router from './router';
import store from "./store";



Vue.use(VueRouter)
var app = new Vue({
    el: '#app', render: h => h(App),
    router,
    store
});