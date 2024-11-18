<script setup lang="ts">
import logo from '~/../public/click.png'
import AppInput from '~/components/AppInput.vue'
import AppButton from '~/components/AppButton.vue'
import { ref } from 'vue'

const visiblePassword = ref(false)
</script>

<template>
  <div class="w-full h-full flex items-center justify-center main-background">
    <div class="w-[500px] h-auto pb-14 glass-background">
      <div class="flex justify-center">
        <v-img :height="250" :src="logo" />
      </div>
      <div class="px-8 text-white">
        <AppInput label="username" />
        <AppInput
          :append-inner-icon="visiblePassword ? 'mdi-eye-off' : 'mdi-eye'"
          label="password"
          :type="visiblePassword ? 'text' : 'password'"
          @click:append-inner="visiblePassword = !visiblePassword"
        />
      </div>
      <div class="flex justify-between px-10">
        <AppButton variant="text"> back </AppButton>
        <AppButton> Login </AppButton>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
