const processOrder = (customer) => {
  console.log(`Processing order for ${customer}`);
  setTimeout(() => {}, 3000);
  console.log("Order process for ${customer}");
};

console.log(`Take order for ${customer}`);

processOrder("Customer 1");

console.log(`Complete order for ${customer}`);
