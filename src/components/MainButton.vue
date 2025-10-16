<template>
  <component
    :is="to ? 'router-link' : 'button'"
    :to="to"
    class="cursor-pointer font-semibold transition-colors"
    :class="{
      'border-gray-600 bg-green-600 text-white hover:bg-green-700': variant === 'primary',
      'bg-white hover:bg-gray-100': variant === 'secondary',
      'border border-b-4': variant !== 'text',
      'hover:bg-gray-200': variant === 'text',
      'rounded-full': rounded,
      'rounded-xl': !rounded && size === 'default',
      'rounded-md': !rounded && size === 'small',
      'px-4 py-3 text-base': size === 'default',
      'px-3 py-1': size === 'small',
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
  size?: 'default' | 'small';
}

withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'default',
});
</script>
