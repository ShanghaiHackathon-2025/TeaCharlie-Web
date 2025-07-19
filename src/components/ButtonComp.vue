<template>
  <div class="button-comp">
    <slot/>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="css" scoped>
.button-comp {
  color: #7c471d;
  background-color: #6dff727d;
  border: 4px ridge #4CAF50;
  color: white;
  padding: 1rem 2rem;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
}
</style>
