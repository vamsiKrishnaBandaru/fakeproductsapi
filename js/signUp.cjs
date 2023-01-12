const form = document.getElementById('signup-form')
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordRepeat = document.getElementById('password-repeat');
const tos = document.getElementById('tos-sec');
const tosErrorMsg = document.querySelector('.tos-error-msg')
const successMsg = document.querySelector('.sign-up-done')
const signUpSec = document.querySelector('.sign-up-sec')



function errorOcuured(element, text) {
  element.nextElementSibling.textContent = text
  element.nextElementSibling.style.color = 'red'
  element.style.border = '1px solid red'
  
}

function borderGreen(element) {
  element.nextElementSibling.textContent = ""
  element.style.border = '1px solid green'
}

function checkName(name) {
  const checkCharectors = ['~', '!', '@', '#', '$', '%', '*', '(', ')', '+', '=', ':']
  if (name.includes(checkCharectors)) {
    return true
  }
}

function checkEmail(email) {
  var check = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  if (!email.match(check)) {
    return true
  }
  return false
}

function checkPassword(password) {
  if ((password.length < 8 || password.length > 16)) {
    return true
  }
  return false
}



// main function starts from here

form.addEventListener('submit', (event) => {
  event.preventDefault();
  let checkList = false;
  if (firstName.value === '' || checkName(firstName.value)) {
    errorOcuured(firstName, 'Please enter name using letters only')
    checkList = true
  } else {
    borderGreen(firstName)
  }

  if (lastName.value === '' || checkName(lastName.value)) {
    errorOcuured(lastName, 'Please enter name using letters only')
    checkList = true
  } else {
    borderGreen(lastName)
  }

  if (email.value == '' || checkEmail(email.value)) {
    errorOcuured(email, 'Invalid email address')
    checkList = true
  } else {
    borderGreen(email)
  }

  if (password.value == '' || checkPassword(password.value)) {
    errorOcuured(password, 'Your password must be at least 8 to 16 characters')
    checkList = true
  } else {
    borderGreen(password)
  }

  if ((password.value === passwordRepeat.value && passwordRepeat.value !== '') && !checkPassword(passwordRepeat.value)) {
    borderGreen(passwordRepeat)
  } else {
    errorOcuured(passwordRepeat, 'Password must be same')
    checkList = true
  }
  if (!tos.checked) {
    tosErrorMsg.textContent = 'Please accept our terms and conditions'
    tosErrorMsg.style.color = 'red'
    checkList = true
  }
  if (!checkList) {
    successMsg.style.display = 'block'
    signUpSec.style.display = 'none'
  }
})