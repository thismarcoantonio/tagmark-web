<template>
  <div class="mb-4 text-left">
    <label v-if="label" class="block text-gray-800" :for="name">
      {{ label }}
    </label>
    <div
      class="flex w-full items-center rounded-xl border border-b-2 border-gray-300 focus-within:border-green-600"
    >
      <v-field
        v-bind="$attrs"
        class="w-full px-4 py-2 outline-0"
        :name="name"
        :id="name"
        :type="type || 'text'"
        :placeholder="placeholder"
      />
      <slot name="append-inner" />
    </div>
    <v-error-message :name="name" class="text-sm text-red-500" />
  </div>
</template>

<script lang="ts" setup>
import { Field as VField, ErrorMessage as VErrorMessage } from 'vee-validate';

defineProps<{
  name: string;
  label?: string;
  type?: string;
  placeholder?: string;
}>();
</script>
