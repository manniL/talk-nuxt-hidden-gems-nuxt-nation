---
theme: ./theme
title: "Nuxt's Hidden Treasures"
website: lichter.io
handle: TheAlexLichter
favicon: https://lichter.io/img/me@2x.jpg
highlighter: shiki
lineNumbers: true
layout: intro
transition: fade
---

# <logos-nuxt-icon class="text-6xl" aria-label="Nuxt's" /> Hidden Treasures

## <span class="text-[#80eec0]">8 Gems</span> Every Nuxt Developer <span class="text-[#00dc82]">Should Know</span>!

### Nuxt Nation 2023

<style>
  h1 {
    @apply !text-5xl;
  }

  h2 {
    @apply !text-3xl !mt-16 !mb-32;
  }

  h3 {
    @apply !text-base;
  }
</style>

---

<img class="mx-auto" src="https://i.giphy.com/f7wHfpF6xpYG986HN5.gif"/>

---
layout: two-cols
heading: About me
---

<template v-slot:default>
<div class="flex flex-col justify-center items-center h-full">
<img
  class="w-75 rounded-full"
  src="https://lichter.io/img/me@2x.webp"
  />
  <h2 class="mt-4">Alexander Lichter</h2>
</div>
</template>

<template v-slot:right>
<VClicks class="space-y-2 mt-10 text-xl h-full">

* <mdi-account-check class="text-green-100" /> **Web Engineering Consultant**
* <mdi-microphone /> Speaker & Instructor
* <logos-nuxt-icon /> Nuxt.js Team
* <mdi-twitter class="text-blue-400" /><mdi-youtube class="text-red-500" /><mdi-twitch class="text-purple-700" /> @TheAlexLichter
* <mdi-web /> [https://lichter.io](https://lichter.io)
* <mdi-github /> [manniL](https://github.com/manniL)

</VClicks>
</template>

---

# Categories

<VClicks class="space-y-4 mt-16">

* Delightful Debugging
* Crisp Code Cleanup
* Promising Performance Patches
* Outstanding Opportunities

</VClicks>

---

# Delightful Debugging

<img src="https://media0.giphy.com/media/3oz8xA07HKwLlpPUkM/giphy.gif?cid=ecf05e470srgu5ps5pvhfeb6uyz18wb7ov43ymmgmataf142&ep=v1_gifs_search&rid=giphy.gif&ct=g" class="h-80 mx-auto" alt="Debugging">

---

# `window.useNuxtApp()`

Delightful Debugging

<VClicks>

* In Nuxt 2, we had `window.$nuxt` (or a similar version when `$nuxt` was renamed)
* In Nuxt 3, we have `__unctx__.get('nuxt-app').use()`
* Or now better: `window.useNuxtApp()`

</VClicks>

<br>

<h2 v-click class="text-center mt-8">Is this a security risk!?</h2>

<h1 v-click class="text-center mt-8 underline">No!</h1>

---

# Figuring out what is server-rendered

Delightful Debugging

<VClicks>

* When using SSR (doesn't matter if SSG, dynamic SSR or similar), you might want to know if it works as expected
* ` window.__NUXT__.serverRendered` gives a great indication
* But more importantly: You might want to know *what part of the site is server-rendered*
* `view-source` to the rescue!
* Let's go to [`https://dicsord.com/`](https://dicsord.com/) and check it!

</VClicks>

---
layout: intro
---

# Thanks a lot to my sponsors!
<img src="https://raw.githubusercontent.com/manniL/static/main/sponsors.svg" class="h-80 mx-auto" alt="My GitHub sponsors">

---
layout: two-cols
heading: Thank you for your attention!
---

<template v-slot:default>
<div class="flex flex-col justify-center items-center h-full">
<img
  class="w-75 rounded-full"
  src="https://lichter.io/img/me@2x.webp"
  />
  <h2 class="mt-4">Alexander Lichter</h2>
</div>
</template>

<template v-slot:right>

* <mdi-account-check class="text-green-100" /> **Web Engineering Consultant**
* <mdi-microphone /> Speaker & Instructor
* <logos-nuxt-icon /> Nuxt.js Team
* <mdi-twitter class="text-blue-400" /><mdi-youtube class="text-red-500" /><mdi-twitch class="text-purple-700" /> @TheAlexLichter
* <mdi-web /> [https://lichter.io](https://lichter.io)
* <mdi-github /> [manniL](https://github.com/manniL)

</template>

<style>
  ul {
    @apply space-y-2 mt-10 text-xl h-full;
  }
</style>

---
layout: intro
hideLogoInCorner: true
---

# Slides / Repo

* Slides: [https://lichter.link/nn-23/](https://lichter.link/nn-23/)

<div class="flex mx-32 justify-around">

<img class="w-32 h-32 mt-16 mx-auto" src="https://raw.githubusercontent.com/manniL/static/main/logo-lightbulb-white-red.svg" />

</div>

<style>
  ul {
    @apply list-none!;
  }
</style>
