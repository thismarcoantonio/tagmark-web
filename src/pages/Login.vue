<template>
  <h1>TagMark</h1>
  <p>Save your bookmarks using tags to facilitate finding it later!</p>
  <main-card>
    <text-field label="Email" name="email" />
    <text-field label="Password" name="password" type="password" />
  </main-card>
</template>

<script lang="ts" setup>
import MainCard from '@/components/MainCard.vue';
import TextField from '@/components/TextField.vue';
</script>
