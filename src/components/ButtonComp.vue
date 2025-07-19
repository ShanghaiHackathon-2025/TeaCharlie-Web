<template>
  <div class="button-comp" @click="handleClick">
    <a
      v-if="isExternalLink"
      :href="to"
      class="link"
      target="_blank"
      rel="noopener noreferrer"
      @click.stop
    >
      <slot />
    </a>
    <router-link v-else-if="to" :to="to" class="link" @click.stop>
      <slot />
    </router-link>
    <slot v-else />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps<{
  to?: string
  onClick?: (event: MouseEvent) => void
}>()

const isExternalLink = computed(() => !!props.to && /^(https?:)?\/\//.test(props.to))

const handleClick = (event: MouseEvent) => {
  props.onClick?.(event)
}
</script>
<style lang="css" scoped>
.button-comp {
  background-color: #6dff727d;
  border: 4px ridge #4CAF50;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
}

.button-comp a {
  width: 100%;
  height: 100%;
  display: block;
   color: white;
  text-align: center;
  text-decoration: none;
}

.button-comp a:hover {
  text-decoration: none;
  border: 3px solid #ffffff00;
}
</style>
