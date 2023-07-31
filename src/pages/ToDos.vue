<template>
  <q-page class="q-pa-xl">
    <div class="text-h2 q-pb-md">Todo</div>
    <q-input
    v-model="newItem" type="text"
    label="Add Item"
    @keydown.enter="onInputSubmit"
    counter :rules="inputRules" lazy-rules
    ref="newItemInput">
      <template v-slot:after>
        <q-btn flat round icon="add" @click="onInputSubmit" />
      </template>
    </q-input>

    <q-list separator  class="q-mt-md ">
      <q-item clickable v-ripple v-for="(item) in items" :key="item.id" class="q-px-none">
        <q-item-section>{{ item.name }}
          <q-popup-edit v-model="item.name" v-slot="scope" :validate="validate" >
        <q-input v-model="scope.value" dense autofocus counter :error="error"   :error-message="errMsg" @keyup.enter="scope.set" @hide="validate" >
        <template v-slot:append>
          <q-btn flat round icon="edit" @click="scope.set" />
            </template>
        </q-input>
      </q-popup-edit>
        </q-item-section>
        <q-item-section avatar>
          <q-btn flat round color="primary" icon="delete" @click="delItem(item.id)" />
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import { useListStore } from '../stores/todo'
import { storeToRefs } from 'pinia'

const list = useListStore()
const { addItem, delItem } = list
const { items } = storeToRefs(list)
const newItem = ref('')
const newItemInput = ref(null)
const error = ref(false)
const errMsg = ref('')

const onInputSubmit = async () => {
  const validate = await newItemInput.value.validate()
  if (validate && newItem.value !== '') {
    addItem(newItem.value)
    newItem.value = ''
  }
}
const inputRules = [
  val => (val.length > 2 || val.length === 0) || '* Minimum 3 characters required'
]
const validate = val => {
  if (val.length > 2) {
    error.value = false
    errMsg.value = ''
    return true
  }
  error.value = true
  errMsg.value = '* Minimum 3 characters required'
  return false
}
</script>
