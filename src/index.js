const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
});

// 1. ('Hello'), ('Sup?'), ('Hi')
// 2. undefined
// 3. Object
// 4. Object
// 5. Executes in random order
// 6. Traces a user's request flow 
