<template>
  <div class="mb-4 text-left">
    <label v-if="label" class="block text-gray-800" :for="name">
      {{ label }}
    </label>
    <v-field
      v-model="value"
      class="w-full rounded-xl border border-b-2 border-gray-300 px-4 py-2 outline-0 focus:border-green-600"
      :name="name"
      :id="name"
      :type="type || 'text'"
      :placeholder="placeholder"
    />
    <v-error-message :name="name" class="text-sm text-red-500" />
  </div>
</template>

<script lang="ts" setup>
import { Field as VField, ErrorMessage as VErrorMessage } from 'vee-validate';

const value = defineModel();

defineProps<{
  name: string;
  label?: string;
  type?: string;
  placeholder?: string;
}>();
</script>
