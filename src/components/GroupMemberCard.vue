<template>
  <div
    class="team-card"
    @click="handleClick"
    :data-has-link="member.Link ? '' : null"
  >
    <div class="team-card-header">
      <h2>{{ member.Name }}</h2>
      <h3>{{ member.Title }}</h3>
    </div>
    <div class="team-card-body">
      <p>{{ member.Bio }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  member: {
    Name: string
    Title: string
    Link?: string
    Bio: string
  }
}>()

const emit = defineEmits(['showBigCard'])

const handleClick = () => {
  emit('showBigCard', props.member)
}
</script>

<style scoped>
.team-card {
  background-color: #edab75;
  border: 1rem ridge #7c471d;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 100%;
  position: relative;
  transition: transform 0.2s;
  cursor: pointer;
}

.team-card:hover::after {
  content: '显示详情';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
}

.team-card-header {
  border-bottom: 0.2rem ridge #7c471d;
  padding-bottom: 0.5rem;
}

.team-card-header h2 {
  font-size: 1.8rem;
  color: #7c471d;
}

.team-card-header h3 {
  font-size: 1.2rem;
  color: #876345;
}

.team-card-body p {
  font-size: 1rem;
  color: #876345;
  line-height: 1.5;
}
</style>
