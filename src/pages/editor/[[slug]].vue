<template>
  <v-container>
    <v-breadcrumbs :items="items"></v-breadcrumbs>

    <v-form @submit.prevent="onSubmit" ref="form">
      <v-text-field
        v-model="title"
        label="Title"
        :rules="rules"
        class="mb-3"
      ></v-text-field>

      <v-textarea
        v-model="text"
        label="Text"
        :rules="rules"
        class="mb-3"
      ></v-textarea>

      <v-text-field
        v-model="author"
        label="Author"
        :rules="rules"
        class="mb-3"
      ></v-text-field>

      <v-row>
        <v-col cols="auto">
          <v-btn variant="tonal" color="success" type="submit">Submit</v-btn>
        </v-col>
        <v-col cols="auto">
          <v-btn href="/">Cancel</v-btn>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>

<script lang="ts" setup>
import { useBlogStore } from "@/stores/blog";

const title = ref<string>("");
const text = ref<string>("");
const author = ref<string>("");

const items = [
  {
    title: "Home",
    disabled: false,
    href: "/",
  },
  {
    title: "Create Blog",
    disabled: true,
  },
];

const rules = [
  (value: string) => {
    if (value) return true;
    return "This field is required";
  },
];

const router = useRouter();

const form = ref();

const validate = async () => {
  const { valid } = await form.value?.validate();
  return !!valid;
};

const onSubmit = async () => {
  const response = await validate();
  if (!response) return;

  useBlogStore().create({
    title: title.value,
    text: text.value,
    author: author.value,
    date: new Date(),
  });
  router.push("/");
};
</script>
