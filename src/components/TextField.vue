<template>
  <div class="mb-4 text-left">
    <label class="block text-gray-800" :for="name">
      {{ label }}
    </label>
    <input
      class="w-full rounded-xl border border-b-2 border-gray-300 px-4 py-2 outline-0 focus:border-green-600"
      :name="name"
      :id="name"
      :type="type || 'text'"
    />
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  name: string;
  label: string;
  type?: string;
}>();
</script>
