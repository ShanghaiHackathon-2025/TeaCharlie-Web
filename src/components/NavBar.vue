<template>
  <div class="nav-bar">
    <RouterLink to="/">主页</RouterLink>
    <RouterLink to="/group">团队</RouterLink>

    <RouterLink to="/download">下载</RouterLink>
    <a href="#" style="cursor: not-allowed">登录</a>
  </div>
</template>

<script setup lang="ts"></script>

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
