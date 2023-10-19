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

<img src="https://media0.giphy.com/media/3oz8xA07HKwLlpPUkM/giphy.gif" class="h-80 mx-auto" alt="Debugging">

---

# `window.useNuxtApp()`

Delightful Debugging

<VClicks>

* In Nuxt 2, we had `window.$nuxt` (or a similar version when `$nuxt` was renamed)
* In Nuxt 3, we have `__unctx__.get('nuxt-app').use()`
* Or now better: `window.useNuxtApp()`

</VClicks>

---

# `window.useNuxtApp()` - Security issues?!

Delightful Debugging


<img src="nuxt-console-issue-4720.png" class="h-24 mt-16">

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

# Crisp Code Cleanup

<img src="https://media0.giphy.com/media/5t1YusAYxmRn474Sid/giphy.gif" class="h-80 mx-auto">

---

# Custom auto Imports

Crisp Code Cleanup

<VClicks depth="2">

* With Nuxt, you can auto import composables, components and utils
* You can **customize** these auto imports, e.g. to:
  * Import components from other folders/with other prefixes
  * Import content from TS/JS files from different directories automatically
  * Import exports from packages automatically
* How? With the help of [unimport](https://github.com/unjs/unimport) in Nuxt
* In-depth explanation of this feature in [this video <logos-youtube-icon />](https://www.youtube.com/watch?v=FT2LQJ2NvVI)

</VClicks>

---

# Live coding!

---

# Custom Auto Imports - Example

Also in the GitHub repository (live coding)

<Code file="nuxt.config.ts">

```ts
export default defineNuxtConfig({
  imports: {
    dirs: ['./constants'],
    presets: [
      {
        from: 'date-fns/addDays',
        imports: [
          { name: 'default', as: 'addDays' }
        ]
      }
    ]
  },
  hooks: {
    "components:dirs": (dirs) => {
      dirs.push({ path: '~/app-components', prefix: 'App'})
    }
  }
})
```

</Code>

---

# Typed Pages

Crisp Code Cleanup

<VClicks>

* When using TypeScript, you can now infer the routes of your applications!
* Works for `<NuxtLink>`, `navigateTo` and `router.push`
* `const route = useRoute('route-name')` will give you typed parameters too 🎉

</VClicks>

<Code v-click file="nuxt.config.ts">

```ts
export defineNuxtConfig({
  experimental: {
    typedPages: true
  }
})
```

</Code>

---

# Bonus content

Crisp Code Cleanup


<VClicks>

* Remember `shamefully-hoist` when using PNPM?
* You don't need it anymore! 🎉
* Just make sure to install vue and vue router dependencies *along* Nuxt
* Also, some modules *might* need an update for that 
* This should happen very quickly though

</VClicks>

<Code v-click file="package.json">

```json
{
  "dependencies": {
    "nuxt": "^3.8.0",
    "vue": "^3.3.4",
    "vue-router": "^4.2.5"
  }
}
```

</Code>

---

# Promising Performance Patches

---

# `getCachedData` 

Promising Performance Patches

<VClicks>

* This landed in Nuxt 3.8.0
* It allows you to avoid re-fetches of data on the client-side
* You can define a `getCachedData` function in your `useFetch` or `useAsyncData` composables
* It can return cached data *or* nullish value
* The latter will trigger a fetch of the data

</VClicks>

---

# `getCachedData` - Example

Promising Performance Patches

<Code file="some-page.vue">

```vue	
<script setup lang="ts">
  const nuxtApp = useNuxtApp()
  const { data } = await useFetch<any>('https://icanhazdadjoke.com/', {
    headers: { Accept: 'application/json' },
    getCachedData: key => nuxtApp.payload.data[key] || nuxtApp.static.data[key]
  })
</script>

<template>
  <div>
    {{ data.joke }}
  </div>
</template>
```

</Code>

---

# `nuxi analyze`

Promising Performance Patches

<VClicks depth="2">

* Was mentioned before during the panel already.
* This command is super helpful to analyze your Nuxt bundle
* Find out about:
  * Non-treeshakeable dependencies
  * Which code is chunked how
  * What is actually bundled

</VClicks>

<VClicks>

`pnpm nuxi analyze` is all you need!

</VClicks>

---

# `nuxi analyze` - Example

Promising Performance Patches


<img src="/nuxi-analyze.png" class="h-94 mx-auto">

---

# Outstanding Opportunities

<img src="https://media1.giphy.com/media/yX6mS3ScZGbDJSb6Iz/giphy.gif" class="h-80 mx-auto">

---

# Environment-specific configuration

Outstanding Opportunities

<VClicks>

* Ever wanted to change your `nuxt.config.ts` based on the environment?
* e.g. only add certain modules or settings in dev mode but **not in production**
* What if...

</VClicks>

<Code v-click file="nuxt.config.ts">

```ts
export default defineNuxtConfig({
  // your default settings
  modules: ['@nuxt/content'],
})
```

</Code>

---

# Environment-specific configuration

Outstanding Opportunities

* Ever wanted to change your `nuxt.config.ts` based on the environment?
* e.g. only add certain modules or settings in dev mode but **not in production**
* What if...

<Code file="nuxt.config.ts">

```ts {all|4-10}
export default defineNuxtConfig({
  // your default settings
  modules: ['@nuxt/content'],
  // The magic happens here
  $development: {
    // Your additional settings (merged with default) for dev
    app: {
      baseURL: 'my-prod-url'
    }
  }
})
```

</Code>

---

# Environment-specific configuration

Outstanding Opportunities

* Thanks to [`c12`](https://github.com/unjs/c12), this is possible!

<VClicks depth="2">

* Useful for quite some scenarios
* Change settings for your test scenarios, e.g. point your baseUrl to the nitro API
  * Then mock the APIs via `nuxt-vitest` and check if it works as expected
* Provide different settings for different environments in general
* Ensure internal proxies/redirects don't leak into prod
* And so on...

</VClicks>

---
layout: intro
---

# 🤯🤯🤯

---

# Hooks

Outstanding Opportunities

---

# Nuxt and Nitro Hooks

Outstanding Opportunities

<VClicks>

* Change the behavior of the framework itself
* Add your own logic "in between"
* Hooks are available for Nuxt and Nitro, at build-time and at runtime
* And you can even create your **own hooks** and call them
* All hooks for Nuxt and Nitro can be found [in the docs](https://nuxt.com/docs/api/advanced/hooks#app-hooks-runtime)! 🎉

</VClicks>

---

# Nitro Hook Example

Outstanding Opportunities

<Code file="server/plugins/error-tracking.ts">

```ts {all|3-7|9-12|14-16|all}
export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('error', (error) => {
    // Receive any kind of error here and deal with it
    // For example send them to an error tracking service like Sentry
    Sentry.captureException(error)
  })

  // Extend Nitro's context (don't forget to augment the types though)
  nitroApp.hooks.hook('request', (event) => {
    event.context.$sentry = Sentry
  })

  nitroApp.hooks.hookOnce('close', () => Sentry.close(2000))
})
```

</Code>

[Source (^shortened for the sake of brevity)](https://github.com/manniL/nuxt3-sentry-recipe/)

---
layout: two-cols
heading: Summary
clicks: 11
---

<template v-slot:default>

<VClicks depth="2">

* There are way more than just 8 Nuxt gems around
* But these are the ones that are
  * not as well-know among many devs
  * helpful in your upcoming projects
  * worth to know

</VClicks>

<VClicks depth="2" at="6">

* PS: If you want to learn about more secret gems...
  * Or performance optimizations...
  * Or in more about Nuxt/UnJS in general...
  * Check out the weekly releases on my [channel <logos-youtube-icon />](https://www.youtube.com/@AlexanderLichter)
* [https://www.youtube.com/@AlexanderLichter](https://www.youtube.com/@AlexanderLichter)

</VClicks>

</template>

<template v-slot:right>

<img v-click="6" src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMXo4MGZqM2hmNWtseGU2cjhyNGJ4MGx1Z2V5MmU4cnF4cXE4Z3l0NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/vrKXW5ICIdx9PMG5x6/giphy.gif" class="h-80 mx-auto">

</template>

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

<img class="w-32 h-32 mt-16 mx-auto" src="https://www.lichter.io/img/logo/glyph-and-word-white-colored.svg" />

</div>

<style>
  ul {
    @apply list-none!;
  }
</style>
