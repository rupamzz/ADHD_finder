import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'
import adhdData from '../../data/adhd_data.json'

export const useAdhd = defineStore('adhd', () => {
  const questions = reactive(adhdData.questions)
  const currentQuestionIndex = ref(0)
  const answers = reactive({})

  const currentQuestion = computed(() => questions[currentQuestionIndex.value])
  const isLastQuestion = computed(() => currentQuestionIndex.value === questions.length - 1)
  const totalScore = computed(() => {
    if (Object.keys(answers).length === 20) {
     return Object.values(answers).reduce((sum, num) => sum + num, 0)
    }
    // Return undefined or a safe fallback when all are not answered
    return undefined
  })

  function setAnswer(questionID, score) {
    answers[questionID] = score
  }
  function nextQuestion() {
    currentQuestionIndex.value++
  }
  function prevQuestion() {
    if (currentQuestionIndex > 0) {
      currentQuestionIndex.value--
    }
  }

  function $reset() {
    currentQuestionIndex.value = 0
    answers = {}
  }

  return {
    questions,
    answers,
    currentQuestion,
    isLastQuestion,
    totalScore,
    setAnswer,
    nextQuestion,
    prevQuestion,
    $reset,
  }
})
