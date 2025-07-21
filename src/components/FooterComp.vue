<template>
  <footer class="site-footer">
    <div class="footer-content">
      <div class="footer-section">
        <h3>TeamNil</h3>
        <p>© 2024 TeamNil. All rights reserved.</p>
      </div>
      <div class="footer-section">
        <h3>特别鸣谢</h3>
        <a href="https://www.qiniu.com/" target="_blank">七牛云提供云服务器</a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
// 可以在这里添加组件逻辑
</script>

<style scoped>
.site-footer {
  width: 100%;
  height: fit-content;
  background-color: #edab75;
  border-top: 1rem ridge #7c471d;
  padding: 2rem;
}

.footer-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  max-width: 1200px;
  margin: 0 auto;
  gap: 2rem;
}

.footer-section {
  min-width: 200px;
}

.footer-section h3 {
  color: #7c471d;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  border-bottom: 0.3rem ridge #7c471d;
  padding-bottom: 0.5rem;
}

.footer-section p,
.footer-section a {
  color: #876345;
  font-size: 1rem;
  line-height: 1.6;
}

.footer-section a:hover {
  color: #5a3515;
}
</style>
