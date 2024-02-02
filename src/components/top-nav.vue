<template>
	<nav class="hidden md:flex">
        <div class="left-nav">
            <a href="/" class="w-19rem" style="text-align: left">ivan-ivanov</a>

            <div class="hug flex align-items-center">
                <RouterLink to="/">_hello</RouterLink>
                <RouterLink to="/about">_about-me</RouterLink>
                <RouterLink to="/projects">_projects</RouterLink>
            </div>
        </div>

        <RouterLink to="/contact" style="border-left: 1px solid var(--lines);border-right:0">_contact-me</RouterLink>
	</nav>
    <nav class="flex md:hidden">
        <a href="/" class="px-3" style="text-align: left; border: 0">ivan-ivanov</a>

        <button class="btn-icon text" @click="isMenuOpen = !isMenuOpen">
            <i class="material-symbols-outlined" v-if="!isMenuOpen">
                menu
            </i>
            <i class="material-symbols-outlined" v-else>
                close
            </i>
        </button>
    </nav>

    <div class="drawer" :class="{ open: isMenuOpen }">
        <RouterLink to="/" @click="isMenuOpen = false">_hello</RouterLink>
        <RouterLink to="/about" @click="isMenuOpen = false">_about-me</RouterLink>
        <RouterLink to="/projects" @click="isMenuOpen = false">_projects</RouterLink>
        <RouterLink to="/contact" @click="isMenuOpen = false">_contact-me</RouterLink>
    </div>
</template>

<style scoped>

</style>
<script setup lang="ts">
import { ref } from 'vue'

const isMenuOpen = ref(false)
</script>
