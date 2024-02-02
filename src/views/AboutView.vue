<template>
    <div class="flex flex-column md:flex-row h-full w-full">
        <section class="flex flex-column w-full md:w-19rem h-auto md:h-full border-right info">
            <div class="section-btn" @click="toggleInfo">
                <i class="material-symbols-outlined" v-if="isInfoOpen">
                    arrow_drop_down
                </i>
                <i class="material-symbols-outlined" v-else>
                    arrow_right
                </i>

                <span class="labels">info</span>
            </div>
            <div class="flex flex-column py-2 border-bottom gap-2" v-if="isInfoOpen">
                <div class="folder-btn item-btn" @click="isBioOpen = !isBioOpen" :class="{ open: isBioOpen }">
                    <div class="flex align-items-center gap-1">
                        <i class="material-symbols-outlined">
                            markdown
                        </i>
                    </div>

                    <span class="labels">bio</span>
                </div>
                <div class="folder-btn" @click="iseducationOpen = !iseducationOpen" :class="{ open: iseducationOpen }">
                    <div class="flex align-items-center gap-1">
                        <i class="material-symbols-outlined text-base" v-if="iseducationOpen">
                            expand_more
                        </i>
                        <i class="material-symbols-outlined text-base" v-else>
                            chevron_right
                        </i>
                        <i class="material-symbols-outlined text-base color-blue" v-if="iseducationOpen">
                            folder_open
                        </i>
                        <i class="material-symbols-outlined text-base color-blue" v-else>
                            folder
                        </i>
                    </div>

                    <span class="labels">education</span>
                </div>
            </div>
            <div class="section-btn" @click="isContactsOpen = !isContactsOpen">
                <i class="material-symbols-outlined" v-if="isContactsOpen">
                    arrow_drop_down
                </i>
                <i class="material-symbols-outlined" v-else>
                    arrow_right
                </i>

                <span class="labels">contacts</span>
            </div>
        </section>
        <section class="flex flex-column flex-1">
            <div class="hidden md:flex align-items-center border-bottom">
                <div class="info-tab" v-if="isBioOpen">
                    personal-info

                    <button class="btn-icon text p-0" @click="isBioOpen = false">
                        <i class="material-symbols-outlined text-base">
                            close
                        </i>
                    </button>
                </div>
            </div>

            <div class="h-full hidden md:flex flex-column overflow-y-auto p-3 px-5 ">
                <VCodeBlock
                    :code="code"
                    lang="javascript"
                    highlightjs
                    copyButton="false"
                />
            </div>
        </section>
    </div>
</template>

<style>
    .info {
        width: 250px;
    }

    .info-tab {
        width: 250px;
        height: 37px;
        border-right: 1px solid var(--lines);
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 1rem;
        font-size: 14px;
        color: var(--secondary-grey);
    }

    .border-right {
        border-right: 1px solid var(--lines);
    }
    .border-bottom {
        border-bottom: 1px solid var(--lines);
    }
    .section-btn,
    .folder-btn {
        font-size: 14px;
        font-weight: 500;
        letter-spacing: 0.5px;
        display: flex;
        align-items: center;
        gap: 8px;
        width: 100%;
        background: transparent;
        outline: 0;
        cursor: pointer;
        transition: all 0.2s ease-in-out;
        text-decoration: none;
    }


    .section-btn {
        border-bottom: 1px solid var(--lines);
        padding: 8px 0.5rem;
        color: var(--secondary-white);
    }

    .folder-btn {
        padding: 0 0.5rem;
        color: var(--secondary-grey);
    }

    .item-btn {
        padding-left: 26px;
    }

    .section-btn i,
    .folder-btn i {
        font-size: 18px;
    }

    .folder-btn:hover,
    .folder-btn.open {
        color: var(--secondary-white);
    }

    @media (min-width: 768px) {
    }
</style>
<script setup lang="ts">
    import { ref } from 'vue';
    import VCodeBlock from '@wdns/vue-code-block';
    import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
    import 'prismjs/plugins/line-numbers/prism-line-numbers.css';

    const isInfoOpen = ref(true);
    const isBioOpen = ref(true);
    const iseducationOpen = ref(false);

    const isContactsOpen = ref(true);

    const code = ref(`/**
 * About me
 * I have over 4 years of experience in web development.
 * I started by going to an Professional Formation School called Monlau in 2015,
 * ending with 2 years of a Higher Education Training Cycle of Development of Multiplatform Applications,
 * where I learned the basics of programming and web development and also started working with Salesforce B2C Commerce Cloud.
 * in the consultory company Accenture where i started as an intern.
 *
 * After the 4 months of internship in Accenture, I started working in the company as a junior developer
 * and that went on for 3 years where i learned a lot about web development, Javascript and teamwork as it was my first time working in a team.
 *
 * After those 3 years I decided to change jobs and started working in the company called Aggity where I am currently working and where
 * I learned Angular and Typescript.
 */
    `);

    function toggleInfo() {
        isInfoOpen.value = !isInfoOpen.value;
        if (!isInfoOpen.value) {
            isBioOpen.value = false;
            iseducationOpen.value = false;
        }
    }
</script>
