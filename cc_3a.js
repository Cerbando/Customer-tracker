// Step 2: Create Customer Records
let customers = [
    { name: "John Doe", email: "john.doeee@icloud.com", purchases: ["Shoes", "Laptop"] },
    { name: "Jane Smith", email: "jane.smith4@hotmail.com", purchases: ["Book", "Smart Watch"] },
    { name: "Rebecca Johnson", email: "rebecca.johnson100@gmail.com", purchases: ["Headphones", "Camera"] }
];

// Step 3: Add and remove Data
customers.push({ name: "Frangie Arocho", email: "frangie.arocho@gmail.com", purchases: ["Tablet"] });
customers.shift(); // Remove the first customer (John Doe)

// Step 4: Update Customer Info
customers[0].email = "smithjane4@gmail.com"; // Update Jane Smith's email
customers[1].purchases.push("Smartphone"); // Add a new purchase for Rebecca Johnson

// Step 5: Display Customer Info
customers.forEach(customer => {
    console.log(`Name: ${customer.name}, Email: ${customer.email}, Purchases: ${customer.purchases.length}`);
});