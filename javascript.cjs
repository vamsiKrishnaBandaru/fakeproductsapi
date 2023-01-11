// fetching the data from the api

var h1 = document.querySelector('h1')
const url = 'https://fakestoreapi.com/products'
const loader = document.querySelector('.lds-dual-ring')
const failed = document.querySelector('.error-message')
const noProducts = document.querySelector('.noProducts')

fetch(url)
  .then((response) => {

    if (!response.ok) {
      console.log('fetching failed')
      return
    } else {
      return response.json();
    }
  })

  .then((data) => {
    if (data === null || !data) {
      console.err("no data");
      noProducts.style.display = 'block'
      remover(h1)
      return;
    } else {
      remover(loader)
      AllData(data)
    }
  })

  .catch((err) => {
    remover(loader)
    failed.style.display = 'block'
    remover(h1)
    console.log(err, 'error fetching');
    return
  });


// remove loader
function remover(loader) {
  loader.remove()
}


function AllData(products) {
  const ul = document.querySelector('ul')
  products.forEach(product => {

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
  });
}
