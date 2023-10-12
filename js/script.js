//add an event listen to h1
//access h1 with
const title = document.querySelector("h1");
//add the variable name and addEventListener
//inside the method add the action we're listening for
//then add the event handler(type of function)that runs code when the mouse pointer is over the h1 element)
title.addEventListener("mouseover", function () {
  //now we add statements(instructions to the program) inside the function body{}
  //these will change the h1 innertext and style properties when the mouse moves over it
  title.innerText = "Let's PARTY!";
  title.style.color = "maroon";
});

// we can use classList to apply mulitple styles at once classList.add()
//create a classs in CSS with the styles in .dark-palette
//use querySelctor() to target the button that the even will happen on
const darkModeButton = document.querySelector(".dark-mode");
//this variable selects the element that you want to change
const theme = document.querySelector("body");
//add the event listener to listen for a click on the button, & event handler to designate what will happenwhen the even occurs
darkModeButton.addEventListener("click", function () {
  //inside this function is an if else statement using contains() to see if the element has the clas aplied to it.
  if (theme.classList.contains("dark-palette")) {
    // if it doesn't, JS will remove the dark
    theme.classList.remove("dark-palett");
    darkModeButton.innerText = "Dark Mode";
    //or else it will apply the class
  } else {
    theme.classList.add("dark-palette");
    darkModeButton.innerText = "Light Mode";
  }
});
