<script setup lang="ts">
import GridCard from "~/components/Card/GridCard.vue";
const data = [
    { title: 'Vue', icon: 'i-logos-vue', description: '想入门前端？赶紧去看十遍文档', url: 'https://cn.vuejs.org/', group: '前端框架' },
    { title: 'React', icon: 'i-logos-react', description: '想入门前端？赶紧去看十遍文档', url: 'https://react.dev/', group: '前端框架' },
    { title: 'Vite', icon: 'i-logos-vitejs', description: '新生代', url: 'https://cn.vitejs.dev/guide/', group: '前端构建工具' },
    { title: 'Webpack', icon: 'i-logos-webpack', description: '我是老炮', url: 'https://www.webpackjs.com/concepts/', group: '前端构建工具' },
    { title: 'Python', icon: 'i-logos-python', description: '大蟒蛇', url: 'https://www.runoob.com/python/python-tutorial.html', group: '编程语言' },
    { title: 'AI配色', icon: 'i-carbon-unknown', description: '网站设计配色参考', url: 'https://aicolors.co/', group: '其他工具' },
    { title: 'Rust', icon: 'i-logos-rust', description: '适合宝宝的编程语言', url: 'https://www.rust-lang.org/zh-CN/', group: '编程语言' },
    { title: 'Go', icon: 'i-logos-go', description: '适合宝宝的编程语言', url: 'https://golang.google.cn/doc/', group: '编程语言' },
]
const groupData = Object.entries(useGroupBy(data, 'group'))

</script>
<template >
    <div class="">
        <div v-for="(item, index) in groupData" :key="index">
            <div class="p-t-4">{{ item[0] }}</div>
            <GridCard :data-source="item[1]" />
        </div>
    </div>
</template>

<style scoped></style>