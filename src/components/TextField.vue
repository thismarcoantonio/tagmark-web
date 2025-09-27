<template>
  <div class="text-left mb-4">
    <label class="block text-gray-800" :for="name">
      {{ label }}
    </label>
    <input
      class="border border-b-2 border-gray-300 rounded-xl w-full px-4 py-2 outline-0 focus:border-green-600"
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
