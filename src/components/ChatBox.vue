<script setup lang="ts">
import { useFirestore, useCollection } from 'vuefire'
import { collection, addDoc, orderBy, query, limit, where } from 'firebase/firestore'
import { computed, ref, } from 'vue'

const sendBox = ref('')
const newRoomName = ref('')
const newRoomDesc = ref('')
const newRoomTags = ref('')

const showCreateBox = ref(false)

const searchParams = new URLSearchParams(window.location.search)
const room = searchParams.get('name') || 'global'
const username = searchParams.get('user')
if (!username) {
  window.location.href = '/'
}

const db = useFirestore()
const rooms = useCollection(query(collection(db, 'rooms'), orderBy('name')))
// const roomDoc = computed(() => rooms.value.find((r) => r.name === room))
// if (roomDoc.value == undefined) {
//   window.location.href = '/'
// }

const currentRoomCollection = collection(db, `room_${room}`)
const messages = useCollection(query(currentRoomCollection, orderBy('timestamp', 'desc'), limit(100)))

function sendMessage(e: Event) {
  e.preventDefault()
  if (!sendBox.value) return
  addDoc(currentRoomCollection, {
    message: sendBox.value,
    user: username,
    timestamp: new Date().toISOString()
  })
  sendBox.value = ''
}

function toggleCreateBox() {
  showCreateBox.value = !showCreateBox.value
  console.log(showCreateBox.value)
}

function createRoom(e: Event) {
  e.preventDefault()
  if (!newRoomName.value) return
  if (!/^[a-z0-9_-]{4,32}$/.test(newRoomName.value)) {
    alert('Invalid room name')
    return
  }
  if (rooms.value.some((r) => r.name === newRoomName.value)) {
    alert('Room already exists')
    return
  }
  addDoc(collection(db, 'rooms'), {
    name: newRoomName.value,
    description: newRoomDesc.value,
    user: username,
    tags: newRoomTags.value.split(','),
    timestamp: new Date().toISOString()
  })
  newRoomName.value = ''
  toggleCreateBox()
}
</script>

<template>
  <div
    class="container grid grid-cols-7 grid-flow-col col-span-full border border-gray-900 rounded-xl overflow-clip max-h-full">
    <div class="flex flex-col col-span-5 bg-gray-700 max-h-full">
      <div class="w-full max-h-full bg-gray-700">
        <h2 class="text-lg py-2 w-full text-center font-semibold">Chatbox - #{{ room }}
        </h2>
        <ul class="wrapper overflow-y-auto flex flex-col-reverse">
          <li class="flex flex-col items-start" v-for="message in messages"
            :key="`${message.username}_${message.timestamp}`">
            <div
              :class="`flex flex-col p-2 rounded-lg m-2` + (message.user === username ? ' self-end bg-blue-800 text-right' : ' self-start bg-gray-800')"
              :title="(new Date(message.timestamp)).toLocaleString()">
              <div class="text-xs text-gray-500"> {{ message.user }}</div>
              <p>{{ message.message }}</p>
            </div>
          </li>
        </ul>
      </div>
      <form @submit="sendMessage">
        <div class="flex flex-row h-14 p-2 w-ful">
          <input v-model="sendBox" type="text" class="w-full h-full p-2 bg-gray-800 rounded-xl"
            placeholder="Type a message..." />
          <button type="submit" class="btn ms-2 px-4 p-2 h-full bg-blue-800 hover:bg-gray-900 rounded-xl">
            Send
          </button>
        </div>
      </form>
    </div>
    <div class="flex flex-col justify-center col-span-2 h-full bg-gray-800">
      <h2 class="text-lg py-2 w-full text-center font-semibold">Rooms</h2>
      <ul class="wrapper flex flex-col justify-start w-full h-full overflow-y-auto">
        <!-- <li class="w-full px-3 py-1">
          <a class="hover:bg-transparent hover:underline" :href="`chatroom?user=${username}&name=global`">#global</a>
        </li> -->
        <li class="w-full px-3 py-1" v-for="room in rooms" :key="room.id">
          <a class="hover:bg-transparent hover:underline"
            :href="`chatroom?user=${username}&name=${room.name}`">#{{ room.name }}</a>
        </li>
      </ul>
      <button @click="toggleCreateBox" class="btn m-2 p-2 bg-blue-800 rounded-xl">Create Room</button>
    </div>
  </div>
  <form @submit="createRoom" class="z-50">
    <div v-if="showCreateBox" class="fixed m-auto inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
      <div class="grid grid-cols-2 bg-gray-800 p-4 rounded-lg">
        <h2 class="col-span-2 text-lg py-2 w-full text-center">Create Room</h2>
        <input v-model="newRoomName" type="text" class="col-span-2 w-full h-full p-2 bg-gray-700 rounded-xl"
          placeholder="Room Name" pattern="[a-z0-9_-]{4,32}" />
        <span class="col-span-2 py-2 text-xs text-gray-500 w-full">Only use lowercase letters, numbers, and - or _. (No
          spaces)</span>
        <input v-model="newRoomDesc" type="text" class="col-span-2 w-full h-full p-2 bg-gray-700 rounded-xl"
          placeholder="Room Topic" pattern=".{0,120}" />
        <span class="col-span-2 py-2 text-xs text-gray-500 w-full"></span>
        <input v-model="newRoomTags" type="text" class="col-span-2 w-full h-full p-2 bg-gray-700 rounded-xl"
          placeholder="Room Tags" pattern="[a-z0-9_,]{0,200}" />
        <span class="col-span-2 py-2 text-xs text-gray-500 w-full">Letters, numbers and _. Separate tags by a
          comma.</span>
        <button type="submit" class="btn me-2 p-2 bg-blue-800 rounded-xl">Create</button>
        <button @click="toggleCreateBox" class="btn p-2 bg-red-800 rounded-xl">Cancel</button>
      </div>
    </div>
  </form>

  <a id="home" class="text-xs" href="/">
    <span class="grid z-10 justify-center place-content-center fixed right-0 m-12 bottom-0 border
      border-gray-600 rounded-full bg-gray-9500 hover:bg-gray-900 h-10 w-10">
      Home</span>
  </a>
</template>

<style scoped>
.container {
  width: 600px;

  @media screen and (max-width: 768px) {
    width: 400px;
  }
}

ul.wrapper {
  height: 600px;
}
</style>
