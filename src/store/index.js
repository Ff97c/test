import Vue from "vue";
import Vuex, { Store } from 'vuex'
//引入Vuex插件
Vue.use(Vuex)

//创建store实例
const store = new Store({
    state: {
        counter: 100
    },
    getters: {
        // sub(state) {
        //     return function(num) {
        //         state.counter += num
        //     }
        // }
        // change(state) {
        //     state.counter -= 20
        // }
    },
    mutations: {
        add(state, num) {
            state.counter += num
        },
        change(state, num) {
            state.counter += num
        }
    },
    actions: {
        changeCounter(context, num) {
            setTimeout(() => {
                context.commit('change', num)
            }, 2000);
        }
    },
    modules: {}
})


export default store