<script setup lang="ts">
import type { VBtn } from 'vuetify/components'
</script>

<template>
  <v-btn
    v-press-scale="0.95"
    class="!h-[50px] !rounded-2xl"
    variant="elevated"
    color="primary"
    v-bind="$attrs"
  >
    <slot />
  </v-btn>
</template>

<style scoped></style>
