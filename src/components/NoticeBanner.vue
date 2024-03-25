<template>
  <div class="notice">
    <h1 class="green">{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'NoticeBanner',
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
})
</script>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}
</style>
