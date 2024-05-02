<script setup>
import { usePosts } from "@/composables/usePosts.js";
import axios from "@/plugins/axios.js";

const { detail, route, router, fetchPostById } = usePosts();

fetchPostById()

const updatePost = async () => {
  await axios.put(`/posts/${route.params.id}`, detail.value);
  closeModal()
}

const closeModal = () => {
  router.push({ name: 'home', query: { page: route.query?.page } })
}

</script>

<template>
  <div class="fixed  z-20 w-full h-screen top-0 left-0">
    <div @click="closeModal" class="fixed w-full h-screen top-0 left-0 bg-black/20"></div>
    <div class="absolute bg-white p-5 rounded w-1/2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div class="flex items-center justify-between mb-5">
        <h1 class="text-xl">Edit Post</h1>
        <button @click="closeModal">
          <Icon icon="mdi:close" />
        </button>
      </div>
      <form class="flex flex-col" @submit.prevent="updatePost">
        <label for="title">Title:</label>
        <input placeholder="title..."
          class="mb-5 w-full bg-white rounded border border-gray-300 focus:border-yellow-500  text-base outline-none text-gray-700 py-1 px-3  duration-200"
          type="text" v-model="detail.title" id="title" required>
        <label for="body">Body:</label>
        <textarea placeholder="body..."
          class="w-full bg-white rounded border border-gray-300 focus:border-yellow-500  text-base outline-none text-gray-700 py-1 px-3  duration-200"
          v-model="detail.body" rows="5" id="body" required></textarea>

        <div class="mt-5 gap-2 flex justify-end items-center">
          <button @click="closeModal"
            class="bg-gray-100 hover:bg-gray-200 border-0 py-1 px-3 focus:outline-none  rounded text-base ">Cancel</button>
          <button type="submit"
            class="bg-yellow-500 hover:bg-yellow-400 border-0 py-1 px-3 focus:outline-none  rounded text-base ">Save</button>
        </div>
      </form>
    </div>
  </div>
</template>


