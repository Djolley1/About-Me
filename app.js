// Asking Name
function getName() {
  let name = prompt("What is your name?");
  document.write("Nice to meet you " + name);
}

// Sports Question
function getSport() {
  let choice = prompt("Do you like sports?");
  let answer = choice.charAt(0).toLowerCase();
  if( answer === "y" ) {
    document.write(" Cool, I'm an athlete also. ");
  } else {
    document.write(" That's totally fine... ");
  }
}


// Getting Age
function getAge() {
  let Age = prompt("Are you over 30?");
  let answer = Age.charAt(0).toLowerCase();
  if( answer === "y" ) {
    document.write(" I bet your back hurts 🤣 ");
  } else {
    document.write(" Go Party! ");
  }
}

// Sneaker Question
function getSneakers() {
  let Sneaker = prompt("Are you a sneakerhead?");
  let answer = Sneaker.charAt(0).toLowerCase();
  if( answer === "y" ) {
    document.write(" Awesome, so am I! ");
  } else {
    document.write(" I'll buy the pairs you don't. ");
  }
}

// Pizza Pizza
function getPizza() {
  let pizza = prompt("I know you like pizza right?");
  let answer = pizza.charAt(0).toLowerCase();
  if( answer === "y" ) {
    document.write(" Ohhh Yeahhh, my kind of friend. ");
  } else {
    document.write(" Ehh, guess you're ok.... ");
  }
}

// Guessing game
function guessTheNumber() {
  let correctAnswer = false;
  let numberOfGuesses = 3;

  for( let i = 0; i < numberOfGuesses; i++) {
    let guess = prompt("Guess the number I'm thinking from 1-10");
    guess = Number(guess);
    if( guess === 7 ) {
      correctAnswer = true;
      numberOfGuesses = i; 
      break;
    }
  }

  if( correctAnswer ) {
    document.write(numberOfGuesses);
  } else {
    document.write("Soo Close! It's 7");
  }
}

// Array question

function favoriteColor() {
  let favoriteColors = [ "black",  "navy blue",  "military green" ];
  for ( let i = 1; i < 7; i++ ) {
    let userGuess = prompt("What's my favorite color?");
    if (favoriteColors.indexOf(userGuess.toLowerCase()) !== -1) {
      alert("You know me well!");
      break;
    } else if (i === 6) {
      alert("Sorry you couldn't guess it, the color is" + favoriteColors);
    } else {
      alert("Sorry, try once more.");
    }

  }
}
favoriteColor();

