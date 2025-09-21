<template>
  <component :is="is ?? 'div'" class="p-4 bg-white border border-neutral-200">
    <slot />
  </component>
</template>

<script lang="ts" setup>
defineProps<{
  is?: string;
}>();
</script>
