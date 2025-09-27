<template>
  <main-drawer @close="$router.push({ name: Routes.Homepage })">
    <text-field name="Name" label="Name" />
  </main-drawer>
</template>

<script lang="ts" setup>
import { Routes } from '@/router';
import MainDrawer from '@/components/MainDrawer.vue';
import TextField from '@/components/TextField.vue';
</script>
