<template>
  <form class="form-box">
    <label for="name">ชื่อ</label>
    <input v-model="name" type="text" name="name" />
    <label for="body">ข้อความ</label>
    <textarea v-model="body" name="body" />
    <input type="submit" value="ส่ง Dropbox" class="button" />
  </form>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
@Component
class TheSubmissionForm extends Vue {
  name: string = ''
  body: string = ''
}
export default TheSubmissionForm
</script>

<style scoped>
.form-box {
  @apply w-1/2 p-8 text-left border-green-500 bg-white border-2;
}

label {
  @apply font-display;
}
input,
textarea {
  @apply block border border-green-400 shadow-md p-2 w-full;
}

.button {
  @apply bg-indigo-500 text-white w-auto text-center font-display mx-auto font-semibold mt-4 p-2 rounded;
  cursor: pointer;
  &:hover {
    @apply bg-green-500;
  }
}

.form-box label {
  @apply py-2 text-lg block;
}

@screen lg {
  .form-box {
    @apply w-1/4;
  }
}
</style>
