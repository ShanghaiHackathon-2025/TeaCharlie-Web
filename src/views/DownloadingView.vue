<template>
  <div class="home-view">
    <div class="intro-box">
      <div class="intro">
        <div class="charlie-dance">
          <ImgRunner :images="images" :interval="200" />
        </div>
        <h1>正在下载</h1>
        <p>TeaCharlie 茶屿</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ImgRunner from '@/components/ImgRunner.vue'

// 预留接口
// const props = defineProps<{
//   device: string
//   os: string
//   arch: string
// }>()

const images = [
  '/charlie/1.png',
  '/charlie/2.png',
  '/charlie/3.png',
  '/charlie/4.png',
  '/charlie/5.png',
  '/charlie/6.png',
]

// 示例下载实现:
// 1. 使用fetch或axios调用下载API
// const downloadFile = async () => {
//   const response = await fetch(`/api/download/${props.device}/${props.os}/${props.arch}`)
//   if (response.ok) {
//     const blob = await response.blob()
//     const url = window.URL.createObjectURL(blob)
//     const a = document.createElement('a')
//     a.href = url
//     a.download = 'filename.ext'
//     document.body.appendChild(a)
//     a.click()
//     document.body.removeChild(a)
//   }
// }
//
// 2. 在mounted或点击事件中调用
// onMounted(() => {
//   downloadFile()
// })
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
  background-color: #c1eae6;
}

.intro-box .intro {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.5rem;
}

.intro-box .intro h1 {
  font-size: 3rem;
  color: #7c471d;
}

.intro-box .intro p {
  font-size: 1rem;
  color: #876345;
}

.charlie-dance {
  width: 128px;
  height: 128px;
}
</style>
