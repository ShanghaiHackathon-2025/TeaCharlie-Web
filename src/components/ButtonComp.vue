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
  background-color: #edab75;
  border: 0.2rem solid #7c471d;
  color: #7c471d;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  padding: 0.5rem 1rem;
}

.button-comp a {
  width: 100%;
  height: 100%;
  display: block;

}

.button-comp a:hover {
  text-decoration: none;
  border: 3px solid #ffffff00;
}
</style>
