<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navigation from '@/components/top-nav.vue'
</script>

<template>
    <navigation />

    <main>
        <RouterView />
    </main>
</template>

<style scoped>

</style>
