<template>
  <v-row>
    <v-col
      cols="12"
      lg="3"
      md="4"
      sm="6"
      xs="9"
      v-for="(item, index) of items"
      :key="index"
    >
      <component :is="item" />
    </v-col>
  </v-row>
</template>

<script lang="ts" setup>
const slots = useSlots();

// The items to be displayed in a responsive grid
const items = computed(() => {
  const defaultSlot = slots.default?.();
  if (!defaultSlot || !defaultSlot.length) return [];
  return defaultSlot[0].children;
});
</script>
