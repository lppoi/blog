<script setup lang="ts">
const router = useRouter();
const { data } = useAsyncData("getAllBlogs", () =>
  queryContent("/blogs").find()
);
</script>
<template>
  <div>
    <h1 class="text-4xl">欢迎来到我的博客！</h1>

    <div class="p-y-4 w-100">
      <h1 class="text-xl color-black">文章列表</h1>
      <ul>
        <li
          v-for="blog in data"
          class="list__item flex flex-items-center justify-between cursor-pointer"
          @click="router.push(blog._path!)"
        >
          <span>{{ blog.pub_date }} {{ blog.title }}</span>
          <div><div class="i-carbon-arrow-right" /></div>
        </li>
      </ul>
    </div>
  </div>
</template>
<style scoped>
.list__item {
  padding-bottom: 0.25rem;
  background: linear-gradient(to right, #ff6b1f, #ff6b1f) no-repeat right bottom;
  background-size: 0 2px;
  transition: background-size 0.8s;
}
.list__item:hover {
  background-position-x: left;
  background-size: 100% 2px;
}
</style>
