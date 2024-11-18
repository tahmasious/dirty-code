<script setup lang="ts">
import type { VTextField } from 'vuetify/components'
import { ref } from 'vue'

const inputRef = ref()
const slots = defineSlots<VTextField['$slots']>()
</script>

<template>
  <v-text-field class="rounded-pill" hide-spin-buttons v-bind="$attrs" ref="inputRef">
    <template v-for="(_, slotName) in slots" #[slotName]="slotData">
      <slot :name="slotName" v-bind="slotData as any" />
    </template>
  </v-text-field>
</template>

<style scoped></style>
