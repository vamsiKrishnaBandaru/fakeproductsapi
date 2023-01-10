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
    console.log(data[1])
    AllData(data)
  })

  .catch((err) => {
    console.log(err);
    return
  });

function AllData(product) {
  const ul = document.querySelector('ul')
  for (let i = 0; i < product.length; i++) {

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

    category.innerHTML = product[i].category
    img.src = product[i].image;
    title.innerText = product[i].title;
    description.innerText = product[i].description.slice(0, 75) + `...`;
    rating.innerText = product[i].rating.rate + `(${product[i].rating.count})`
    price.innerHTML = "$" + product[i].price;

    li.append(category, img, title, description, rating, price, div)
    ul.append(li)
  };
}
