<template>
<div v-if="questions">

  <h2>{{ currentQuestion.question }}</h2>

  <div v-for="option in currentQuestion.options" :key="option.text">
      <label>
        <input 
          type="radio" 
          :name="'question-' + currentQuestion.id"
          :value="option.score"
          v-model="answers[currentQuestion.id]"
        >
        {{ option.text }}
      </label>
    </div>

    <div>
      <button @click="prevQuestion"> < Previous </button>
      <button 
      @click="handleNext" 
      :disabled="answers[currentQuestion.id] === undefined"
    >
      {{ store.isLastQuestion ? 'See Results' : 'Next' }} >
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