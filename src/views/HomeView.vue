<template>
    <div class="h-full flex align-items-center justify-content-center p-5">
        <section
            id="home-section"
            class="h-full flex flex-column py-7 md:py-0 justify-content-between md:justify-content-center">
            <div class="flex flex-column gap-2">
                <span class="body-text">
                    Hi all. I am
                </span>
                <h1 class="headline">
                    Ivan Ivanov
                </h1>
                <span class="subheadline color-blue block mb-7">
                    > Front-end developer
                </span>
            </div>

            <code-block>
                <comment>// I am a front-end developer with over 4 years of experience. I have worked with Angular and
                    Vue.js.
                </comment>
                <comment>// You can find more information about my projects in the portfolio section and on my GitHub
                    page below.
                </comment>
                <line>
                    <declaration>const</declaration>
                    <keyword>githubLink</keyword>
                    =
                    <a href="https://github.com/ivanivamar" target="_blank" class="string">"https://github.com/ivanivamar"</a>
                </line>
            </code-block>
        </section>
    </div>


    <div class="home-gradient gradient-green"></div>
    <div class="home-gradient gradient-blue"></div>
</template>

<style>
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

@media (max-width: 768px) {
    .home-gradient {
        width: 255px;
        height: 277px;
    }

    .gradient-green {
        right: 26%;
    }

    .gradient-blue {
        right: 10%;
    }

    #home-section {
        padding-left: 0 !important;
    }
}
</style>
<script setup lang="ts">
</script>
