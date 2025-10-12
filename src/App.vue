<template>
  <router-view />
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import { setupFirebase } from '@/services';

onMounted(() => {
  setupFirebase();
});
</script>
