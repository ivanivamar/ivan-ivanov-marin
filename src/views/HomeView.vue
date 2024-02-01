<script setup lang="ts">
</script>

<template>
    <div class="home-gradient gradient-green"></div>
    <div class="home-gradient gradient-blue"></div>
</template>

<style scoped>
    .home-gradient {
        position: absolute;
        filter: blur(87px);
        opacity: 0.4;
        width: 424px;
        height: 322px;
    }
    .gradient-green {
        right: 24%;
        top: 20%;

        background: #43D9AD;
        transform: rotate(-94.3deg);
    }
    .gradient-blue {
        right: 14%;
        top: 48%;

        background: #4D5BCE;
        transform: rotate(13.51deg);
    }
</style>
