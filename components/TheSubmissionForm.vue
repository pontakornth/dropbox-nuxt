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
  @apply w-half flex items-center justify-center p-8;
}
</style>
