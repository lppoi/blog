<script setup lang="ts">
const props = defineProps<{ dataSource: any[] }>()
</script>

<template>
    <div class="flex flex-wrap gap-4">
        <div class="p-x-4 p-y-2 rd-4 min-w-150px bg-#ff6b1f" v-for="item in props.dataSource" :key="item.title">
            <div class="w-full flex justify-between flex-items-center">
                <div class="flex  flex-items-center">
                    <div :class="item.icon" />
                    <strong class="m-l-2 p-r-2">{{ item.title }}</strong>
                </div>
                <a class="i-carbon-link cursor-pointer" title="访问网址" target="_blank" :href="item.url" />
            </div>
        </div>
    </div>
</template>

<style scoped>
.card {
    cursor: default;
}

.card:hover {
    box-shadow: 0 5px 15px -3px rgba(0, 0, 0, .1), 0 4px 6px -4px rgba(0, 0, 0, .1);
}
</style>