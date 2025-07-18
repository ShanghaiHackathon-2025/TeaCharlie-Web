<template>
  <div class="nav-bar">
    <RouterLink to="/">主页</RouterLink>
    <RouterLink to="/download">下载</RouterLink>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.nav-bar {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.nav-bar a {
  margin-left: 1rem;
}

</style>
