<template>
  <div class="mt-10 p-4 text-center">
    <main-title />
    <p class="mb-8 px-8">Save your bookmarks using tags to facilitate finding it later!</p>
    <main-card is="section" class="mx-auto w-full max-w-[420px] px-8 py-6 md:px-14 md:py-8">
      <h2 class="text-lg font-bold text-gray-800">Log in</h2>
      <p class="mb-6">
        Don't have an account?
        <router-link :to="{ name: Routes.Register }" class="text-green-600 underline">
          Create now
        </router-link>
      </p>
      <v-form @submit="onSubmit" :validation-schema="validationSchema">
        <text-field label="Email" name="email" type="email" />
        <text-field label="Password" name="password" type="password" />
        <div class="mb-6 text-right">
          <router-link to="#" class="text-green-600 underline">Forgot password</router-link>
        </div>
        <main-button class="w-full">Sign in</main-button>
      </v-form>
      <main-divider class="my-6">or</main-divider>
      <google-button />
    </main-card>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { Form as VForm, type GenericObject } from 'vee-validate';
import * as yup from 'yup';
import { Routes } from '@/router';
import { authService } from '@/services/auth';
import MainTitle from '@/components/MainTitle.vue';
import MainCard from '@/components/MainCard.vue';
import MainButton from '@/components/MainButton.vue';
import TextField from '@/components/TextField.vue';
import MainDivider from '@/components/MainDivider.vue';
import GoogleButton from '@/components/GoogleButton.vue';

const $router = useRouter();

const validationSchema = yup.object({
  email: yup.string().trim().email('Invalid email address').required('Email is required'),
  password: yup
    .string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
});

async function onSubmit(values: GenericObject) {
  await authService.loginUserAccount(values.email, values.password);
  $router.push({ name: Routes.Homepage });
}
</script>
