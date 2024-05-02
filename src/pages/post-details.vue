<script setup>
import { onMounted } from "vue";
import { usePosts } from "@/composables/usePosts.js";
import Loading from "@/components/Loading.vue";

const { detail, router, comments, loading, fetchPostById, fetchPostComments } = usePosts();

onMounted(() => {
  fetchPostById()
  fetchPostComments()
});
</script>

<template>
  <div>
    <div class="container">
      <div class="my-5">
        <button class="flex items-center gap-2 text-xl" @click="router.go(-1)">
          <Icon icon="lucide:move-left" />
          Back
        </button>
      </div>

      <Loading v-if="loading" />
      <div class="md:flex-grow">
        <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">{{ detail.title }} </h2>
        <p class="leading-relaxed">{{ detail.body }}</p>
      </div>

      <h2 class="my-5">Comments</h2>
      <article v-for="comment in comments" :key="comment.id"
        class="p-6 mb-3 text-base bg-white border-t border-gray-200 ">
        <div class="flex justify-between items-center mb-2">
          <div class="flex items-center">
            <p class="inline-flex items-center mr-3 text-sm text-gray-900  font-semibold">{{ comment.email }}</p>
          </div>
        </div>
        <p class="text-gray-500 ">{{ comment.body }}</p>
      </article>
    </div>
  </div>
</template>


