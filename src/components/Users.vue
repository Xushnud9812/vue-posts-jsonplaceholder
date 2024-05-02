<script setup>
import { GoogleMap, CustomMarker } from 'vue3-google-map'
import { ref } from 'vue';
import axios from "@/plugins/axios.js";

const center = { lat: 40.689247, lng: -74.044502 }

const users = ref([]);

const fetchUsers = async () => {
  try {
    const response = await axios.get('/users');
    users.value = response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
  }
};

fetchUsers()

</script>

<template>
  <div class="container">

    <GoogleMap style="width: 100%; height: 500px" :center="center" :zoom="3">
      <CustomMarker v-for="item in users"
        :options="{ position: { lat: parseFloat(item.address.geo.lat), lng: parseFloat(item.address.geo.lng) } }">
        <div style="text-align: center">
          <div class="font-bold text-2xl text-red-600">{{ item.name }}</div>
          <img src="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" alt="">
        </div>
      </CustomMarker>
    </GoogleMap>
  </div>
</template>