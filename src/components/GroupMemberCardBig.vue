<template>
  <div class="big-card">
    <button class="close-button" @click="close">×</button>
    <div class="big-card-content">
      <div class="big-card-header" :class="{ 'no-divider': !member.Desc }">
        <h2>{{ member.Name }}</h2>
        <h3>{{ member.Title }}</h3>
        <p>{{ member.Bio }}</p>
      </div>
      <div class="big-card-body" v-if="member.Desc">
        <p>{{ member.Desc }}</p>
      </div>
      <div class="big-card-avatar" v-if="member.Avatar">
        <img :src="member.Avatar" :alt="member.Name" />
      </div>
      <div class="big-card-link" v-if="member.Link">
        <button @click="openLink">{{ isGithubLink(member.Link) ? '访问GitHub' : '访问网站' }}</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  member: {
    Name: string
    Title: string
    Avatar?: string
    Bio: string
    Desc?: string
    Link?: string
  }
}>()

const emit = defineEmits(['close'])

const close = () => {
  emit('close')
}

const isGithubLink = (url?: string) => {
  return url?.includes('github.com')
}

const openLink = () => {
  if (props.member.Link) {
    window.open(props.member.Link, '_blank')
  }
}
</script>

<style scoped>
.big-card {
  background-color: #edab75;
  border: 1rem ridge #7c471d;
  padding: 2rem;
  max-width: 800px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
}

.close-button {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: #7c471d;
}

.big-card-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.big-card-header {
  border-bottom: 0.3rem ridge #7c471d;
  padding-bottom: 1rem;
}

.big-card-header.no-divider {
  border-bottom: none;
  padding-bottom: 0;
}

.big-card-header h2 {
  font-size: 2.5rem;
  color: #7c471d;
  margin-bottom: 0.5rem;
}

.big-card-header h3 {
  font-size: 1.5rem;
  color: #876345;
  margin-bottom: .8rem;
}

.big-card-header p {
  font-size: 1.2rem;
  color: #876345;
  margin-bottom: 1rem;
}

.big-card-body {
  font-size: 1.2rem;
  color: #3f2007;
  line-height: 1.6;
}

.big-card-avatar img {
  max-width: 200px;
  max-height: 200px;
  border: 0.5rem ridge #7c471d;
}

.big-card-link {
  margin-top: 1.5rem;
  display: flex;
  justify-content: center;
}

.big-card-link button {
  background-color: #7c471d;
  color: white;
  border: 0.3rem ridge #7c471d;
  padding: 0.5rem 1.5rem;
  font-size: 1.2rem;
  cursor: pointer;
  font-family: 'Unifont';
  transition: all 0.2s;
  margin-top: 1rem;
}

.big-card-link button:hover {
  background-color: #5a3515;
  border-color: #5a3515;
}
</style>
