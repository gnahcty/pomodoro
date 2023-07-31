<template>
  <q-page class="q-pa-xl">
    <q-markup-table separator="horizontal" flat bordered>
      <thead>
        <tr>
          <th class="text-left">Ringtones</th>
          <th></th>
          <th><q-toggle v-model="notify" /></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="alarm in alarms" :key="alarm.id">
          <td class="text-left">{{ alarm.name }}</td>
          <td class="text-center fit"><audio :src="alarm.file" controls></audio></td>
          <td class="text-right">
            <q-radio v-model="selectedAlarm" :val="alarm.id" />
          </td>
        </tr>
      </tbody>
    </q-markup-table>
  </q-page>
</template>

<script setup>
import { useSettingsStore } from 'stores/settings'
import { storeToRefs } from 'pinia'
const settings = useSettingsStore()
const { selectedAlarm, alarms, notify } = storeToRefs(settings)
</script>
