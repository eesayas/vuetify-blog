<template>
  <v-hover>
    <template #default="{ isHovering, props }">
      <v-card
        class="cursor-pointer d-flex flex-column"
        height="200"
        hover
        :color="color(!!isHovering)"
        v-bind="props"
        :to="slug"
      >
        <v-card-title class="text-wrap d-flex flex-column flex-grow-1">
          {{ title }}
        </v-card-title>

        <v-card-text class="d-flex flex-column justify-end">
          <div class="mt-auto text-grey-darken-1">By {{ author }}</div>
        </v-card-text>
      </v-card>
    </template>
  </v-hover>
</template>

<script lang="ts" setup>
export interface Props {
  title: string;
  author: string;
  slug: string;
}
defineProps<Props>();
const color = computed(
  () => (hovering: boolean) => hovering ? "grey-darken-3" : "grey-darken-4"
);
</script>
