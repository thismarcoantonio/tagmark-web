<template>
  <button
    class="py-3 px-4 rounded-full text-sm font-semibold cursor-pointer"
    :class="{
      'bg-green-700 hover:bg-green-800 text-white': variant === 'primary',
      'bg-slate-300 hover:bg-slate-400': variant === 'secondary',
    }"
  >
    <slot />
  </button>
</template>

<script lang="ts" setup>
interface Props {
  variant?: 'primary' | 'secondary' | 'text';
}

withDefaults(defineProps<Props>(), {
  variant: 'primary',
});
</script>
