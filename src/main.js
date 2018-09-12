// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

// firebase config such as apikey, dbURL, etc.
import config from './config'

Vue.config.productionTip = false;

let app;

firebase.initializeApp(config.firebase);
firebase.auth().onAuthStateChanged(function (user) {
	if (!app) {
		app = new Vue({
			el: '#app',
			template: '<App/>',
			components: { App },
			router
		})
	}
})
