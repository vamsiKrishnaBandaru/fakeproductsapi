// fetching the data from the api

const url = 'https://fakestoreapi.com/products'

fetch(url)
  .then((response) => {

    if (!response.ok) {
      console.err('error fetching')
      return
    } else {
      return response.json();
    }
  })

  .then((data) => {
    if (data.length < 1) {
      console.err("no data");
      return;
    }
    fake(data)
  })

  .catch((err) => {
    console.log(err);
    return
  });

function fake(product) {
  const ul = document.querySelector('ul')
  for (let i = 0; i < product.length; i++) {

    let li = document.createElement('li');
    let img = document.createElement('img')
    let title = document.createElement('h4')
    let description = document.createElement('p');
    let button = document.createElement('button')
    let price = document.createElement('h3');
    let div = document.createElement('div')
    let category = document.createElement('p')
    let rating = document.createElement('div')

    button.setAttribute('class', 'btn');
    div.setAttribute('class', 'container');
    category.setAttribute('class', 'category');
    title.setAttribute('class', 'title');
    price.setAttribute('class', 'price')

    category.innerHTML = product[i].category
    img.src = product[i].image;
    title.innerText = product[i].title;
    description.innerText = product[i].description.slice(0, 75) + `...`;
    button.innerText = 'Add to cart'
    price.innerText = "$" + product[i].price;
    rating.innerText = product[i].rating.rate
    div.append(button)
    li.append(category, img, title, description, price, div, rating)
    ul.append(li)
  };
}
