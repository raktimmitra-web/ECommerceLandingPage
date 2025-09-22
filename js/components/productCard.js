document.querySelectorAll(".filterBtn").forEach((button)=> {
  button.addEventListener("click",async()=>{
    const filterValue=button.getAttribute("category");
    console.log(filterValue)
    const res=await fetch("./data/products.json")
    const products=await res.json()
    if(filterValue==="All") renderProducts(products)
      else{
    const filteredProducts=products.filter((product)=>product.category===filterValue)
    renderFilterProducts(filteredProducts)
  }
})
})
const renderProducts = (products) => {
  const productContainer = document.getElementById("productList");
  productContainer.innerHTML = "";
  products.forEach((product) => {
    const card = document.createElement("div");
    card.className =
      "rounded-lg shadow-lg bg-white flex flex-col hover:shadow-xl transition-shadow duration-300 product-card";
    card.innerHTML = `
  <div class="bg-white rounded-lg overflow-hidden">
    <img src="${product.images[0].url}" alt="${product.name}" class="w-full h-60 object-cover">
    <div class="p-4">
      <h3 class="text-2xl font-semibold text-gray-800 mb-2">${product.name}</h3>
      <p class="text-gray-600 mb-3 line-clamp-3">${product.description}</p>
      <p class="text-lg font-bold text-green-700 mb-4">Cost: $${product.price}</p>
      <div class="flex gap-4 items-center">
        <a 
          href="product.html?id=${product.id}" 
          class="flex-1 text-center border border-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-100 transition w-full"
        >
          View Now
        </a>
        <div id="controls-${product.id}" class="flex-1 w-full">  
          <button class="addToCartBtn w-full bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  </div>
`;

    const addToCartBtn = card.querySelector(".addToCartBtn");
    //    if (addToCartBtn) {
    //   addToCartBtn.addEventListener("click", () => {
    //     addToCart(product);
    //   });
    // }
    //    if (existing) {
    //       const increaseBtn = card.querySelector(".increase-btn");
    //       const decreaseBtn = card.querySelector(".decrease-btn");

    //       if (increaseBtn) {
    //         increaseBtn.addEventListener("click", () => {
    //           increaseQuantity(product.id);
    //         });
    //       }

    //       if (decreaseBtn) {
    //         decreaseBtn.addEventListener("click", () => {
    //           decreseQuantity(product.id);
    //         });
    //       }
    //     }
    productContainer.appendChild(card);
  });
};

const renderFilterProducts=(products)=>{
  const productContainer = document.getElementById("filteredProductList");
  productContainer.innerHTML = "";
  products.forEach((product) => {
    const card = document.createElement("div");
    card.className =
      "rounded-lg shadow-lg bg-white flex flex-col hover:shadow-xl transition-shadow duration-300 product-card";
    card.innerHTML = `
  <div class="bg-white rounded-lg overflow-hidden">
    <img src="${product.images[0].url}" alt="${product.name}" class="w-full h-60 object-cover">
    <div class="p-4">
      <h3 class="text-2xl font-semibold text-gray-800 mb-2">${product.name}</h3>
      <p class="text-gray-600 mb-3 line-clamp-3">${product.description}</p>
      <p class="text-lg font-bold text-green-700 mb-4">Cost: $${product.price}</p>
      <div class="flex gap-4 items-center">
        <a 
          href="product.html?id=${product.id}" 
          class="flex-1 text-center border border-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-100 transition w-full"
        >
          View Now
        </a>
        <div id="controls-${product.id}" class="flex-1 w-full">  
          <button class="addToCartBtn w-full bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  </div>
`;
 productContainer.appendChild(card);
  })
}
async function loadProducts() {
  const res = await fetch("./data/products.json");
  const products = await res.json();
  console.log(products, "products");
  renderProducts(products.slice(0,3));
}
document.addEventListener("DOMContentLoaded", loadProducts);
