<template>
  <component
    :is="is ?? 'div'"
    class="rounded-2xl border border-b-4 border-gray-200 bg-white px-5 py-4"
  >
    <slot />
  </component>
</template>

<script lang="ts" setup>
defineProps<{
  is?: string;
}>();
</script>
