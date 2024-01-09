<script setup lang="ts">

</script>
<template>
    <div>
        <Header class="p-4" />
        <main class="m-auto p-4 max-w-800px" style="min-height: calc(100vh - 110px);">
            <slot />
        </main>
        <Footer class="m-auto max-w-800px text-center" />
    </div>
</template>