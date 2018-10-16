const fullname = document.getElementById("fullname");
const email = document.getElementById("email");
const street = document.getElementById("street");
const city = document.getElementById("city");
const state = document.getElementById("state");
const postcode = document.getElementById("postcode");
const phone = document.getElementById("phone");
const cell = document.getElementById("cell");
const date_of_birth = document.getElementById("date_of_birth");
const btn = document.querySelector('.btn');

console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

const capitalize = function(word) {
  return word[0].toUpperCase() + word.slice(1)).join(" ");
}

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
  btn.addEventListener('click', () => {
    fetch('https://randomuser.me/api/')
    .then(resp => resp.json())
    .then(json => {
      // debugger
      const data = json.results[0];
      fullname.innerText = capitalize([data.name.first, data.name.last].map(word => capitalize(word)).join(' '));
      email.innerText = data.email;
      street.innerText = data.location.street;
      city.innerText = capitalize(data.location.city);
      state.innerText = data.location.state;
      postcode.innerText = data.location.postcode;
      phone.innerText = data.phone;
      cell.innerText = data.cell;
      date_of_birth.innerText = data.dob.date.split('T')[0];
    })
  })

});
