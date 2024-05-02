<template>
  <div>
    <Navbar />
    <div class="pt-16 px-5 duration-300">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue';

</script>

<style lang="scss" scoped></style>