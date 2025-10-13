<template>
  <v-menu as="div" class="relative inline-block text-left">
    <v-menu-button>
      <slot name="activator" />
    </v-menu-button>

    <transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <v-menu-items
        class="absolute right-0 mt-2 w-56 origin-top-right rounded-md border border-b-4 border-gray-400 bg-white shadow-md focus:outline-none"
      >
        <div class="px-1 py-1">
          <slot />
        </div>
      </v-menu-items>
    </transition>
  </v-menu>
</template>

<script lang="ts" setup>
import { Menu as VMenu, MenuButton as VMenuButton, MenuItems as VMenuItems } from '@headlessui/vue';
</script>
