// fetching the data from the api
const url = 'https://fakestoreapi.com/products'

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
    if (data.length < 1) {
      console.log("no data");
      noProducts()
      return;
    } else if (!Array.isArray(data)) {
      singleProduct(data)
      removeLoader()
    } else {
      showheading()
      removeLoader()
      AllData(data)
    }
  })

  .catch((err) => {
    showErrorMessage()
    removeLoader()
    console.log(err, 'error fetching');
    return
  });


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

function AllData(products) {
  products.forEach(product => {
    singleProduct(product)
  });
}

function singleProduct(product) {
  const ul = document.querySelector('ul')

  let li = document.createElement('li');
  let img = document.createElement('img')
  let title = document.createElement('h4')
  let description = document.createElement('p');
  let price = document.createElement('h3');
  let div = document.createElement('div')
  let category = document.createElement('p')
  let rating = document.createElement('div')

  div.setAttribute('class', 'container');
  category.setAttribute('class', 'category');
  title.setAttribute('class', 'title');
  price.setAttribute('class', 'price')
  rating.setAttribute('class', 'rating');

  category.innerHTML = product.category
  img.src = product.image;
  title.innerText = product.title;
  description.innerText = product.description.slice(0, 75) + `...`;
  rating.innerText = product.rating.rate + `(${product.rating.count})`
  price.innerHTML = "$" + product.price;

  li.append(category, img, title, description, rating, price, div)
  ul.append(li)
}