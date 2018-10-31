<template>
    <div class="menuItem">
        <p>
            <img src="/static/img/circle2.png">
        </p>

        {{menuItem.name}}
    </div>
</template>

<script>
    export default {
        name: "MenuItem",
        props: {
            'menuItem': Object
        },
    }
</script>

<style scoped>
    .menuItem {
        width: 104px;
        height: 16px;
        color: #263238;
        font-family: Roboto;
        font-size: 12px;
        font-style: normal;
        font-stretch: normal;
        font-weight: 500;
        line-height: 16px;
        text-align: center;
        text-transform: uppercase;
        text-decoration: none;
        letter-spacing: 0px;
    }
</style>