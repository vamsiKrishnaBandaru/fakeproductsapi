const url = 'https://fakestoreapi.com/users'

const heading = document.querySelector('.heading')


fetch(url)
  .then((response) => {

    if (!response.ok) {
      console.log('fetching failed')
      errorOccured('ERROR')
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
    } else {
      removeLoader()
      showheading()
      topage(data)
    }
  })

  .catch((err) => {
    showErrorMessage()
    removeLoader()
    console.log(err, 'error fetching');
    return
  });


// remove loader

function removeLoader() {
  var loader = document.querySelector('.lds-dual-ring')
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



function topage(users) {
  const ul = document.querySelector('ul')
  index = 0;
  while (index < users.length) {

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

    name.textContent = 'Fullname: ' + users[index].name.firstname + ' ' + users[index].name.lastname;
    email.textContent = 'Email: ' + users[index].email;
    username.textContent = 'Username: ' + users[index].username;
    phone.textContent = 'Phone: ' + users[index].phone
    city.textContent = 'City: ' + users[index].address.city
    number.textContent = 'Number: ' + users[index].address.number
    password.textContent = 'Password: ' + users[index].password
    street.textContent = 'Street: ' + users[index].address.street

    div.append(name, username, password, phone, email, street, city, number, zipcode);
    li.append(img, div)
    ul.append(li);

    index += 1;
  }
}

function errorOccured(msg) {
  if (msg == "Error") {
    failed.style.display = "block";
  }
}