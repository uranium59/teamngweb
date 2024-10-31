<script setup lang="jsx">
defineProps({
  title: String,
  desc: String,
})
</script>

<template>
  <div class="card-root">
    <v-card class="recent-card">
      <v-card-title>
        {{ title }}
      </v-card-title>
      <v-card-item>
        <div>
          {{ desc }}
        </div>
      </v-card-item>
    </v-card>
  </div>  
</template>
<style scoped>
.recent-card {
  max-width: 300px;
  min-height: 240px;
}
</style>