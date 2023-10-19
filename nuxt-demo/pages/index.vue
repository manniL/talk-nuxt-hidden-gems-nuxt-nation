<script setup lang="ts">
const now = Date.now()
const tomorrow = addDays(now, 1)

const nuxtApp = useNuxtApp()
const { data } = useFetch<any>('https://icanhazdadjoke.com/', {
  headers: {
      Accept: 'application/json'
  },
  getCachedData(key) {
    // Any logic!
    return nuxtApp.payload.data[key] || nuxtApp.static.data[key]
    // return data
    // return a nullish
  },
})
</script>
<template>
  <div>
    {{ data.joke }}
    <NuxtLink to="/about">About</NuxtLink>
  </div>
</template>