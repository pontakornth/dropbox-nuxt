<template>
  <div class="app">
    <TheSubmissionForm />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import TheSubmissionForm from '~/components/TheSubmissionForm.vue'
@Component({
  components: {
    TheSubmissionForm
  }
})
class Index extends Vue {}
export default Index
</script>

<style>
.app {
  @apply h-full w-full flex justify-center items-center text-center bg-indigo-800;
  width: 100%;
}
</style>
