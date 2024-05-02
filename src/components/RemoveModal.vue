<script setup>
const emit = defineEmits(['closeModal'])

const closeModal = () => {
  emit('closeModal')
}

</script>

<template>
  <div class="fixed  z-20 w-full h-screen top-0 left-0">
    <div @click="closeModal" class="fixed w-full h-screen top-0 left-0 bg-black/20"></div>
    <div class="absolute bg-white p-5 rounded w-1/4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div class="flex items-center justify-between mb-5">
        <h1 class="text-xl">Remove post</h1>
        <button @click="closeModal">
          <Icon icon="mdi:close" />
        </button>
      </div>
      <form class="flex flex-col">
        <div class="mt-5 gap-2 flex justify-end items-center">
          <button @click="closeModal"
            class="bg-gray-100 hover:bg-gray-200 border-0 py-1 px-3 focus:outline-none  rounded text-base ">Cancel</button>
          <button @click="$emit('remove')" type="submit"
            class="bg-red-500 text-white hover:bg-red-400 border-0 py-1 px-3 focus:outline-none  rounded text-base ">Remove</button>
        </div>
      </form>
    </div>
  </div>
</template>


