<template>
  <div class="about-view">
    <h1 class="title">关于茶屿</h1>
    <div class="about-content">
      <div class="game-intro">
        <h2>游戏简介</h2>
        <p>茶屿是一款以茶文化为主题的休闲游戏，融合了东方美学与现代游戏设计理念。</p>
      </div>
      <div class="game-features">
        <h2>游戏特色</h2>
        <ul>
          <li>独特的茶艺制作系统</li>
          <li>精美的东方风格场景</li>
          <li>丰富的茶文化知识</li>
          <li>轻松愉悦的游戏体验</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.about-view {
  height: 100%;
  width: 100%;
  background-color: #c1eae6;
  padding: 2rem 4rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}

.about-view .title {
  font-size: 3rem;
  color: #7c471d;
  margin-bottom: 2rem;
}

.about-content {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.about-content h2 {
  font-size: 2rem;
  color: #7c471d;
  border-bottom: 0.3rem ridge #7c471d;
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
}

.about-content p {
  font-size: 1.2rem;
  color: #876345;
  line-height: 1.6;
}

.about-content ul {
  font-size: 1.2rem;
  color: #876345;
  line-height: 1.6;
  padding-left: 1.5rem;
}

.about-content li {
  margin-bottom: 0.5rem;
}
</style>
