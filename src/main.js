// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

var config = {
	apiKey: "AIzaSyCwDsOatorlqiL5nuwKYCAHuga4ZYpeKm0",
	authDomain: "vue-firebase-login-rpahlevy.firebaseapp.com",
	databaseURL: "https://vue-firebase-login-rpahlevy.firebaseio.com",
	projectId: "vue-firebase-login-rpahlevy",
	storageBucket: "vue-firebase-login-rpahlevy.appspot.com",
	messagingSenderId: "1015101287420"
};

firebase.initializeApp(config);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
