import Vue from 'vue'
import App from './App.vue'
import{ BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
//Bootstrap CSS files
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueSupabase from 'vue-supabase'

Vue.use(VueSupabase, {
  supabaseUrl: 'https://utoxvczqtcaftlfvttdl.supabase.co',
  supabaseKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyOTY3MjQ1NCwiZXhwIjoxOTQ1MjQ4NDU0fQ.kgdDLgLNHG1V_LGVIEhi3pateAVdLsjxhqlNStA0sB8',
  supabaseOptions: {}
});
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
