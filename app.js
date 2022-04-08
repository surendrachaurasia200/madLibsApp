"use strict"

let numberofQuestions = 3;
let questionCounter=0;

let questionArray = ["Enter a Adjective", "Enter a verb not ending in -ing", "Enter a noun"];
let userInputs = [];

for (let i=numberofQuestions; i>0; i--){
    /*console.log(questionCounter);
    console.log(i); */
    console.log(questionArray[questionCounter] + `...(${numberofQuestions} questions left)`);
    
    userInputs.push(
        prompt(questionArray[questionCounter] + `... (${numberofQuestions} questions left)`));
        
    console.log(userInputs);
    questionCounter +=1;
    numberofQuestions -=1;
}

let originalStory = `There once was a ${userInputs[0]} programmer who wanted to use JavaScript to ${userInputs[1]} the ${userInputs[2]}.`;

alert(
    "All done! Ready for your totally-accurate, not-at-all confusing mad libs??"
  );

console.log(originalStory);

document.write(originalStory);

/* There once was a ${userInputs[0]} programmer who wanted to use JavaScript to ${userInputs[1]} the ${userInputs[2]}. */