const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?


document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");

  //things we are grabbing
  const street = document.getElementById('street')
  const city = document.getElementById('city')
  const state = document.getElementById('state')
  const postcode = document.getElementById('postcode')
  const phone = document.getElementById('phone')
  const cell = document.getElementById('cell')
  const fullName = document.getElementById('fullname')
  const dateOfBirth = document.getElementById('date_of_birth')
  const email = document.getElementById('email')

  const button = document.querySelector('.btn')

  button.addEventListener('click', event => {
    fetch('https://randomuser.me/api/')
      .then(response => response.json())
      .then(json => {
        let info = json.results[0]

        street.innerText = info.location.street
        city.innerText = info.location.city
        state.innerText = info.location.state
        postcode.innerText = info.location.postcode
        phone.innerText = info.phone
        cell.innerText = info.cell
        fullName.innerText = `${info.name.first} ${info.name.last}`
        dateOfBirth.innerText = info.dob.date
        email.innerText = info.email
      })

  })

});
