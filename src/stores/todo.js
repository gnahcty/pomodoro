import { defineStore } from 'pinia'

const time = parseInt(import.meta.env.VITE_TIME)
const timeBreak = parseInt(import.meta.env.VITE_TIME_BREAK)

export const useListStore = defineStore('list', {
  state: () => ({
    items: [],
    currentItem: '',
    finishedItems: [],
    id: 1,
    timeLeft: time,
    break: false
  }),
  actions: {
    addItem (name) {
      this.items.push({
        id: this.id++,
        name
      })
    },
    delItem (id) {
      const i = this.items.findIndex(item => item.id === id)
      if (i < 0) return
      this.items.splice(i, 1)
    },
    setCurrentItem () {
      // this.currentItem = this.items[0].name
      // this.items.splice(0, 1)
      this.currentItem = this.break ? 'Take a Break' : this.items.shift().name
    },
    countdown () {
      this.timeLeft--
    },
    setFinishItem () {
      if (!this.break) {
        this.finishedItems.push({
          name: this.currentItem,
          id: this.id++
        })
      }
      this.currentItem = ''
      if (this.items.length > 0) {
        this.break = !this.break
      }
      this.timeLeft = this.break ? timeBreak : time
    },
    delFinishedItem (id) {
      const i = this.finishedItems.findIndex(item => item.id === id)
      if (i < 0) return
      this.finishedItems.splice(i, 1)
    }
  },
  persist: {
    key: 'pomodoro-list'
  }
})
