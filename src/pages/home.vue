<script setup>
import Posts from '@/components/Posts.vue';
import Users from '@/components/Users.vue';
</script>

<template>
  <div>
    <Posts />
    <Users />
    <router-view />
  </div>
</template>

<style scoped></style>
