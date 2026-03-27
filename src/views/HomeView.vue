<template>
  <div>
    <h4>{{ adhdData.title }}</h4>
    <p>{{ adhdData.description }}</p>
    <RouterLink to="/assessment">Take assessment</RouterLink>

  </div>
</template>

<script setup>
import adhdData from '../../data/adhd_data.json'
</script>