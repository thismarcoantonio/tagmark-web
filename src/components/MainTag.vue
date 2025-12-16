<template>
  <component :is="is ?? 'div'">
    <slot />
  </component>
</template>

<script lang="ts" setup>
defineProps<{
  is?: string;
  variant?: 'default' | 'flat';
}>();
</script>
