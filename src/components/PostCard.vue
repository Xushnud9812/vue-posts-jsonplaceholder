<script setup>
defineProps({
  post: Object
})
</script>

<template>
  <div>
    <div class="flex flex-col items-start">
      <h2 class="text-2xl title-font line-clamp-1 font-medium text-gray-900 mt-4 mb-4">{{ post.title }}</h2>
      <p class="leading-relaxed mb-8 line-clamp-2">{{ post.body }}</p>
      <div class="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
        <router-link :to="{ name: 'post-details', params: { id: 1 } }"
          class="text-yellow-500 gap-2 cursor-pointer flex items-center">Read More
          <Icon icon="ep:right" />
        </router-link>
      </div>

    </div>
  </div>
</template>


