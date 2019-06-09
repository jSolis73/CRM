import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import dateFilter from '@/filters/date.filter'
import messagePlugin from '@/utils/message.plugin'
import 'materialize-css/dist/js/materialize.min'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.use(Vuelidate)
Vue.use(messagePlugin)
Vue.config.productionTip = false
Vue.filter('date', dateFilter)

firebase.initializeApp({
  apiKey: "AIzaSyCTV3bIJ-7tIkWkJ81tLsAbkIjQEOm0XGI",
  authDomain: "vue-crm73.firebaseapp.com",
  databaseURL: "https://vue-crm73.firebaseio.com",
  projectId: "vue-crm73",
  storageBucket: "vue-crm73.appspot.com",
  messagingSenderId: "598039368572",
  appId: "1:598039368572:web:d985418a7ad20e3d"
})

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
