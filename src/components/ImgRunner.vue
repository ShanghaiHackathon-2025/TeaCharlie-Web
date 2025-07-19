<template>
  <div class="charlie-dance">
    <img
      v-if="currentImage"
      :src="currentImage"
      alt="Charlie dance animation"
      :style="{ opacity: imageLoaded? 1 : 0 }"
      @load="onImageLoad"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'

const props = defineProps({
  images: {
    type: Array as () => string[],
    required: true,
    validator: (value: unknown) => {
      return Array.isArray(value) && value.length > 0
    }
  },
  interval: {
    type: Number,
    default: 3000
  }
})

const images = ref(props.images)
const currentIndex = ref(0)
const currentImage = ref(images.value[0])
const imageLoaded = ref(false)
let timer: number

const onImageLoad = () => {
  imageLoaded.value = true
}

watch(images, (newImages) => {
  if (newImages.length > 0) {
    currentIndex.value = 0
    currentImage.value = newImages[0]
    imageLoaded.value = false
  }
})

onMounted(() => {
  if (images.value.length > 0) {
    timer = setInterval(() => {
      imageLoaded.value = false
      currentIndex.value = (currentIndex.value + 1) % images.value.length
      currentImage.value = images.value[currentIndex.value]
    }, Math.max(props.interval, 100))
  }
})

const updateInterval = (newInterval: number) => {
  clearInterval(timer)
  timer = setInterval(() => {
    imageLoaded.value = false
    currentIndex.value = (currentIndex.value + 1) % images.value.length
    currentImage.value = images.value[currentIndex.value]
  }, Math.max(newInterval, 100))
}

onBeforeUnmount(() => {
  clearInterval(timer)
})

defineExpose({
  updateInterval
})
</script>

<style scoped>
.charlie-dance {
  width: 100%;
  height: 100%;
}
.charlie-dance img {
  width: 100%;
  height: 100%;
}
</style>
