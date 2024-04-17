<script setup lang="ts">
import { ref } from 'vue'

const username = ref('')

function joinChat() {
  window.location.href = `chatroom?user=${username.value}&room=global`
}
</script>

<template>
  <div class="w-full place-self-center grid grid-cols-2 gap-4">
    <span class="col-span-2 text-center">Create a username</span>
    <input v-model="username" type="text" class="w-full h-full p-2 bg-gray-800 rounded-lg" />
    <button @click="joinChat" class="px-3 py-1 bg-blue-700 hover:bg-gray-800 rounded-lg">Join</button>
  </div>

</template>

<style scoped></style>
