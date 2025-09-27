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
      <div v-if="isMounted" class="fixed top-0 left-0 bottom-0 right-0 z-10">
        <div class="bg-black absolute top-0 left-0 bottom-0 right-0 opacity-20" @click="onClose" />
        <div
          class="main-drawer__card bg-white absolute top-4 right-4 p-4 rounded-xl border-neutral-200 border shadow-md"
        >
          <slot />
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';

const $emit = defineEmits<{
  (event: 'close'): void;
}>();

const isMounted = ref(false);

function onClose() {
  isMounted.value = false;
  setTimeout(() => $emit('close'), 300);
}

onMounted(() => {
  isMounted.value = true;
});
</script>

<style scoped>
.main-drawer__card {
  width: 30%;
  height: calc(100% - 32px);
}
</style>
