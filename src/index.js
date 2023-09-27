// ITERATION 1

function updateSubtotal(product) {
  console.log("Calculating subtotal, yey!");

  let price = product.querySelector(".price span");
  let quantity = product.querySelector(".quantity input");

  let priceNum = price.innerText;
  console.log(priceNum);
  let quantityNum = quantity.value;
  let subtotalNum = priceNum * quantityNum;

  let subtotal = product.querySelector(".subtotal span");
  subtotal.innerHTML = subtotalNum;

  return subtotalNum;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector(".product");
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const products = document.querySelectorAll(".product");
  console.log(products);
  let total = 0;
  products.forEach((product) => {
    let subtotal = updateSubtotal(product);
    console.log(subtotal);
    total += subtotal;
  });
  console.log(total);

  const totalValue = document.querySelector("#total-value span");
  totalValue.textContent = total;

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  //... your code goes here
});
