<template>
  <component
    :is="to ? 'router-link' : 'button'"
    :to="to"
    class="py-3 px-4 rounded-xl font-semibold cursor-pointer border border-b-4 transition-colors"
    :class="{
      'bg-green-600 hover:bg-green-700 text-white border-gray-600': variant === 'primary',
      'bg-slate-300 hover:bg-slate-400': variant === 'secondary',
      'rounded-full': rounded,
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
