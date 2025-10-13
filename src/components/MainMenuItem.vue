<template>
  <v-menu-item v-slot="{ active }">
    <button
      class="group flex w-full cursor-pointer items-center rounded-md px-2 py-2 text-sm"
      :class="{
        'bg-green-600 text-white': active,
        'text-gray-900': !active,
      }"
    >
      <div v-if="$slots.prepend" class="mr-2">
        <slot name="prepend" />
      </div>
      <slot />
    </button>
  </v-menu-item>
</template>

<script lang="ts" setup>
import { MenuItem as VMenuItem } from '@headlessui/vue';
</script>
