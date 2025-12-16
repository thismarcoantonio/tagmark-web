<template>
  <main-drawer title="New bookmark" @close="$router.push({ name: Routes.Homepage })">
    <v-form
      @submit="onSubmit"
      :validation-schema="validationSchema"
      :initial-values="initialValues"
    >
      <text-field name="title" label="Title" required />
      <text-field name="description" label="Description" textarea />
      <v-field-array name="links" v-slot="{ fields, push, remove }">
        <text-field
          v-for="(field, index) in fields"
          :key="field.key"
          :name="`links[${index}]`"
          :label="!index ? 'Links' : ''"
        >
          <template v-if="index > 0" #append-inner>
            <button class="cursor-pointer">
              <x-icon class="mr-2" @click="remove(index)" />
            </button>
          </template>
        </text-field>
        <v-error-message name="links" class="text-sm text-red-500" />
        <main-button
          v-if="fields.length < 5"
          class="mb-4 flex items-center gap-1"
          variant="text"
          size="small"
          @click="push('')"
        >
          <plus-icon :size="16" :stroke-width="3" />
          Add new link
        </main-button>
      </v-field-array>
      <combobox-field
        v-model:custom-options="customTags"
        required
        name="tags"
        label="Tags"
        :options="tagsStore.tagsList.map((tag) => ({ label: tag.name, value: tag.id }))"
      />
      <main-button type="submit">Create</main-button>
    </v-form>
  </main-drawer>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import {
  Form as VForm,
  FieldArray as VFieldArray,
  ErrorMessage as VErrorMessage,
  type GenericObject,
} from 'vee-validate';
import { useRouter } from 'vue-router';
import { PlusIcon, XIcon } from 'lucide-vue-next';
import * as yup from 'yup';
import { Routes } from '@/router';
import { useTagsStore } from '@/stores/tags';
import { useBookmarksStore } from '@/stores/bookmarks';
import type { Bookmark } from '@/declarations/Bookmark';
import MainButton from '@/components/MainButton.vue';
import MainDrawer from '@/components/MainDrawer.vue';
import TextField from '@/components/TextField.vue';
import ComboboxField from '@/components/ComboboxField.vue';

const initialValues = {
  links: [''],
  tags: [],
};

const $router = useRouter();
const tagsStore = useTagsStore();
const bookmarksStore = useBookmarksStore();

const customTags = ref<string[]>();

const validationSchema = yup.object({
  title: yup
    .string()
    .required('Title is required')
    .trim()
    .min(3, 'Title must be at least 3 characters')
    .max(255, 'Title cannot exceed 255 characters'),
  description: yup.string().optional().trim().max(500, 'Description cannot exceed 500 characters'),
  links: yup
    .array()
    .of(yup.string().url('Link must be a valid URL'))
    .optional()
    .max(5, 'You can include up to 5 links')
    .strict(),
  tags: yup
    .array()
    .of(yup.string())
    .min(1, 'At least one tag is required')
    .required('At least one tag is required'),
});

async function onSubmit(values: GenericObject) {
  await bookmarksStore.createBookmark(values as Bookmark);
  $router.push({ name: Routes.Homepage });
}
</script>
