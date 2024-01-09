<script setup lang="ts">
import "juejin-markdown-themes/dist/jzman.min.css";


</script>
<template>
    <main class="main">
        <ContentDoc v-slot="{ doc }">
            <article class="markdown-body rd-4 p-4 bg-white ">
                <header class="p-b-2 b-b-2 b-black">
                    <div class="text-4xl font-bold p-y-1">{{ doc.title }}</div>
                    <div class="p-y-1 color-gray">
                        {{ doc.pub_date }}
                    </div>
                    <div class="flex gap-2 items-center color-gray">
                        <i class="i-carbon-tag" />
                        {{ doc.tags.join('、') }}
                    </div>
                </header>
                <ContentRenderer :value="doc" />
            </article>
        </ContentDoc>
    </main>
</template>

<style scoped lang="scss">
.markdown-body {
    font-family: MiSans-Medium;
}
</style>