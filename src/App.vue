<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <header class="bg-white shadow-sm border-b border-slate-200 sticky top-0 z-10">
      <div class="max-w-3xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-center">
        <h1 class="text-xl font-semibold text-indigo-700 tracking-tight flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          ADHD Finder
        </h1>
      </div>
    </header>

    <main class="flex-grow w-full max-w-3xl mx-auto p-4 sm:p-6 lg:p-8 flex flex-col">
      <div class="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 sm:p-10 flex-grow flex flex-col">
        <RouterView />
      </div>
    </main>
    
    <footer class="py-6 text-center text-sm text-slate-400">
      <p>This assessment is for informational purposes only and is not a clinical diagnosis.</p>
    </footer>
  </div>
</template>

<style scoped>

</style>
