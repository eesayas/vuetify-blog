<template>
  <!-- Search Bar & Create Button -->

  <v-container>
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

    <div>Want sample data? <a href="#" @click="seed">Seed Data</a></div>
    <br />

    <!-- Grid w/ Pagination -->
    <Grid v-if="filteredBlogs(term, page).length">
      <Item
        v-for="blog of filteredBlogs(term, page)"
        :key="blog.title"
        :title="blog.title"
        :author="blog.author"
        :slug="blog.slug"
        :date="blog.date"
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
  </v-container>
</template>

<script lang="ts" setup>
const { blogs } = storeToRefs(useBlogStore());

const term = ref<string>("");

// Pagination
const page = ref<number>(1);
const itemsPerPage = 8;

const length = computed(() => Math.ceil(blogs.value.length / itemsPerPage));

const filteredBlogs = computed(() => (term: string = "", page?: number) => {
  const data = blogs.value.filter((blog) =>
    blog.title.toLowerCase().includes(term.toLowerCase())
  );

  if (page) {
    return data.slice((page - 1) * itemsPerPage, itemsPerPage * page);
  }
  return data;
});

const seed = () => {
  useData().seed();
};
</script>
