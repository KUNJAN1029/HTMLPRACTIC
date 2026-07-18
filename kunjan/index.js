// const productName = "Wireless Mouse";
// const price = "499";
// const quantity = "3";
// const discount = 100;

// const convertedPrice = Number(price);
// const convertedQuantity = Number(quantity);

// const totalPrice = convertedPrice * convertedQuantity;
// const finalPrice = totalPrice - discount;
// const isFreeShipping = finalPrice >= 1000;

// const summary = `Product: ${productName}
// Price: ₹${price}
// Quantity: ${quantity}
// Total: ₹${totalPrice}
// Discount: ₹${discount}
// Final Price: ₹${finalPrice}
// Free Shipping: ${isFreeShipping ? "Yes" : "No"}`;

// console.log(summary)

// const customerName = "Tom";
// const membership = "Gold";
// const purchaseAmount = 2500;

// let discountPercentage = 0;
// let discountAmount = 0;
// let finalAmount = 0;

// if (membership === "Bronze")
// {
//     discountPercentage = 5;
// }
// else if (membership === "Silver")
// {
//     discountPercentage = 10;
// }
// else if (membership === "Gold")
// {
//     discountPercentage = 15;
// }
// else if (membership === "Platinum")
// {
//     discountPercentage = 20;
// }
// else{
//     discountPercentage = 0;
// }

// discountAmount = (purchaseAmount * discountPercentage) / 100;
// finalAmount = purchaseAmount - discountAmount;

// const summary = `Customer: ${customerName}
// Membership: ${membership}
// Purchase Amount: ₹${purchaseAmount}
// Discount: ${discountPercentage}%
// You Saved: ₹${discountAmount}
// Final Amount: ₹${finalAmount}`;

// console.log(summary);

// for (let i = 0; i < cart.length; i++) {
//   let SubTotal = cart[i].price * cart[i].quantity;
//   totalPrice += SubTotal;
//   bigString += `
// ${cart[i].name}
// Price: ${cart[i].price}
//   Quantity: ${cart[i].quantity}
//   Subtotal: ${SubTotal}
//     `;
// }

// const cart = [
//   {
//     name: "Wireless Mouse",
//     price: 499,
//     quantity: 2,
//   },
//   {
//     name: "Keyboard",
//     price: 999,
//     quantity: 1,
//   },
//   {
//     name: "Headphones",
//     price: 1499,
//     quantity: 1,
//   },
// ];

// let totalItems = 0;
// let totalPrice = 0;
// let cartSummary = "";
// cartSummary = `Shopping Cart

// `;

// for (let product of cart) {
// let subTotal = product.price * product.quantity;
//   totalItems += product.quantity;
//   totalPrice += subTotal;
//   cartSummary += `${product.name}
// Price: ${product.price}
// Quantity: ${product.quantity}
// Subtotal: ${subTotal}

// `;
// }

// cartSummary += `Total Items: ${totalItems}
// Total Price: ${totalPrice}`;

// console.log(cartSummary);

// const products = [
//   {
//     name: "Wireless Mouse",
//     price: 499,
//     inStock: true,
//   },
//   {
//     name: "Keyboard",
//     price: 999,
//     inStock: false,
//   },
//   {
//     name: "Headphones",
//     price: 1499,
//     inStock: true,
//   },
//   {
//     name: "Monitor",
//     price: 8999,
//     inStock: false,
//   },
//   {
//     name: "Laptop Stand",
//     price: 1299,
//     inStock: true,
//   },
// ];

// const availableProducts = products.filter((e) => e.inStock === true);

// console.log(availableProducts)


// const products = [
//   {
//     id: 1,
//     name: "Wireless Mouse",
//     price: 499,
//   },
//   {
//     id: 2,
//     name: "Keyboard",
//     price: 999,
//   },
//   {
//     id: 3,
//     name: "Headphones",
//     price: 1499,
//   },
// ];

// const productCards = products.map((e) => `${e.name} - ₹${e.price}`)

// console.log(productCards);


// const products = [
//   {
//     id: 1,
//     name: "Wireless Mouse",
//     price: 499,
//     inStock: true,
//   },
//   {
//     id: 2,
//     name: "Keyboard",
//     price: 999,
//     inStock: false,
//   },
//   {
//     id: 3,
//     name: "Headphones",
//     price: 1499,
//     inStock: true,
//   },
//   {
//     id: 4,
//     name: "Monitor",
//     price: 8999,
//     inStock: true,
//   },
// ];

// const selectedProductId = 1;
// let print;

// const selectedProduct = products.find(
//   product => product.id === selectedProductId 
// );

// if (selectedProduct != undefined && selectedProduct.inStock === true) {
//     print = `Product found
//     Name: ${selectedProduct.name}
//     Price: ${selectedProduct.price}
//     In Stock: ${selectedProduct.inStock ? "Yes" : "No"}`;
//   }
// else {
//     print =`Product not found`
//   }

// console.log(print)

// const cart = [
//   {
//     name: "Wireless Mouse",
//     quantity: 2,
//     inStock: true,
//   },
//   {
//     name: "Keyboard",
//     quantity: 1,
//     inStock: true,
//   },
//   {
//     name: "Headphones",
//     quantity: 1,
//     inStock: false,
//   },
// ];

// const hasOutOfStockProduct = cart.some(
//     stock => stock.inStock === false
// )

// if(hasOutOfStockProduct === true)
// {
//     console.log("Checkout Disabled Some products are out of stock.")
// }
// else{
//     console.log("Checkout Allowed All products are available.")
// }

// const cart = [
//   {
//     name: "Wireless Mouse",
//     price: 499,
//     quantity: 2,
//   },
//   {
//     name: "Keyboard",
//     price: 999,
//     quantity: 1,
//   },
//   {
//     name: "Headphones",
//     price: 1499,
//     quantity: 1,
//   },
// ];


// const grandTotal = cart.reduce(
//   (total, product) => {
//     return total + product.price * product.quantity;
//   },
//   0
// );

// console.log(grandTotal)

