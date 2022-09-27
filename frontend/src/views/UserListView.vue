<script setup lang="ts">

import { onMounted, ref } from 'vue';
import axios, { type AxiosResponse } from 'axios';
import type { User } from '@/models';

const users = ref<User[]>();

onMounted(async () => {
  try {
    const response: AxiosResponse = await axios.get('http://localhost:3000/users');
    users.value = response.data;
  } catch (e) {
    users.value = [];
  }
});

</script>

<template>
  <main>
    <h1>Users</h1>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Last Name</th>
          <th>First Name</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.last_name }}</td>
          <td>{{ user.first_name }}</td>
          <td>
            <router-link :to="`/user/${user.id}`">
              <button>Details</button>
            </router-link> 
          </td>
        </tr>
      </tbody>
    </table>
  </main>
</template>

<style scoped>
  thead tr th {
    text-align: left;
    font-weight: bold;
  }

  tbody tr:nth-child(odd) {
    background-color: var(--color-border);
  }
</style>
  