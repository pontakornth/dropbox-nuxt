<template>
  <form class="form-box">
    <label for="name">ชื่อ</label>
    <input type="text" name="name" />
    <label for="body">ข้อความ</label>
    <textarea name="body" />
  </form>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>

<style scoped>
.form-box {
  @apply w-1/2 p-8 text-left border-green-500 bg-white border-2;
}
input,
textarea {
  @apply block border border-green-400 shadow-md p-2 w-full;
}

.form-box label {
  @apply py-2 text-lg block;
}
</style>
