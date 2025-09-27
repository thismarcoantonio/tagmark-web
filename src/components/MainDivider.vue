<template>
  <div class="relative flex justify-center items-center">
    <hr class="border-gray-200 w-full" />
    <div v-if="$slots.default" class="absolute bg-white px-4">
      <slot />
    </div>
  </div>
</template>
