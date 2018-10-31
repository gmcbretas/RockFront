<template>
    <div id="app">
        <side-bar :bus="bus"/>
    </div>
</template>
<script>
    import Vue from 'vue' ;
    import SideBar from '../components/SideBar.vue'

    export default {
        name: "Home",
        components: {SideBar},
        data: () => {
            return {
                bus: new Vue()
            }
        },
        methods: {
        }
    }
</script>
<style scoped>
    html, body {
        font-family: 'Roboto', sans-serif;
        height: 100%;
        width: 100%;
        margin: 0;
        padding: 0;
        font-size: small;
        overflow: hidden;
    }
</style>>
