<template>
  <div class="home-view">
  <div class="intro-box">
    <div class="intro">
      <h1>TeaCharlie 茶屿</h1>
      <p>茶屿淬心 方寸无界</p>
    </div>
  </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="css" scoped>
.home-view {
  width: 100%;
  height: 100%;
}

.intro-box {
    position: relative;
    height: calc(100vh - 3rem);
    padding: 2rem 4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}

.intro-box::before {
    content: '';
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    background:
        /* linear-gradient(to bottom, rgba(0,0,0,0) 70%, #56b05a 100%),  */ /* 背景底部渐变，视情况而加 */
        url('https://static.teacharlie.com/5df6221ca43e0a04e49bb4ccf290dfe4.jpg') no-repeat;
    background-size: cover;
    background-color: #56b05a;
    filter: blur(5px);
    z-index: -1;
}

.intro-box .intro {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: .5rem;
}

.intro-box .intro h1 {
  font-size: 3rem;
    color: #7c471d;
}

.intro-box .intro p {
  font-size: 1rem;
    color: #876345;
}
</style>
