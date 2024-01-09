<script setup lang="ts">
const router = useRouter()

</script>
<template>
    <header>
        <div class="m-auto flex flex-justify-between max-w-800px">
            <img src="/logo.svg" @click="() => router.push('/')" />
            <span class="text-2xl font-bold hidden md:block">
                lzy's Blog
            </span>
            <nav class="flex flex-items-center">
                <ul class="flex gap-4 font-bold ">
                    <li>
                        <NuxtLink class="hover:color-#158bff" to="/blogs">文章</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink class="hover:color-#158bff" to="/settings">工具站</NuxtLink>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>