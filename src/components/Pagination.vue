<script setup>
import { usePosts } from "@/composables/usePosts.js";
const { router, route } = usePosts();

const props = defineProps({
  items: Number,
})
const prevPage = () => {
  router.push({ query: { page: +route.query.page - 1 } })
}

const nextPage = () => {
  router.push({ query: { page: +route.query.page + 1 } })
}

const paginate = (item) => {
  router.push({ query: { page: item } })
}
</script>

<template>
  <div class="flex justify-end gap-1 my-10">
    <button class="py-1 px-3 rounded hover:bg-gray-300 bg-gray-200" @click="prevPage"
      :disabled="route.query.page == 1">Previous</button>
    <button @click="paginate(item)" :class="route.query.page == item ? 'bg-yellow-500' : 'hover:bg-gray-300 bg-gray-200'"
      class="py-1 px-3 rounded " v-for="item in items">{{ item }}</button>
    <button class="py-1 px-3 rounded hover:bg-gray-300 bg-gray-200" @click="nextPage"
      :disabled="route.query.page == items">Next</button>
  </div>
</template>


