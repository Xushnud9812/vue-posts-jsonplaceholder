<script setup>
import { ref, onMounted, watch } from "vue";
import exportFromJSON from "export-from-json";
import { usePosts } from "@/composables/usePosts.js";
import PostCard from "./PostCard.vue";
import CreatePost from "./CreatePost.vue";
import Loading from "./Loading.vue";
import PostTable from "./PostTable.vue";
import Pagination from "./Pagination.vue";

const { route, results, loading, fetchPosts } = usePosts();

let activeTab = ref(1)

const isModalCreate = ref(false)

const downloadFile = () => {
  const data = results.value;
  const fileName = "Posts";
  const exportType = exportFromJSON.types.xls;
  if (data) exportFromJSON({ data, fileName, exportType });
}

watch(
  () => route.query.page,
  async newId => {
    fetchPosts()
  }
)

const changeShowPosts = (index) => {
  localStorage.setItem('activeTab', index)
  activeTab.value = localStorage.getItem('activeTab')
}

onMounted(() => {
  fetchPosts();
});
</script>

<template>
  <div>
    <section class="mt-10 text-gray-600 body-font overflow-hidden">
      <div class="container ">
        <div class="flex items-center justify-between">
          <h1 class="text-2xl">Posts</h1>
          <div class="flex gap-3">
            <div>
              <input type="email" placeholder="Search..."
                class="w-full bg-white rounded border border-gray-300 focus:border-yellow-500  text-base outline-none text-gray-700 py-1 px-3  duration-200 ">
            </div>
            <div class="flex">
              <button @click="changeShowPosts(1)"
                :class="activeTab == 1 ? 'bg-yellow-500 ' : 'bg-gray-100 hover:bg-gray-200'"
                class=" border-0 py-1 px-3 focus:outline-none  rounded-l text-base ">
                <Icon icon="oui:editor-table" />
              </button>
              <button @click="changeShowPosts(2)"
                :class="activeTab == 2 ? 'bg-yellow-500 ' : 'bg-gray-100 hover:bg-gray-200'"
                class=" border-0 py-1 px-3 focus:outline-none  rounded-r text-base ">
                <Icon icon="mdi:table" />
              </button>
            </div>
            <button @click="downloadFile"
              class="flex gap-1 items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base ">
              <Icon icon="uiw:file-excel" />
              Export
            </button>
            <button @click="isModalCreate = true"
              class="flex gap-1 items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base ">
              <Icon icon="fluent:add-12-filled" />
              Add Post
            </button>
          </div>
        </div>


        <create-post v-if="isModalCreate" @created="fetchPosts" @closeModal="isModalCreate = false" />

        <loading v-if="loading" />

        <div v-if="activeTab == 1" class="my-10">
          <post-table :posts="results" />
        </div>
        <div v-if="activeTab == 2" class="grid grid-cols-2 gap-5">
          <post-card v-for="item, index in results" :key="index" :post="item" />
        </div>

        <Pagination :items="10" />
      </div>
    </section>

  </div>
</template>


