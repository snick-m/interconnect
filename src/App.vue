<script setup lang="ts">
import { useRoute } from 'vue-router';
const route = useRoute();
</script>

<template>
  <RouterView :key="route.query.name as string" />
</template>

<style scoped></style>
