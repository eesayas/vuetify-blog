<template>
  <v-menu location="end" :close-on-content-click="false" v-model="menu">
    <template #activator="{ props }">
      <div class="mb-4">
        Date: {{ formattedDate }}
        &nbsp;
        <v-btn v-bind="props" variant="outlined" prepend-icon="mdi-calendar">
          Set Date
        </v-btn>
      </div>
    </template>
    <v-card>
      <v-date-picker v-model="date"></v-date-picker>

      <v-card-actions>
        <v-btn color="green" @click="today">set date to now</v-btn>
        <v-spacer></v-spacer>
        <v-btn variant="tonal" @click="menu = false">close</v-btn>
      </v-card-actions>
    </v-card>
  </v-menu>
</template>

<script setup lang="ts">
interface Props {
  modelValue: Date | string;
}

const props = defineProps<Props>();

interface Emits {
  (e: "update:modelValue", value: Date | string): void;
}

const emit = defineEmits<Emits>();

const date = computed({
  get() {
    return typeof props.modelValue === "string"
      ? new Date(props.modelValue)
      : props.modelValue;
  },
  set(newValue) {
    const value = typeof newValue === "string" ? new Date(newValue) : newValue;
    emit("update:modelValue", value);
  },
});

const menu = ref<boolean>(false);

const dateUtils = useDate();
const formattedDate = computed(() =>
  dateUtils.format(date.value ? new Date(date.value) : new Date(), "fullDate")
);

const today = () => {
  date.value = new Date();
};
</script>
