<script setup>
import RecentCard from '@/components/RecentCard.vue'
import RecentDevlog from '@/components/RecentDevlog.vue'
import {useI18n} from 'vue-i18n'
const {tm} = useI18n();
const recentList = tm("index.recent.articles");
const devlogList = tm("index.devlog.articles");
const onclickDiscord = () => {
  window.open('https://discord.com/invite/HSMprf8WFR', '_blank')
}
const onclickXTwitter = () => {
  window.open('https://x.com/Teamngdev', '_blank')
}
</script>

<template>
  <main>
    <div id="top_image">
      <img src="/src/assets/img/TitleImage.jpg" />
      <div class="top_image_releasedate">
        {{ $t('index.topimage.releasedate') }}
      </div>
      <img class="top_image_overlay" src="/src/assets/img/gametextlogo.png" />
    </div>
    <div id="recent">
      <div class="index-title">
        {{  $t('index.recent.title') }}
      </div>
      <div class="recent-grid">
        <RecentCard
          v-for="(c, i) in recentList"
          :key="i"
          :title="c.title"
          :desc="c.desc"
        >
        </RecentCard>
      </div>
    </div>
    <div id="devlog">
      <div class="index-title">
        {{  $t('index.devlog.title') }}
      </div>
      <div class="devlog-grid">
        <RecentDevlog
          v-for="(c, i) in devlogList"
          :key="i"
          :title="c.title"
          :link="c.link"
        >
        </RecentDevlog>
      </div>
    </div>
    <div id="contact">
      <div class="index-title">
        {{  $t('index.contact.title') }}
      </div>
      <div class="contact-link-group">
        <v-icon size="x-large" class="contact-icon ma-2" color="white" icon="fab fa-x-twitter" @click="onclickXTwitter()"/>
        <v-icon size="x-large" class="contact-icon ma-2" color="white" icon="fab fa-discord" @click="onclickDiscord()"/>
        <v-icon size="x-large" class="contact-icon ma-2" color="grey" icon="fab fa-steam" />
      </div>
      <div class="contact-email">
        <p>Email : teamnggamedev@gmail.com</p>
        <p>{{ $t('index.contact.text1') }}</p>
      </div>
    </div>
  </main>
</template>

<style scoped>
img {
  width: 100%;
}
#top_image{
  position: relative;
}
.top_image_releasedate{
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-size: 5.5vh;
  color: white;
  text-shadow: #222 3px 1.5px 5px;

  overflow: hidden;
  white-space: nowrap;
}
.top_image_overlay {
  position: absolute;
  top: 0%;
  right: 5%;
  min-width: 200px;
  width: 35vw;
}
.index-title {
  font-size: 3em;
  text-align: left !important; 
  margin: 32px 0;
  color: #eee;
}
.recent-grid {
  display: flex;
}
.devlog-grid {
  display: flex;
}
#contact{
  position: relative;
  display: flex;
  align-items: left;
  justify-content: center;
  min-height: 360px;
  color: #eeeeee;
  flex-direction: column;
}
.contact-link-group{
  display: flex;
  min-width: 320px;
  max-width: 500px;
  margin: 32px auto 48px;
  align-items: center;
  justify-content: space-evenly;
}
.contact-icon{
  width: 40px;
  height: 40px;
}
.contact-email{
  width: 100%;
  text-align: center;
  margin: 40px 0;
}
</style>