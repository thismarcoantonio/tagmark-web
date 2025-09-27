<template>
  <component
    :is="is ?? 'div'"
    class="py-4 px-5 bg-white border border-b-4 border-gray-200 rounded-2xl"
  >
    <slot />
  </component>
</template>

<script lang="ts" setup>
defineProps<{
  is?: string;
}>();
</script>
