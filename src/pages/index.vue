<template>
  <!-- Search Bar & Create Button -->
  <v-text-field
    placeholder="Search blogs"
    variant="solo"
    append-inner-icon="mdi-magnify"
    v-model="term"
    clearable
    @click:clear="term = ''"
    density="compact"
  >
    <template #append>
      <v-btn href="/editor">Create</v-btn>
    </template>
  </v-text-field>

  <!-- Grid w/ Pagination -->
  <Grid v-if="filteredBlogs(term, page).length">
    <Item
      v-for="blog of filteredBlogs(term, page)"
      :key="blog.title"
      :title="blog.title"
      :author="blog.author"
      :slug="blog.slug"
    />
  </Grid>
  <div v-else>No blogs to display</div>

  <br />
  <v-pagination
    :length="length"
    v-model="page"
    variant="tonal"
    density="compact"
    rounded="circle"
  ></v-pagination>
</template>

<script lang="ts" setup>
const { blogs } = storeToRefs(useBlogStore());

const term = ref<string>("");

// Pagination
const page = ref<number>(1);
const itemsPerPage = 10;

const length = computed(() => Math.ceil(blogs.value.length / itemsPerPage));

const filteredBlogs = computed(() => (term: string = "", page?: number) => {
  const data = blogs.value.filter((blog) => blog.title.includes(term));

  if (page) {
    return data.slice((page - 1) * itemsPerPage, itemsPerPage * page);
  }
  return data;
});
</script>
