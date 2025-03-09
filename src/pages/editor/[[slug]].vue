<template>
  <v-breadcrumbs :items="items"></v-breadcrumbs>

  <v-form @submit.prevent="onSubmit" ref="form">
    <v-text-field
      v-model="title"
      label="Title"
      :rules="rules"
      class="mb-3"
    ></v-text-field>

    <Slug v-model="slug" :title="title" class="mb-3" />

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

    <DatePicker v-model="date" />

    <v-row>
      <v-col cols="auto">
        <v-btn
          variant="tonal"
          color="success"
          type="submit"
          v-if="mode === 'Create'"
        >
          Submit
        </v-btn>
        <v-btn
          variant="tonal"
          color="primary"
          v-if="mode === 'Edit'"
          type="submit"
          @click="update"
        >
          Update
        </v-btn>
      </v-col>
      <v-col cols="auto">
        <v-btn :to="'/' + id" replace> Cancel</v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>

<script lang="ts" setup>
const title = ref<string>("");
const slug = ref<string>("");

const text = ref<string>("");
const author = ref<string>("");

const date = ref<Date>();

const mode = ref<"Create" | "Edit">("Create");

const items = computed(() => [
  {
    title: "Home",
    disabled: false,
    href: "/",
  },
  {
    title: `${mode.value} Blog`,
    disabled: true,
  },
]);

const rules = [
  (value: string) => {
    if (value) return true;
    return "This field is required";
  },
];

const form = ref();
const validate = async () => {
  const { valid } = await form.value?.validate();
  return !!valid;
};

const router = useRouter();

const create = () => {
  useBlogStore().create({
    title: title.value,
    text: text.value,
    author: author.value,
    date: new Date(),
    slug: slug.value,
  });

  router.replace("/");
};

const { confirm } = useConfirm();

const route = useRoute();
const params = route.params as Record<string, string>;

const id = computed(() => params.slug);

const update = async () => {
  const response = await confirm("This will update the blog.");
  if (!response) return;

  useBlogStore().update(id.value, {
    title: title.value,
    text: text.value,
    author: author.value,
    date: date.value,
    slug: slug.value,
  });

  router.replace(`/${slug.value}?success`);
};

const onSubmit = async () => {
  const response = await validate();
  if (!response) return;

  if (mode.value === "Create") {
    create();
  }

  if (mode.value === "Edit") {
    await update();
  }
};

onMounted(() => {
  if (!id.value) return;
  mode.value = "Edit";

  const blog = useBlogStore().blog(id.value);
  if (!blog) return;

  title.value = blog.title;
  text.value = blog.text;
  author.value = blog.author;
  date.value = blog.date;
});
</script>
