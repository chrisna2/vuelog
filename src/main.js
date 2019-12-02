import Vue from 'vue'
import App from './App.vue'

//부트스트렙 프로젝트에 인포트
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
//라우터 js 연결
import router from './router.js';

Vue.use(BootstrapVue);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
