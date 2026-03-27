<template>
  <div v-if="questions" class="flex flex-col h-full max-w-2xl mx-auto w-full py-2">
    
    <div class="mb-8">
      <span class="text-sm font-medium text-indigo-500 mb-2 block tracking-wide uppercase">Question {{ currentQuestion.id }}</span>
      <h2 class="text-2xl sm:text-3xl font-bold text-slate-800 leading-snug">{{ currentQuestion.question }}</h2>
    </div>

    <div class="space-y-3 mb-10 flex-grow">
      <label 
        v-for="option in currentQuestion.options" 
        :key="option.text"
        :class="[
          'relative flex cursor-pointer rounded-xl border p-4 sm:p-5 focus:outline-none transition-all duration-200',
          answers[currentQuestion.id] === option.score 
            ? 'bg-indigo-50 border-indigo-600 ring-1 ring-indigo-600 shadow-sm' 
            : 'border-slate-200 bg-white hover:border-indigo-300 hover:bg-slate-50'
        ]"
      >
        <input 
          type="radio" 
          :name="'question-' + currentQuestion.id"
          :value="option.score"
          v-model="answers[currentQuestion.id]"
          class="h-5 w-5 mt-0.5 cursor-pointer text-indigo-600 border-slate-300 focus:ring-indigo-600 transition-colors"
        >
        <span class="ml-4 flex flex-col justify-center">
          <span 
            :class="[
              'block text-base sm:text-lg font-medium',
              answers[currentQuestion.id] === option.score ? 'text-indigo-900' : 'text-slate-700'
            ]"
          >
            {{ option.text }}
          </span>
        </span>
      </label>
    </div>

    <div class="flex items-center justify-between border-t border-slate-100 pt-6 mt-auto">
      <button 
        @click="prevQuestion"
        :disabled="currentQuestion.id === 1"
        :class="[
          'px-6 py-2.5 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2',
          currentQuestion.id === 1
            ? 'text-slate-400 bg-slate-100 cursor-not-allowed opacity-50'
            : 'text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 focus:ring-slate-500 shadow-sm'
        ]"
      >
        <span class="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1.5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd" />
          </svg>
          Previous
        </span>
      </button>
      
      <button 
        @click="handleNext" 
        :disabled="answers[currentQuestion.id] === undefined"
        :class="[
          'px-8 py-2.5 rounded-lg font-medium shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-offset-2',
          answers[currentQuestion.id] === undefined
            ? 'bg-indigo-300 text-white cursor-not-allowed'
            : 'bg-indigo-600 text-white hover:bg-indigo-700 hover:shadow focus:ring-indigo-500'
        ]"
      >
        <span class="flex items-center">
          {{ store.isLastQuestion ? 'See Results' : 'Next' }}
          <svg v-if="!store.isLastQuestion" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1.5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </span>
      </button>
    </div>

  </div>
</template>

<script setup>
import { useAdhd } from '@/stores/counter';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';

const store = useAdhd()
const {questions, answers, currentQuestion, isLastQuestion, totalScore} = storeToRefs(store)
const {setAnswer, nextQuestion, prevQuestion} = store
const router = useRouter()

const handleNext = () => {
  if (isLastQuestion.value) {
    // Only use the router at the very end to go to a results page
    router.push('/results') 
  } else {
    nextQuestion()
  }
}



</script>