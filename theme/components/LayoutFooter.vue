<template>
  <footer class="flex flex-col justify-between w-full mt-auto text-blue-500 dark:text-white">
    <div class="flex justify-between w-full text-blue-500 dark:text-white">
      <a :href="website || $slidev.configs.website" class="border-b-0!">
        <img v-show="!hideLogoInCorner && !$slidev.configs.hideLogoInCorner" class="w-10 h-10" src="https://raw.githubusercontent.com/manniL/static/main/logo-lightbulb-white-red.svg" />
      </a>
      <span>{{ $slidev.nav.currentPage }}</span>
    </div>
  </footer>
</template>

<script setup lang="ts">

defineProps({
  website: {
    type: String,
  },
  hideLogoInCorner: {
    type: Boolean
  }
})

</script>