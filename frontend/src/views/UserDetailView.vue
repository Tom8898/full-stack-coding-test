<script setup lang="ts">

import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import axios, { type AxiosResponse } from 'axios';
import type { UserDetails } from '@/models';

const userDetail = ref<UserDetails>();
const errorMessage = ref<string>();

const route = useRoute();
const userId = route.params.userId;

onMounted(async () => {
  try {
    const response: AxiosResponse = await axios.get(`http://localhost:3000/user/${userId}`);
    userDetail.value = response.data?.data as UserDetails;
  } catch (e) {
    userDetail.value = undefined;
    if (axios.isAxiosError(e) && e.response) {
      if (e.response.status === 404) {
        errorMessage.value = "user not found";
      } else if (e.response.status === 400) {
        errorMessage.value = "invalid parameter";
      } else {
        errorMessage.value = 'An unexpected server error occurred.';
      }
    } else {
      errorMessage.value = 'Unable to connect to the server.';
    }
  }
});

</script>

<template>
  <main>
    <button @click="$router.back()">Back</button>
    <h1>User Details</h1>

    <div v-if="userDetail">
      <p><strong>ID:</strong> {{ userDetail.id }}</p>
      <p><strong>First Name:</strong> {{ userDetail.first_name }}</p>
      <p><strong>Last Name:</strong> {{ userDetail.last_name }}</p>
      <p><strong>Email:</strong> {{ userDetail.email }}</p>

      <h2>Favourites</h2>
      <ul>
        <li v-for="(favourite, index) in userDetail.favourites || []" :key="index">
          {{ favourite }}
        </li>
      </ul>
    </div>
    <div v-else-if="errorMessage">
      <p>{{ errorMessage }}</p>
    </div>
  </main>
</template>

<style scoped>
</style>
