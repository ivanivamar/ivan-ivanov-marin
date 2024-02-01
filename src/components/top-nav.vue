<template>
	<nav>
        <div class="left-nav">
            <a href="/" style="width: 300px; text-align: left">ivan-ivanov-marin</a>

            <div class="hug flex align-items-center">
                <RouterLink to="/">_hello</RouterLink>
                <RouterLink to="/about">_about-me</RouterLink>
                <RouterLink to="/projects">_projects</RouterLink>
            </div>
        </div>

        <RouterLink to="/contact" style="border-left: 1px solid var(--lines)">_contact-me</RouterLink>
	</nav>
</template>

<style scoped>

</style>
<script setup lang="ts">
</script>
