const products = [
    { name: "Laptop", price: 999, rating: 4.5 },
    { name: "Phone", price: 699, rating: 4.8 },
    { name: "Headphones", price: 150, rating: 4.2 },
    { name: "Keyboard", price: 80, rating: 4.0 }
];

// Sort by price: cheapest to most expensive
const productsByPrice = [...products].sort(function(a, b) {
    return a.price - b.price;
});

console.log("Products sorted by price:");
console.log(productsByPrice);


// Sort by rating: highest to lowest
const productsByRating = [...products].sort(function(a, b) {
    return b.rating - a.rating;
});

console.log("Products sorted by rating:");
console.log(productsByRating);