<template>
  <div class="container">
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
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
</style>
