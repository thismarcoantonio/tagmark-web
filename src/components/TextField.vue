<template>
  <div>
    <label class="block" :for="name">
      {{ label }}
    </label>
    <input
      class="border border-neutral-300 rounded-md"
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
