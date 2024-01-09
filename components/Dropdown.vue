<template>
    <div class="main">
        <slot />
        <div class="dropdown rd p-1" v-show="true">
            <div class="dropdown__item rd p-1 flex gap-1 flex-items-center hover:bg-#f1f2f4 cursor-pointer"
                v-for="option in props.options" :key="option.value" @click="value = option.value">
                <div :class="option.icon" />
                {{ option.label }}
            </div>
        </div>
    </div>
</template>
  
<script setup lang="ts">
const props = defineProps<{
    options: Array<any>
}>()
const value = defineModel<string>()

function handleChange(e) {
    console.log(e);
}
</script>
<style scoped lang="scss">
.main {
    position: relative;
    display: inline-block;
}

.dropdown {
    /* display: none; */
    position: absolute;
    width: 100px;
    border: 1px solid #ccc;
    background-color: #fff;
    z-index: 1;
}

.dropdown__item {
    color: var(--light-text-color)
}
</style>