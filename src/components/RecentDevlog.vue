<script setup lang="jsx">
defineProps({
  title: String,
  link: String,
})
</script>

<template>
  <div class="card-root">
    <v-card class="recent-devlog">
      <v-card-title>
        {{ title }}
      </v-card-title>
      <v-card-item>
        <div>
          <blockquote class="twitter-tweet" data-lang="en" width="280px">
            <a :href="link"></a>
          </blockquote>
        </div>
      </v-card-item>
    </v-card>
  </div>  
</template>
<style scoped>
.recent-devlog {
  max-width: 300px;
  min-width: 300px;
  min-height: 240px;
}
</style>