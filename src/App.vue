<script setup lang="ts">
import { ref, computed, type Component } from 'vue'
import Home from './components/HomePage.vue'
import About from './components/AboutProject.vue'
import NotFound from './components/NotFound.vue'
import ChatBox from './components/ChatBox.vue'

const routes = new Map<string, Component>([
  ['/', Home],
  ['/about', About],
  ['/chatroom', ChatBox]
])

const currentPath = ref(window.location.pathname)

const currentView = computed(() => {
  return routes.get(currentPath.value || '/') || NotFound
})
</script>

<template>
  <header class="absolute top-0 left-0 m-4">
    <a href="/">Home</a> | <a href="about">About</a> |
    <a href="non-existent-path">Broken Link</a>
  </header>
  <component :is="currentView" />
</template>

<style scoped></style>
