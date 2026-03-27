<template>
  <div class="flex flex-col items-center justify-center text-center flex-grow py-10">
    <div class="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    </div>
    
    <span class="text-sm font-medium text-slate-500 uppercase tracking-widest mb-2">Assessment Results</span>
    <h2 class="text-3xl font-extrabold text-slate-800 mb-8 max-w-lg leading-tight">{{ reslult }}</h2>
    
    <div class="bg-indigo-50 border border-indigo-100 rounded-xl p-6 mb-10 w-full max-w-md">
      <p class="text-sm text-indigo-900 leading-relaxed text-left">
        <strong>Remember:</strong> This assessment is not a diagnostic tool. If you have concerns about these results, please consult with a qualified healthcare professional.
      </p>
    </div>

    <button 
      @click="backToHomePage" 
      class="inline-flex items-center justify-center px-8 py-3.5 border border-slate-300 text-base font-medium rounded-xl text-slate-700 bg-white hover:bg-slate-50 transition-colors duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 -ml-1 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
      Retake Assessment
    </button>
  </div>
</template>

<script setup>
import { useAdhd } from '@/stores/counter';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
import adhdData from '../../data/adhd_data.json'
import { onMounted, ref, computed } from 'vue';


const store = useAdhd()
const { totalScore} = storeToRefs(store)
const { $reset} = store
const router = useRouter()

function reslultFunc(score){
    // `score` is passed as a value, so don't use `.value` here
    if (score < 20) {
        return "Low likelihood of ADHD"
    } else if (score < 40) {
        return "Moderate likelihood of ADHD"
    } else {
        return "High likelihood of ADHD"
    }
}

// Ensure the result updates reactively based on the changing `totalScore` state
const reslult = computed(() => {
    // Return early if totalScore is undefined (e.g. fewer than 20 questions answered)
    if (totalScore.value === undefined) {
        return "Please finish all questions to see the result."
    }
    return reslultFunc(totalScore.value)
})



function backToHomePage() {
    $reset
    router.push('/')
}
</script>