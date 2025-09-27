<template>
  <div class="text-center p-4 mt-10">
    <main-title />
    <p class="mb-8">Save your bookmarks using tags to facilitate finding it later!</p>
    <main-card is="section" class="py-6 px-8 md:py-8 md:px-14 w-full max-w-[420px] mx-auto">
      <h2 class="text-lg font-bold text-gray-800">Create account</h2>
      <p class="mb-6">
        Already have an account?
        <router-link :to="{ name: Routes.Login }" class="text-green-600 underline">
          Log in
        </router-link>
      </p>
      <text-field label="Email" name="email" type="email" />
      <text-field label="Password" name="password" type="password" />
      <text-field label="Confirm password" name="password" type="password" />
      <main-button class="w-full">Create now</main-button>
      <main-divider class="my-6">or</main-divider>
      <google-button />
    </main-card>
  </div>
</template>

<script lang="ts" setup>
import { Routes } from '@/router';
import MainTitle from '@/components/MainTitle.vue';
import MainCard from '@/components/MainCard.vue';
import MainButton from '@/components/MainButton.vue';
import TextField from '@/components/TextField.vue';
import MainDivider from '@/components/MainDivider.vue';
import GoogleButton from '@/components/GoogleButton.vue';
</script>
