<template>
  <div class="relative flex items-center justify-center">
    <hr class="w-full border-gray-200" />
    <div v-if="$slots.default" class="absolute bg-white px-4">
      <slot />
    </div>
  </div>
</template>
