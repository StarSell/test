// SLIDESHOW
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showNextSlide() {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
}
setInterval(showNextSlide, 4000); // Change image every 4 sec

// DUMMY PRODUCTS
const products = [
  { id: 1, name: "Moncler Shoes", price: "1499 SEK", image: "images/products/IMG_9453.JPG" },
  { id: 2, name: "Moncler Jacket", price: "1999 SEK", image: "images/products/IMG_9456.JPG" },
  { id: 3, name: "Moncler Vest", price: "1499 SEK", image: "images/products/IMG_9457.JPG" },
  { id: 4, name: "Moncler Jacket", price: "1999 SEK", image: "images/products/IMG_9475.JPG" }
];

// INJECT SCROLL PRODUCTS
const scrollContainer = document.getElementById("scroll-products");

// Repeat products to create long scroll illusion
const repeatCount = 5; // Increase for longer scrolling

for (let i = 0; i < repeatCount; i++) {
  products.forEach(p => {
    const card = document.createElement("div");
    card.className = "scroll-card";
    card.innerHTML = `<img src="${p.image}" alt="${p.name}" />`;
    scrollContainer.appendChild(card);
  });
}




// INJECT NEWEST PRODUCTS
const newestContainer = document.getElementById("newest-products");
scrollContainer.scrollLeft = (scrollContainer.scrollWidth - scrollContainer.clientWidth) / 2;
products.slice().reverse().forEach(p => {
  const card = document.createElement("div");
  card.className = "product-card";
  card.innerHTML = `
  <img src="${p.image}" alt="${p.name}" />
  <div class="product-info">
    <h3>${p.name}</h3>
    <p class="price">${p.price}</p>   <!-- Added class="price" -->
  </div>
`;

  newestContainer.appendChild(card);
});

// Cart button (mockup)
let cartCount = 0;
document.querySelector(".cart-icon").addEventListener("click", () => {
  cartCount++;
  document.getElementById("cart-count").textContent = cartCount;
});

document.addEventListener("DOMContentLoaded", function () {
  fetch("products.json")
    .then((response) => response.json())
    .then((products) => {
      const productList = document.getElementById("product-list");
      productList.innerHTML = "";

      products.forEach((product) => {
        const productCard = document.createElement("a");
        productCard.className = "product-card";
        productCard.href = `product.html?id=${product.id}`;

        productCard.innerHTML = `
          <img src="${product.image}" alt="${product.name}" />
          <div class="product-info">
            <h3>${product.name}</h3>
            <p class="price">${product.price} kr</p>
          </div>
        `;

        productList.appendChild(productCard);
      });
    })
    .catch((error) => {
      console.error("Error loading products:", error);
    });
});


document.querySelector('.shop-btn').addEventListener('click', () => {
  window.location.href = 'products.html';
});

