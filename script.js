const radios = document.querySelectorAll('input[name="menuList"]');
const contents = document.querySelectorAll('.display');

radios.forEach(radio => {
  radio.addEventListener('change', () => {

    contents.forEach(c => c.classList.remove('active'));

    const target = document.querySelector("#" + radio.value);
    target.classList.add('active');
    console.log(target)

  });
});

fetch('src/list.json')
    .then(response => response.json())
    .then(data => {
        const coffeeDisplay = document.querySelector('#coffee');
        const teaDisplay = document.querySelector('#tea');
        const pastryDisplay = document.querySelector('#pastry');
        data[0].coffee.forEach((item) => {
            const products = document.createElement('div');
            const title = document.createElement("h1");
            const button = document.createElement("button");

            products.classList.add('products');
            products.style.backgroundImage = `url(src/img/photo/${item.image}-image.png)`;
            title.innerText = item.name;
            button.innerText = "ORDER";

            products.appendChild(title);
            products.appendChild(button);
            coffeeDisplay.appendChild(products);
        });
        data[0].tea.forEach((item) => {
            const products = document.createElement('div');
            const title = document.createElement("h1");
            const button = document.createElement("button");

            products.classList.add('products');
            products.style.backgroundImage = `url(src/img/photo/${item.image}-image.png)`;
            title.innerText = item.name;
            button.innerText = "ORDER";

            products.appendChild(title);
            products.appendChild(button);
            teaDisplay.appendChild(products);
        });
        data[0].pastry.forEach((item) => {
            const products = document.createElement('div');
            const title = document.createElement("h1");
            const button = document.createElement("button");

            products.classList.add('products');
            products.style.backgroundImage = `url(src/img/photo/${item.image}-image.png)`;
            title.innerText = item.name;
            button.innerText = "ORDER";

            products.appendChild(title);
            products.appendChild(button);
            pastryDisplay.appendChild(products);
        });
    })
    .catch(error => console.error('Error loading JSON data:', error));
