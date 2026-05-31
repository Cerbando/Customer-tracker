// Step 2: Create Customer Records
let customers = [
    { name: "John Doe", email: "john.doeee@icloud.com", purchases: ["Shoes", "Laptop"] },
    { name: "Jane Smith", email: "jane.smith4@hotmail.com", purchases: ["Book", "Smart Watch"] },
    { name: "Rebecca Johnson", email: "rebecca.johnson100@gmail.com", purchases: ["Headphones", "Camera"] }
];

// Step 3: Add and remove Data
customers.push({ name: "Frangie Arocho", email: "frangie.arocho@gmail.com", purchases: ["Tablet"] });
customers.shift(); // Remove the first customer (John Doe)