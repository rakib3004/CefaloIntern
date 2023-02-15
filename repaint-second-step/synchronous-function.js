const processOrder = (customer) => {
  console.log(`Processing order for ${customer}`);
  var currentTime = new Date().getTime();
  while (currentTime + 3000 >= new Date().getTime());
  console.log("Order process for ${customer}");
};

console.log(`Take order for ${customer}`);

processOrder("Customer 1");

console.log(`Complete order for ${customer}`);
