<template>
    <div class="sidebar">
        <p>
            <img src="/static/img/circle1.png">
        </p>
        <div>
            <MenuItem v-for="(menuItem,index) in menuItens" :key="index" :menuItem="menuItem" :bus="bus"></MenuItem>
        </div>

    </div>


</template>

<script>
    import MenuItem from './MenuItem.vue';

    export default {
        name: "SideBar",
        components: {MenuItem},
        props: {
            'bus': Object
        },
        computed: {

            menuItens: {
                get() {
                    return this.$store.getters.getMenuItens();
                },
                set(value) {
                }
            },
        },
        methods: {}

    }
</script>

<style scoped>
    .sidebar {
        width: 104px;
        height: 1024px;
        color: #000000;
        font-family: Roboto;
        font-size: 16px;
        font-style: normal;
        font-stretch: normal;
        font-weight: 500;
        line-height: 24px;
        text-align: center;
        text-transform: none;
        text-decoration: none;
        letter-spacing: 0px;
    }
</style>
