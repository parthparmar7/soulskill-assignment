import Vue from 'vue';
import App from './App.vue';
import info from './components/info.vue'
import VueRouter from 'vue-router';
import VueAxios from 'vue-axios';
import axios from 'axios';


Vue.use(VueAxios, axios);
Vue.use(VueRouter);

var routes = [
	{
		name: 'info',
		path: '/',
		component : info
	}];

const router = new VueRouter({ mode: 'history', routes: routes });
new Vue(Vue.util.extend({ router }, App)).$mount('#app');