<template>
<h2>{{ reslult }}</h2>
<button @click="backToHomePage">Give test again</button>
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