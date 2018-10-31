import Vue from 'vue' ;
import Vuex from 'vuex' ;


Vue.use(Vuex);
export default new Vuex.Store({
    state:
        {
            checked: [],
            loading: false,
            menuItens: [],
        },
    mutations: {
        SET_PAGE(state, {route, serverData}) {
            var data = serverData;
            state.menuItens = data;
        },

    },

    actions: {},
    getters:
        {
            getMenuItens(state) {
                return () => state.menuItens;
            },
            isLoading(state) {
                return state.loading;
            }
        }
})


