<template>
  <header class="fixed top-0 left-0 w-full z-10  text-gray-600  body-font shadow-md bg-white">
    <div class="container flex justify-between p-3 items-center">
      <router-link :to="{ name: 'home', query: { page: 1 } }"
        class="flex title-font cursor-pointer font-medium items-center text-gray-900 mb-4 md:mb-0">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round"
          stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-yellow-500 rounded-full"
          viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
        <span class="ml-3 text-xl">Vue test app</span>
      </router-link>
      <h2>Xushnudbek Ayitboyev</h2>
    </div>
  </header>
</template>

<script setup>

</script>
