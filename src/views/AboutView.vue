<template>
    <div class="flex flex-column md:flex-row h-full w-full">
        <section class="flex flex-column h-full border-right info">
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
        <section></section>
    </div>
</template>

<style>
    .info {
        width: 250px;
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
    import { ref } from 'vue'

    const isInfoOpen = ref(true)
    const isBioOpen = ref(true)
    const iseducationOpen = ref(false)

    const isContactsOpen = ref(true)

    function toggleInfo() {
        isInfoOpen.value = !isInfoOpen.value
        if (!isInfoOpen.value) {
            isBioOpen.value = false
            iseducationOpen.value = false
        }
    }
</script>
