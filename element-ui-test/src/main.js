import Vue from 'vue'
import { Button, Select, MessageBox} from 'element-ui'
import App from './App.vue'

Vue.config.productionTip = false

// Vue.use(Button)
// Vue.use(Select)
Vue.component(Button.name, Button)
Vue.component(Select.name, Select)
Vue.prototype.$msgbox = MessageBox;


new Vue({
  render: h => h(App),
}).$mount('#app')
