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

const cart = [
  {
    name: "Wireless Mouse",
    price: 499,
    quantity: 2,
  },
  {
    name: "Keyboard",
    price: 999,
    quantity: 1,
  },
  {
    name: "Headphones",
    price: 1499,
    quantity: 1,
  },
];

let totalItems = 0;
let totalPrice = 0;
let cartSummary = "";
cartSummary = `Shopping Cart

`;

for (let product of cart) {
let subTotal = product.price * product.quantity;
  totalItems += product.quantity;
  totalPrice += subTotal;
  cartSummary += `${product.name}
Price: ${product.price}
Quantity: ${product.quantity}
Subtotal: ${subTotal}  

`;
}

cartSummary += `Total Items: ${totalItems}
Total Price: ${totalPrice}`;

console.log(cartSummary);
