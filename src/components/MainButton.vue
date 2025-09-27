<template>
  <component
    :is="to ? 'router-link' : 'button'"
    :to="to"
    class="cursor-pointer border border-b-4 px-4 py-3 font-semibold transition-colors"
    :class="{
      'border-gray-600 bg-green-600 text-white hover:bg-green-700': variant === 'primary',
      'bg-white hover:bg-gray-100': variant === 'secondary',
      'rounded-full': rounded,
      'rounded-xl': !rounded,
    }"
  >
    <slot />
  </component>
</template>

<script lang="ts" setup>
import type { RouterLinkProps } from 'vue-router';

interface Props {
  to?: RouterLinkProps['to'];
  rounded?: boolean;
  variant?: 'primary' | 'secondary' | 'text';
}

withDefaults(defineProps<Props>(), {
  variant: 'primary',
});
</script>
