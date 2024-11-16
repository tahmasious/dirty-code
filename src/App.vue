<script setup lang="ts"></script>

<template>
  <Transition>
    <router-view v-slot="{ Component }">
      <Transition name="main-layout" mode="out-in">
        <component :is="Component" class="app-page flex" />
      </Transition>
    </router-view>
  </Transition>
</template>

<style>
.main-layout-enter-active,
.main-layout-leave-active {
  transition: 0.3s;
  transform: translateY(0);
}

.main-layout-enter-from,
.main-layout-leave-to {
  transform: translateY(80px);
  opacity: 0;
}
</style>
