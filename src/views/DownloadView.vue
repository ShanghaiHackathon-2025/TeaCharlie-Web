<script setup lang="ts">
import ButtonComp from '@/components/ButtonComp.vue'
</script>

<template>
  <div class="download-view">
    <h1 class="title">Download 下载</h1>
    <div class="download-info-card-container">
      <div class="download-info-card-device">
        <h2>电脑</h2>
        <div class="download-info-card-platform">
          <h3>Windows</h3>
          <div class="download-info-card-platform-btngroup">
            <ButtonComp to="/downloading/computer/windows/x64">x64</ButtonComp>
          </div>
        </div>
        <!-- <div class="download-info-card-platform">
          <h3>MacOS</h3>
          <div class="download-info-card-platform-btngroup">
            <ButtonComp>Apple Silicon</ButtonComp>
            <ButtonComp>Intel</ButtonComp>
          </div>
        </div>
      </div>
      <div class="download-info-card-device">
        <h2>手机</h2>
        <div class="download-info-card-platform">
          <h3 class="download-info-card-title">Android</h3>
          <div class="download-info-card-platform-btngroup">
            <ButtonComp>ARM</ButtonComp>
          </div>
        </div>
        <div class="download-info-card-platform">
          <h3 class="download-info-card-title">Apple</h3>
          <div class="download-info-card-platform-btngroup">
            <ButtonComp>去往App Store下载</ButtonComp>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<style>
.download-view {
  width: 100%;
  height: 100%;
  background-color: #c1eae6;
  padding: 2rem 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.download-view .title {
  font-size: 3rem;
  color: #7c471d;
  margin-bottom: 2rem;
}

.download-view .download-info-card-container {
  min-width: 80vw;
  height: 70vh;
  background-color: #edab75;
  border: 1rem ridge #7c471d;
  padding: 1vh 2vw;
  overflow: auto;
}

.download-view .download-info-card-container .download-info-card-device {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 2rem;
  gap: 1rem;
}

.download-view .download-info-card-container .download-info-card-device h2 {
  font-size: 2rem;
  color: #7c471d;
}

.download-view .download-info-card-container .download-info-card-device .download-info-card-platform {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1rem;
}

.download-view .download-info-card-container .download-info-card-device .download-info-card-platform h3 {
  font-size: 1.5rem;
  color: #7c471d;
}

.download-view .download-info-card-container .download-info-card-device .download-info-card-platform .download-info-card-platform-btngroup {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
}

</style>
