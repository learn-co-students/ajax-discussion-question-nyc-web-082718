//let's get the html elements
const fullnameElement = document.getElementById("fullname")
const emailElement = document.getElementById("email")
const streetElement = document.getElementById("street")
const cityElement = document.getElementById("city")
const postcodeElement = document.getElementById("postcode")
const phoneElement = document.getElementById("phone")
const cellElement = document.getElementById("cell")
const date_of_birthElement = document.getElementById("date_of_birth")
const button = document.querySelector('button')

console.log("CONTENT NOT YET LOADED!", fullname)
document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!")
  // we are doing all of our coding in here because we want to wait for whole page to load

  // now let's fetch some info and put it on the page
  getNewPerson()

  // let's set up an event listener to make the button work
  button.addEventListener('click', getNewPerson)
})

function getNewPerson() {
  fetch('https://randomuser.me/api/')
  .then(fetchedPromise => fetchedPromise.json()) // parse JSON
  .then(parsedJson => parsedJson.results[0]) // get relevant info
  .then(results => {
    // console.log(results)
    // is the only way to do this to put html stuff into the DOM within the this??? so ugly
    // yes it seems like this is the only way
    // ok let's do it
    // yes

    // let's get the person's info
    let fullname = `${results.name.title} ${results.name.first} ${results.name.last}`
    let email = results.email
    let street = results.location.street
    let city = results.location.city
    let postcode = results.location.postcode
    let phone = results.phone
    let cell = results.cell
    let date_of_birth = results.dob.date

    // now let's put this on the page
    fullnameElement.innerHTML = fullname
    emailElement.innerHTML = email
    streetElement.innerHTML = street
    cityElement.innerHTML = city
    postcodeElement.innerHTML = postcode
    phoneElement.innerHTML = phone
    cellElement.innerHTML = cell
    date_of_birthElement.innerHTML = date_of_birth

  }) // trying to set an external variable to equal results will it work??
}
