<template>
  <main>
    <NoticeBanner msg="Hello world" />
  </main>
</template>

<script lang="ts">
import NoticeBanner from '@/components/NoticeBanner.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HomeView',
  components: {
    NoticeBanner,
  },
})
</script>
