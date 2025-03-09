<template>
  <v-text-field v-model="slug" label="Slug" :rules="rules" variant="outlined" />
</template>

<script lang="ts" setup>
export interface Props {
  title: string;
}

const props = withDefaults(defineProps<Props>(), { title: "" });

const slug = defineModel<string>();

const { blog } = storeToRefs(useBlogStore());

const route = useRoute();
const params = route.params as Record<string, string>;

const rules = computed(() => [
  (value: string) => {
    if (value) return true;
    return "This field is required";
  },
  (value: string) => {
    if (!blog.value(value) || value === params.slug) return true;
    return "Slug must be unique";
  },
]);

// Auto generate slug when title is updated
watch(
  () => props.title,
  () => {
    slug.value = props.title.toLowerCase().split(" ").join("-");
  }
);
</script>
