import VueRouter from 'vue-router' ;
//import ListingPage from '../components/ListingPage.v ue';
import Home from "./pages/Home.vue";
import store from "./store";

let router = new VueRouter({
    mode: 'history',
    routes: [
        {path: '', name: 'home', component: Home},
        // { path : '/listing/:listing' , component : ListingPage }
    ],
    methods: {},
});


router.beforeEach((to, from, next) => {
    switch (to.name) {
        case "home":
            store.commit('SET_PAGE', {
                route: to.name, serverData: [
                    {"name": "tasks"},
                    {"name": "contents"},
                    {
                        "name": "setup",
                        "items": [
                            {
                                "name": "minha equipe",
                                itens: [
                                    {
                                        "id": 1,
                                        "name": "Aline Costa de Oliveira",
                                        "email": "aline.costa@rockcontent.com"
                                    },
                                    {
                                        "id": 2,
                                        "name": "Bruno Pontes",
                                        "email": "bruno.pontes@rockcontent.com"
                                    },
                                    {
                                        "id": 3,
                                        "name": "Carla Alves Martins",
                                        "email": "carla@rockcontent.com"
                                    },
                                    {
                                        "id": 4,
                                        "name": "Daniel Henrique Corrêa",
                                        "email": "daniel.henrique@rockcontent.com"
                                    },

                                ]
                            },

                            {"name": "tab item"},
                            {"name": "tab item"},
                            {"name": "tab item"},
                            {"name": "tab item"},
                        ]
                    }]

            });
            break;
        default:
            store.commit('SET_PAGE', {route: to.name});
    }

    next();
});

export default router;
