<script setup lang="ts">
const { data } = await useAsyncData('queryContent', () => queryContent('/blogs').find())
</script>
<template>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <ListItem v-for="item in data" :key="item._id" :source="item" />
    </div>
</template>