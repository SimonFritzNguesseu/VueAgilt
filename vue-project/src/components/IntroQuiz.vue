<template>
  <div>
    <h1>Welcome to the intro quiz</h1>
    <br /><br />
    <h2>{{ questions[currentQuestion].question }}</h2>
    <ul>
      <!-- <li
        v-for="(option, index) in questions[currentQuestion].options"
        :key="index"
        name="radAnswer"
        value="radAnswer"
      > -->
      <label>
        <input
          name="my_options"
          v-for="(option, index) in questions.options"
          type="radio"
          :key="index"
          :id="index"
          v-model="selectedOption"
        />
        {{ questions[currentQuestion].options }}
      </label>
    </ul>
    <!-- <button @click="checkAnswer">Submit</button> -->
    <!-- :style... Changes the color so that Correct displays in green and Incorrect in red -->
    <!-- <p v-if="answerMessage" :style="{ color: answerMessage === 'Correct!' ? 'green' : 'red' }">{{ answerMessage }}</p> -->
    <!-- Supposed to render the score after quiz completion, still working on this -->
    <!-- <p v-if="quizCompleted">Your score: {{ score }}</p> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      questions: [
        {
          question: "1. Who was the first person in space?",
          options: [
            "Neil Armstrong",
            "Pavel Popovich",
            "Yuri Gagarin",
            "Alan Shepard",
          ],
          answer: "Yuri Gagarin",
        },
        {
          question: "2. Who was the first person on the moon?",
          options: [
            "Yuri Gagarin",
            "Buzz Aldrin",
            "Neil Armstrong",
            "Gherman Titov",
          ],
          answer: "Neil Armstrong",
        },
        {
          question:
            "3. How fast does a rocket need to travel to get into orbit around earth?",
          options: ["28319 km/h", "14273 km/h", "31476 km/h", "18454 km/h"],
          answer: "28319 km/h",
        },
        {
          question: "4. Which one of these is not a planet?",
          options: ["Jupiter", "Saturn", "Pluto", "Uranus"],
          answer: "Pluto",
        },
        {
          question: "5. What is the temperature approxitmately in space?",
          options: [
            "-50 celsius",
            "-270 celsius",
            "-105 celsius",
            "-147 celsius",
          ],
          answer: "-270 celsius",
        },
        // More questions can be added here
      ],
      currentQuestion: 0,
      selectedOption: "",
      score: 0,
      answerMessage: "",
    };
  },

  methods: {
    checkAnswer() {
      console.log("Tjenare");
    },
  },
};
</script>
