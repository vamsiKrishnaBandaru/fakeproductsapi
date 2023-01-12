const form = document.getElementById('signup-form')
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordRepeat = document.getElementById('password-repeat');
// const tos = document.getElementById('tos');


const firstNameSec = document.querySelector('first-name');

// const firstNameerrorMessage = document.querySelector('firstNameerrorMessage')

// console.log(firstNameerrorMessage)

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (firstName.value === '' || checkName(firstName.value)) {
    errorOcuured(firstName, 'Please enter name using letters only')
  } else {
    borderGreen(firstName)
  }

  if (lastName.value === '' || checkName(lastName.value)) {
    errorOcuured(lastName, 'Please enter name using letters only')
  } else {
    borderGreen(lastName)
  }

  if (email.value == '' || checkEmail(email.value)) {
    errorOcuured(email, 'Invalid email address')
  } else {
    borderGreen(email)
  }
  if (password.value == '' || checkEmail(password.value)) {
    errorOcuured(password, 'Your password must be at least 8 to 16 characters')
  } else {
    borderGreen(password)
  }
  if (passwordRepeat.value == '' || checkEmail(passwordRepeat.value)) {
    errorOcuured(passwordRepeat, 'Password must be same')
  } else {
    borderGreen(passwordRepeat)
  }
})

function checkName(name) {
  const checkCharectors = ['~', '!', '@', '#', '$', '%', '*', '(', ')', '+', '=', ':']
  if (name.includes(checkCharectors)) {
    return false
  }
}


function checkEmail(email) {
  var check = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  if (!email.match(check)) {
    return true
  }
  return false
}

function errorOcuured(element, text) {
  element.nextElementSibling.textContent = text
  element.nextElementSibling.style.color = 'red'
  element.style.border = '1px solid red'

}


function borderGreen(element) {
  element.nextElementSibling.textContent = ""
  element.style.border = '1px solid green'
}
