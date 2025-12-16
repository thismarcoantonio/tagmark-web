<template>
  <component
    :is="is ?? 'div'"
    :class="{ 'px-4 py-2': size === 'default', 'px-3 py-1': size === 'small' }"
    class="relative rounded-full bg-white select-none"
  >
    <div
      class="relative z-[1] flex items-center gap-2"
      :class="[active ? 'text-white' : 'text-gray-600']"
    >
      <div
        v-if="active != null"
        class="h-2 w-2 rounded-full"
        :class="[bgColor, { 'brightness-50': active }]"
      />
      <slot />
    </div>
    <div
      class="absolute top-0 left-0 z-[0] h-full w-full rounded-full"
      :class="[bgColor, active ? 'opacity-100' : 'opacity-20']"
    />
  </component>
</template>

<script lang="ts" setup>
interface Props {
  is?: string;
  active?: boolean;
  bgColor?: string;
  size?: 'default' | 'small';
}

withDefaults(defineProps<Props>(), { size: 'default', active: undefined });
</script>
