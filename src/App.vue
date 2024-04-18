<script setup lang="ts">
import { ref, computed, type Component } from 'vue'
import Home from './components/HomePage.vue'
import About from './components/AboutProject.vue'
import AlternateResources from './components/AlternateResources.vue'
import NotFound from './components/NotFound.vue'
import ChatBox from './components/ChatBox.vue'

const routes = new Map<string, Component>([
  ['/', Home],
  ['/about', About],
  ['/alternate', AlternateResources],
  ['/chatroom', ChatBox]
])

const currentPath = ref(window.location.pathname)

const currentView = computed(() => {
  return routes.get(currentPath.value || '/') || NotFound
})
</script>

<template>
  <component :is="currentView" />
</template>

<style scoped></style>
