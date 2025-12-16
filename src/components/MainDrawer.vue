<template>
  <teleport to="body">
    <transition
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      enter-active-class="transition-opacity duration-300"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
      leave-active-class="transition-opacity duration-300"
    >
      <div v-if="isMounted" class="fixed top-0 right-0 bottom-0 left-0 z-10">
        <div
          class="absolute top-0 right-0 bottom-0 left-0 bg-black opacity-20"
          @click="handleClose"
        />
        <div
          class="absolute h-full w-full overflow-y-auto bg-white p-6 shadow-md md:top-4 md:right-4 md:h-10/12 md:w-[30%] md:rounded-xl md:border md:border-b-2 md:border-neutral-200"
        >
          <div class="mb-8 flex justify-between">
            <h2 class="text-xl font-bold">{{ title }}</h2>
            <button class="cursor-pointer" @click="handleClose">
              <x-icon />
            </button>
          </div>
          <slot />
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { XIcon } from 'lucide-vue-next';

defineProps<{
  title: string;
}>();

const $emit = defineEmits<{
  (event: 'close'): void;
}>();

const isMounted = ref(false);

function handleClose() {
  isMounted.value = false;
  setTimeout(() => $emit('close'), 300);
}

onMounted(() => {
  isMounted.value = true;
});
</script>
