<template>
  <v-menu>
    <template #activator="{ props }">
      <v-text-field
        v-bind="props"
        label="Date"
        variant="outlined"
        v-model="formattedDate"
      ></v-text-field>
    </template>
    <v-date-picker v-model="date"></v-date-picker>
  </v-menu>
</template>

<script setup lang="ts">
const date = defineModel<Date>({ default: new Date() });

const dateUtils = useDate();
const formattedDate = computed(() => dateUtils.format(date.value, "fullDate"));
</script>
