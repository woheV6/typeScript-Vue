/*
 * @Author: kaka 
 * @Date: 2018-06-11 19:03:21 
 * @Last Modified by: kaka
 * @Last Modified time: 2018-06-11 19:11:30
 */

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router/index.ts'

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
