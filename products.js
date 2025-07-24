
  const products = [
  {
    id: 1,
    name: "Moncler Shoes",
    price: "1499 SEK",
    images: [
      "images/products/IMG_9453.JPG",
      "images/products/IMG_9454.JPG"
    ]
  },
  {
    id: 2,
    name: "Moncler Jacket",
    price: "1999 SEK",
    images: [
      "images/products/IMG_9456.JPG"
    ]
  },
  {
    id: 3,
    name: "Moncler Vest",
    price: "1499 SEK",
    images: [
      "images/products/IMG_9457.JPG"
    ]
  },
  {
    id: 4,
    name: "Moncler Jacket",
    price: "1999 SEK",
    images: [
      "images/products/IMG_9468.JPG"
    ]
  },
  {
    id: 5,
    name: "Moncler Vest",
    price: "1999 SEK",
    images: [
      "images/products/IMG_9470.JPG"
    ]
  },
  {
    id: 6,
    name: "Moncler Jacket",
    price: "1999 SEK",
    images: [
      "images/products/IMG_9475.JPG"
    ]
  },
  {
    id: 7,
    name: "Patek Philippe",
    price: "1199 SEK",
    images: [
      "images/products/patek12.jpg"
    ]
  }
];


// Inject products
const productList = document.getElementById("product-list");

function displayProducts(filter = "") {
  productList.innerHTML = "";

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(filter.toLowerCase())
  );

  filtered.forEach(product => {
    const card = document.createElement("a");
    card.classList.add("product-card");
    card.href = `product.html?id=${product.id}`;

    const firstImage = product.images[0]; // Get the first image

    card.innerHTML = `
      <img src="${firstImage}" alt="${product.name}">
      <div class="product-info">
        <h3>${product.name}</h3>
        <p class="price">${product.price}</p>
      </div>
    `;

    productList.appendChild(card);
  });
}





document.addEventListener("DOMContentLoaded", () => {
  displayProducts();

  const searchInput = document.getElementById("searchInput");
  searchInput.addEventListener("input", () => {
    displayProducts(searchInput.value);
  });
});


