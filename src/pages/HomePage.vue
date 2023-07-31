<template>
  <q-page class="q-pa-xl flex flex-center">
    <img src="https://tomaful.com/dist/img/index/hull.svg" class="absolute" style="top: 24px;">
    <div class="row text-white flex-center q-pa-xl q-mt-xl" :style=bgc>
      <div class="col-12 text-center">
        <h1>{{ currentText }}</h1>
        <h2>{{ currentTime }}</h2>
        <q-btn outline round size="lg" icon="play_arrow" v-if="status !== STATUS.COUNTING" @click="startTimer"
          class="q-ma-md" />
        <q-btn outline round size="lg" icon="pause" v-if="status === STATUS.COUNTING" @click="pauseTimer"
          class="q-ma-md" />
        <q-btn outline round size="lg" icon="skip_next" v-if="currentItem.length > 0" @click="finishTimer"
          class="q-ma-md" />
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { useListStore } from 'stores/todo'
import { storeToRefs } from 'pinia'
import { useSettingsStore } from 'stores/settings'
import { ref, computed } from 'vue'

const list = useListStore()
const { items, currentItem, timeLeft } = storeToRefs(list)
const { countdown, setCurrentItem, setFinishItem } = list

const settings = useSettingsStore()
const { selectedAlarmFile } = storeToRefs(settings)

const STATUS = {
  STOP: 0,
  COUNTING: 1,
  PAUSE: 2
}
const status = ref(STATUS.STOP)

// 倒數計時器
let timer = 0

const startTimer = () => {
  if (status.value === STATUS.STOP && items.value.length > 0) {
    setCurrentItem()
  }

  if (currentItem.value.length === 0) return

  status.value = STATUS.COUNTING
  timer = setInterval(() => {
    countdown()
    if (timeLeft.value === 0) {
      finishTimer()
    }
  }, 1000)
}

const pauseTimer = () => {
  status.value = STATUS.PAUSE
  clearInterval(timer)
}

const finishTimer = () => {
  clearInterval(timer)
  status.value = STATUS.STOP

  const audio = new Audio()
  audio.src = selectedAlarmFile.value
  audio.play()

  setFinishItem()

  if (items.value.length > 0) {
    startTimer()
  }
}

const currentText = computed(() => {
  return currentItem.value.length > 0 ? currentItem.value : items.value.length > 0 ? 'Press Start' : 'No Task Left'
})

const currentTime = computed(() => {
  const m = Math.floor(timeLeft.value / 60).toString().padStart(2, '0')
  const s = (timeLeft.value % 60).toString().padStart(2, '0')
  return m + ':' + s
})

const bgc = computed(() => {
  const styleA = `
  height: 70vh;
  width: 70vh;
  border-radius:50%;
  background-color:#cc3736;
  `
  const styleB = `
  height: 70vh;
  width: 70vh;
  border-radius:50%;
  background-color:#f9bf45;
  `
  return currentItem.value.length > 0 ? styleA : styleB
})
</script>
