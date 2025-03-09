<template>
  <div
    class="font-weight-bold text-h5 my-5 cursor-pointer mx-4"
    @click="goHome"
  >
    blab.
    <span class="font-weight-light text-subtitle-1">A Vuetify blog</span>
  </div>
</template>

<script lang="ts" setup>
const router = useRouter();

const goHome = () => {
  router.replace("/");
};
</script>
