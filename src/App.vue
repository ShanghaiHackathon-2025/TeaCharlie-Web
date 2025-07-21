<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router'
import NavBar from './components/NavBar.vue'
import FooterComp from './components/FooterComp.vue';

const route = useRoute()
</script>

<template>
  <div class="app">
    <header>
      <div class="header-container">
        <div class="header-logo">
          <img src="/icon.svg" alt="TeaCharlie" draggable="false" />
          <!-- 下方预留以方便加文本 -->
          <h1></h1>
        </div>
        <NavBar />
      </div>
    </header>
    <main>
      <div class="main-container">
          <RouterView />
          <FooterComp v-if="route.name !== 'home'" />
      </div>
    </main>
  </div>
</template>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.header-container {
  width: 100%;
  height: 3rem;
  background-color: #c1eae6;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.1rem 1rem;
}

.header-container .header-logo {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: fit-content;
  gap: 0.5rem;
}

.header-container .header-logo img {
  height: 2rem;
}

.header-container .header-logo h1 {
  font-size: 1.5rem;
  margin: 0;
  padding: 0;
  color: #7c471d;
}

/*! main 与 main-container 不可以加背景颜色否则会覆盖掉主页的背景图片 */
main {
  height: calc(100% - 3rem);
  width: 100%;
}

.main-container {
  height: 100%;
  width: 100%;
  overflow: auto;
}
</style>
