<template>
    <div id="app">
      <button class="glow-on-hover" type="button" @click="getY">Make a number</button>     
      <div class="info" id="info">A number up to 100 has been guessed:</div>
      <input v-model="answer" id="answer">
      <button class="glow-on-hover" type="button" @click="checkAnswer">Answer</button>
      <div class="response" v-show="response !== ''">{{ response }}</div>
    </div>
</template>
  
<script>
  export default {
    data() {
      return {
        randomNum: 0,
        answer: 0,
        response: ''
      };
    },
    methods: {
  
      getY(){
        let randNum = this.randomNum = Math.floor(Math.random() * 100) + 1;
        return randNum;
      },
  
      checkAnswer(){
        if( parseInt(this.answer) > parseInt(this.randomNum) ){
          this.response = 'Your number is bigger than the one you made. Try again!'
        }
        else if( parseInt(this.answer) < parseInt(this.randomNum) ){
          this.response = 'Your number is less than the one you made up. Try again!'
        }
        else {
          this.response = 'You guessed the number!'
        } 
      }
  
    }
  };
</script>

<style>
.response {
    margin-top: 20px;
}
.info {
    margin-top: 20px;
    margin-bottom: 10px;
}
.glow-on-hover {
    width: 200px;
    height: 25px;
    border: none;
    outline: none;
    color: #fff;
    background: #111;
    cursor: pointer;
    position: relative;
    z-index: 0;
    border-radius: 10px;
    margin-top: 20px;
}

.glow-on-hover:before {
    content: '';
    background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
    position: absolute;
    top: -2px;
    left:-2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing 20s linear infinite;
    opacity: 0;
    transition: opacity .3s ease-in-out;
    border-radius: 10px;
}

.glow-on-hover:active {
    color: #000
}

.glow-on-hover:active:after {
    background: transparent;
}

.glow-on-hover:hover:before {
    opacity: 1;
}

.glow-on-hover:after {
    z-index: -1;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: #111;
    left: 0;
    top: 0;
    border-radius: 10px;
}

@keyframes glowing {
    0% { background-position: 0 0; }
    50% { background-position: 400% 0; }
    100% { background-position: 0 0; }
}
</style>