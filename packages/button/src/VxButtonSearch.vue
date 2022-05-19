<template>
  <a-button type="primary" html-type="submit">
    <template #icon><SearchOutlined /></template>
    <slot>查询</slot>
  </a-button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { SearchOutlined } from "@ant-design/icons-vue";
export default defineComponent({
  name: "VxButtonSearch",
  components: {
    SearchOutlined,
  },
});
</script>
