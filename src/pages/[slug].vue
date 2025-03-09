<template>
  <v-breadcrumbs :items="items">
    <template #title="{ item }">
      <span>
        {{ item.title }}
      </span>
    </template>
  </v-breadcrumbs>

  <v-container>
    <v-alert
      variant="tonal"
      color="success"
      class="mb-3"
      v-if="success"
      closable
    >
      Successfully updated!
    </v-alert>

    <div class="text-h3">{{ blog(slug)?.title }}</div>
    <div class="text-grey-darken-1 text-subtitle-1">
      By {{ blog(slug)?.author }} • {{ date }}
    </div>

    <div class="mt-5 mb-15">{{ blog(slug)?.text }}</div>

    <v-row>
      <v-col cols="auto">
        <v-btn variant="outlined" :to="'/editor/' + slug">Update</v-btn>
      </v-col>
      <v-col cols="auto">
        <v-btn color="red-lighten-2" variant="outlined" @click="remove">
          Delete
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
const slug = useParams("slug");

const { blog } = storeToRefs(useBlogStore());
const { confirm } = useConfirm();

const dateUtils = useDate();
const date = dateUtils.format(blog.value(slug.value)?.date, "fullDate");

const router = useRouter();
const remove = async () => {
  const response = await confirm("This will remove the blog permanently.");
  if (!response) return;

  useBlogStore().remove(slug.value);
  router.replace("/");
};

const route = useRoute();
const success = computed(() => route.query["success"] !== undefined);

const items = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: blog.value(slug.value)?.title!,
    disabled: true,
  },
];
</script>
