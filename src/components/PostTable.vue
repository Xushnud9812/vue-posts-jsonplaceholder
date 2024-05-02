<script setup>
import RemoveModal from './RemoveModal.vue';
import { ref } from 'vue';
import axios from "@/plugins/axios.js";
import { usePosts } from "@/composables/usePosts.js";

const { router, route } = usePosts();

defineProps({
  posts: Object
})

const isModalRemove = ref(false)
const removePostId = ref('')

const editPost = (id) => {
  router.push({ name: 'edit-post', params: { id }, query: { ...route.query } })
}
const removePostById = (id) => {
  isModalRemove.value = true
  removePostId.value = id
}

const closeModal = () => {
  isModalRemove.value = false
}
const removePost = async () => {
  await axios.delete(`/posts/${removePostId.value}`);
  closeModal()
}
</script>

<template>
  <div>
    <table class="min-w-full divide-y divide-gray-200">
      <thead>
        <tr>
          <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 ">Id</th>
          <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 ">Title</th>
          <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 ">UserId</th>
          <th scope="col" class="px-6 py-3 text-end text-xs font-medium text-gray-500 ">Action</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-200">
        <tr class="hover:bg-gray-100 cursor-pointer" v-for="post in posts" :key="post.id"
          @click="router.push({ name: 'post-details', params: { id: post.id } })">
          <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">{{ post.id }}</td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{{ post.title }}</td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{{ post.userId }}</td>
          <td class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
            <div class="flex justify-end gap-1">
              <button @click.stop="editPost(post.id)" class="p-1 text-lg bg-blue-100 text-blue-500 rounded">
                <Icon icon="mdi:edit" />
              </button>
              <button @click.stop="removePostById(post.id)" class="p-1 text-lg bg-red-100 text-red-500 rounded">
                <Icon icon="mdi:delete" />
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>

    <remove-modal v-if="isModalRemove" @remove="removePost" @closeModal="closeModal" />

  </div>
</template>


