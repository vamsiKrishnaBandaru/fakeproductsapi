const url = 'https://fakestoreapi.com/users/'


fetch(url)
  .then((response) => {

    if (!response.ok) {
      console.log('fetching failed')
      showErrorMessage()
      removeLoader()
      return
    } else {
      return response.json();
    }
  })

  .then((data) => {
    if (data.length === 0) {
      noProducts.style.display = 'block'
      heading.style.display = 'none'
      console.err("no data");
      return;
    } else if (!Array.isArray(data)) {
      singleData(data)
      removeLoader()
      showheading()
    } else {
      showheading()
      removeLoader()
      topage(data)
    }
  })

  .catch((err) => {
    showErrorMessage()
    removeLoader()
    console.log(err, 'error fetching');
    return
  });


// functions to displays and remmove when things the are happens

function removeLoader() {
  const loader = document.querySelector('.lds-dual-ring')
  loader.remove()
}

function showheading() {
  const heading = document.querySelector('.heading')
  heading.style.display = 'block'
}

function noProducts() {
  const noProducts = document.querySelector('.noProducts')
  noProducts.style.display = 'block'
}

function showErrorMessage() {
  const failed = document.querySelector('.error-message')
  failed.style.display = 'block'
}


function singleData(user) {

  const ul = document.querySelector('ul')
  let div = document.createElement('div')
  let li = document.createElement('li');
  let name = document.createElement('h3');
  let email = document.createElement('p');
  let street = document.createElement('p');
  let username = document.createElement('p');
  let password = document.createElement('p');
  let phone = document.createElement('div');
  let city = document.createElement('div');
  let number = document.createElement('p');
  let zipcode = document.createElement('p');
  let img = document.createElement('img');

  img.src = 'https://icons.veryicon.com/png/o/internet--web/55-common-web-icons/person-4.png'

  name.textContent = 'Fullname: ' + user.name.firstname + ' ' + user.name.lastname;
  email.textContent = 'Email: ' + user.email;
  username.textContent = 'Username: ' + user.username;
  phone.textContent = 'Phone: ' + user.phone
  city.textContent = 'City: ' + user.address.city
  number.textContent = 'Number: ' + user.address.number
  password.textContent = 'Password: ' + user.password
  street.textContent = 'Street: ' + user.address.street

  div.append(name, username, password, phone, email, street, city, number, zipcode);
  li.append(img, div)
  ul.append(li);
}

function topage(users) {
  users.forEach(user => {
    singleData(user)
  });
}