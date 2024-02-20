// Asking Name
function getName() {
    let name = prompt("What is your name?");
    document.write("Nice to meet you " + name);
  }
  getName()

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
  getSport()


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
  getAge()

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
  getSneakers()

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
  getPizza()

