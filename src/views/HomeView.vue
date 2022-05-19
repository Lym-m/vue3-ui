<template>
  <div class="home">
    <vx-button-search
      @click="onSearch"
      :loading="loading"
      style="margin-left: 16px"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const loading = ref(false);
    const onSearch = () => {
      console.log(111);
    };
    return {
      loading,
      onSearch,
    };
  },
});
</script>
