<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router';

const username = ref('')

const router = useRouter()

function joinChat(e: Event) {
  e.preventDefault()
  if (!username.value) return
  router.push(`/chatroom?user=${username.value}&room=global`)
}
</script>

<template>
  <div class="col-span-2 flex flex-col items-center justify-center">
    <div class="flex flex-col items-center text-center text-white my-12">
      <div class="w-2/3">
        <p class="text-md text-neutral-800">Welcome to Interconnect: Fostering Support and Solidarity for Racialized
          Individuals with Disabilities. Join us in amplifying voices, sharing experiences, and advocating for inclusive
          mental health resources in the face of systemic barriers, including incarceration and ableism.
          <br />
          <RouterLink to="/about" class="text-blue-500 italic">Why? Learn more -></RouterLink>
        </p>
        <br />


        <p class="text-md text-neutral-600">Not what you're looking for?
          <RouterLink to="/alternate" class="text-blue-500 italic">Alternate Resources -></RouterLink>
        </p>
      </div>
    </div>
    <form @submit="joinChat" class="w-1/2 grid grid-cols-2 gap-4 p-8 bg-orange-400 shadow-lg rounded-2xl">
      <h1 class="col-span-2 text-2xl font-bold text-center text-white">Join the Conversation</h1>
      <span class="col-span-2 text-center">Create a Username</span>
      <input v-model="username" type="text" placeholder="Username" class="w-full h-full p-2 bg-gray-100 rounded-lg text-black" />
      <button type="submit" class="px-3 py-1 text-white bg-gradient-to-r from-orange-500 to-purple-300 hover:bg-gradient-to-l transition-all rounded-lg">Join</button>
      <h3 class="col-span-2 text-center text-neutral-100 text-sm">Please refrain from using any form of offensive language.</h3>
    </form>
  </div>
</template>

<style scoped></style>
