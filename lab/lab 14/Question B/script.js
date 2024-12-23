// Sample product data
const products = [
    { name: "Smartphone", category: "electronics", price: 699 },
    { name: "Laptop", category: "electronics", price: 999 },
    { name: "T-shirt", category: "clothing", price: 19 },
    { name: "Jeans", category: "clothing", price: 49 },
    { name: "Coffee Maker", category: "home", price: 99 },
    { name: "Vacuum Cleaner", category: "home", price: 199 },
  ];
  
  // Select DOM elements
  const categoryFilter = document.getElementById("category-filter");
  const priceFilter = document.getElementById("price-filter");
  const applyFiltersButton = document.getElementById("apply-filters");
  const productList = document.getElementById("product-list");
  
  // Function to display products
  function displayProducts(products) {
    productList.innerHTML = ""; // Clear the product list
  
    if (products.length === 0) {
      productList.innerHTML = "<p>No products match the filters.</p>";
      return;
    }
  
    products.forEach((product) => {
      const productDiv = document.createElement("div");
      productDiv.className = "product";
      productDiv.innerHTML = `<strong>${product.name}</strong><br>Category: ${product.category}<br>Price: $${product.price}`;
      productList.appendChild(productDiv);
    });
  }
  
  // Function to filter products
  function filterProducts() {
    const selectedCategory = categoryFilter.value;
    const maxPrice = parseFloat(priceFilter.value);
  
    let filteredProducts = products;
  
    // Filter by category
    if (selectedCategory !== "all") {
      filteredProducts = filteredProducts.filter(
        (product) => product.category === selectedCategory
      );
    }
  
    // Filter by price
    if (!isNaN(maxPrice)) {
      filteredProducts = filteredProducts.filter(
        (product) => product.price <= maxPrice
      );
    }
  
    // Display filtered products
    displayProducts(filteredProducts);
  }
  
  // Event listener for the Apply Filters button
  applyFiltersButton.addEventListener("click", filterProducts);
  
  // Initial display of products
  displayProducts(products);
  