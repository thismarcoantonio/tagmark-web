<template>
  <div class="mb-4 text-left">
    <label v-if="label" class="block text-gray-800" :for="name">
      {{ label }} <span v-if="required" class="text-red-600">*</span>
    </label>
    <multiselect
      multiple
      taggable
      ref="multiselect"
      label="label"
      track-by="value"
      v-model="selectedOptions"
      :use-teleport="false"
      :options="optionsList"
      :placeholder="''"
      :as="Multiselect"
      :name="name"
      :id="name"
      :close-on-select="false"
      @tag="addNewOption"
    >
      <template #option="{ option }">
        <template v-if="option.isTag">
          {{
            newOptionFormat ? newOptionFormat(option.label) : `Create new "${option.label}" option`
          }}
        </template>
        <template v-else>
          <circle-check-icon v-if="modelValue.includes(option.value)" class="mr-2" :size="16" />
          <circle-icon v-else class="mr-2" :size="16" />
          {{ option.label }}
        </template>
      </template>
      <template #tag="{ option, remove }">
        <div class="inline-flex shrink-0 items-center gap-1 rounded-lg bg-amber-100 px-2">
          {{ option.label }}
          <x-icon @click="remove(option)" :size="16" />
        </div>
      </template>
    </multiselect>
    <v-error-message :name="name" class="text-sm text-red-500" />
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import { useField, ErrorMessage as VErrorMessage } from 'vee-validate';
import { XIcon, CircleIcon, CircleCheckIcon } from 'lucide-vue-next';
import Multiselect from 'vue-multiselect';

interface Option {
  label: string;
  value: string;
  [key: string]: unknown;
}

const $props = defineProps<{
  name: string;
  label?: string;
  options: Option[];
  required?: boolean;
  newOptionFormat?: (option: string) => string;
}>();

const newOptions = ref<Option[]>([]);

const { value: modelValue } = useField<string[]>($props.name, (inputValue) => !!inputValue);

function addNewOption(option: string) {
  newOptions.value.push({ label: option, value: option });
  modelValue.value.push(option);
}

const optionsList = computed(() => [...$props.options, ...newOptions.value]);

const selectedOptions = computed({
  get() {
    return modelValue.value.map((value) =>
      optionsList.value.find((option) => option.value === value),
    );
  },
  set(selected: Option[]) {
    modelValue.value = selected.map((option) => option.value);
  },
});
</script>
