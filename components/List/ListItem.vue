<script setup lang="ts">
const props = defineProps<{
    source: any
}>()
const router = useRouter()
</script>
<template>
    <div class="card rd-4 p-6  bg-#000000 text-white overflow-hidden cursor-pointer"
        @click="router.push(props.source._path)">
        <NuxtImg class="rd-4" quality="80" width="800" height="600" src="/images/pic.jpg" />
        <div class=" color-white text-6">{{ source.title }}
        </div>
        <div>{{ source.pub_date }}</div>
        <div class="description color-white text-4">
            {{ source.description }}
        </div>
        <div class="flex gap-2">
            <div class="rd-4 p-y-1 p-x-3 b-2 b-dashed b-#158BFF inline-block" v-for="tag in source.tags" :key="tag">{{ tag
            }}</div>
        </div>
    </div>
</template>
<style scoped lang="scss">
.card {
    display: flex;
    flex-direction: column;
    align-items: baseline;
    gap: 20px;
    box-shadow: 2px 4px 15px -12px rgba(0, 0, 0, .66);
    transition: box-shadow 0.2s ease, transform 0.2s ease;

    &:hover {
        box-shadow: 0 34px 32px -33px rgba(0, 0, 0, .18);
        transform: translate(0px, -3px);
    }
}

.description {
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
}
</style>