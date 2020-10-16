var questionsEl = document.getElementById("question-title");

var choicesEl = document.getElementById("choices");
var currentQuestionIndex = 0;

var questions = [
  {
    title: "An affogato is an Italian dessert of coffee and what ingredient?",
    choices: ["Honey", "Ice Cream", "Almonds", "Ice shavings"],
    answer: "Ice Cream",
  },

  {
    title: "Which is the most expensive spice in the world by weight?",
    choices: ["Cloves", "Cardamom", "Saffron", "Vanilla"],
    answer: "Saffron",
  },
  {
    title:
      "Socarrat’ is the name given to the crusty crispy bottom of which famous Spanish dish?",
    choices: ["Patatas Bravas", "Tortilla", "Croquetas", "Paella"],
    answer: "Paella",
  },
  {
    title:
      "If I’m in Turkey eating layers of filo filled with chopped nuts and honey, what have I ordered?",
    choices: ["Baklava", "Harisseh", "Kanafeh", "Basbousa"],
    answer: "Baklava ",
  },
  {
    title: "Which type of pasta translates as “little worms”? ",
    choices: ["Fusilli", "Vermicelli", "Orecchiette", "Rigatoni"],
    answer: "Vermicelli",
  },
  {
    title: "Morel is a variety of what? ",
    choices: ["Bean", "Pasta", "Mushroom", "Tomato"],
    answer: "Mushroom",
  },
  {
    title: "What ingredient makes a soufflé rise?",
    choices: ["Flour", "Eggs", "Baking Powder", "Baking Soda"],
    answer: "Eggs",
  },
  {
    title:
      "Which Asian fruit has the nickname ‘king of fruits’ and is known for its distinctive smell? ",
    choices: ["Durian", "Mangosteen", "Jackfruit", "Dragonfruit"],
    answer: "Durian",
  },
  {
    title: " What are the two ingredients in a roux?",
    choices: [
      "Eggs and Flour",
      "Flour and Butter",
      "Sugar and Flour",
      "Eggs and Sugar",
    ],
    answer: "Flour and Butter",
  },
  {
    title:
      "If you'd like to order eel at a Japanese restaurant you'd use what word? ",
    choices: ["Unagi", "Maguro", "Uni", "Ikura"],
    answer: "Unagi ",
  },
];

function startQuestion() {
  var currentQuestion = questions[currentQuestionIndex];
  questionsEl.textContent = currentQuestion.title;
  choicesEl.innerHTML = ""; //clears out previous choices

  //starts creating the choices for the first question
  currentQuestion.choices.forEach(function (choice, i) {
    var choicebtn = document.createElement("button"); //button -> <button> </button>
    choicebtn.setAttribute("class", "choice"); // <button class="choice"> </button>
    choicebtn.setAttribute("value", choice); // <button class="choice" value="choice 1"> </button>
    choicebtn.textContent = i + 1 + "." + choice; // <button class="choice" value="choice 1"> 1.  choice 1</button>      where we are in index and applies choices to each button
    choicesEl.appendChild(choicebtn);
  });

  //create a function that will run On click that will check 1. What user pressed w/ event object 2. the current correct anxzswer 3. are tthey equal if yes what next? if no, what next?
}
startQuestion();

document.getElementById("choices").addEventListener("click", clickEvent);
score = 0;
function clickEvent() {
  for (var i = 0; i < questions.length; i++) {
    var answer = questions[i].answer; //confirm(questions[i].title);
    if (
      (answer === true && questions[i].answer === "true") ||
      (answer === false && questions[i].answer === "false")
    ) {
      score++;
      alert("Correct!!");
    } else {
      score--;
      alert("You are wrong!");
      return;
    }
  }
}

// function clickEvent() {
//
//   for (var i = 0; i < questions.length; i++) {
//     var answer = questions.answer[i];
//     if (
//       answer === "Ice Cream" ||
//       answer === "Saffron" ||
//       answer === "Paella" ||
//       answer === "Baklava" ||
//       answer === "Vermicilli" ||
//       answer === "Mushroom" ||
//       answer === "Eggs" ||
//       answer === "Durian" ||
//       answer === "Flour and Butter" ||
//       answer === "Unagi"
//     ) {
//       alert("CORRECT!");
//     } else {
//       //take time off clock
//       alert("better luck next time, you just lost 10 seconds..");
//     }
//     //need a function to go to next question
//   }
// }
