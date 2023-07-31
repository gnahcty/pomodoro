<template>
  <q-layout view="hHh lpr lFr">

    <q-header elevated class="text-white" style="background-color: #9f962a;">
      <q-toolbar class="q-my-md">
        <q-toolbar-title>
          <q-avatar>
            <img src="https://tomaful.com/dist/img/index/tomato.svg">
          </q-avatar>
          PomPom
        </q-toolbar-title>
        <q-space />
        <q-btn-toggle v-model="model" flat stretch toggle-color="yellow" :options="options" />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <!-- Component 是目前頁面該顯示的元件 -->
      <router-view v-slot="{ Component }">
        <!-- keep-alive 讓路由切換時不會銷毀元件，用 include 指定只有 Home 不會被銷毀 -->
        <!-- component 動態元件，顯示 is 綁定的元件 -->
        <keep-alive include="Home">
          <component :is="Component"></component>
        </keep-alive>
      </router-view>
    </q-page-container>

  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
const model = ref('Home')

const options = [
  { label: 'Home', value: 'Home', to: '/', icon: 'home' },
  { label: 'Todo', value: 'Todo', to: '/todo', icon: 'playlist_add' },
  { label: 'Settings', value: 'Settings', to: '/settings', icon: 'settings' }
]
</script>
