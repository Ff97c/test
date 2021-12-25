import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from '/src/store'
import axios from 'axios'

Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')


// axios({
//     url: 'http://152.136.185.210:7878/api/hy66/home/multidata',
//     timeout: 2000
// }).then(res => {
//     console.log(res)
// })

// axios({
//     url: 'http://152.136.185.210:7878/api/hy66/recommend',
//     timeout: 2000
// }).then(res => {
//     console.log(res)
// })

//直接使用的axios是一个全局对象
//配置axios的基本信息
// axios.defaults.baseURL = 'http://152.136.185.210:7878/api/hy66/'
// axios.defaults.timeout = 2000

// axios.all([axios({
//     url: '/home/multidata'
// }), axios({
//     url: '/recommend'
// })]).then(res => {
//     console.log(res)
// })