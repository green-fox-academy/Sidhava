let productDatabase = new Map();

productDatabase.set('Eggs', 200);
productDatabase.set('Milk', 200);
productDatabase.set('Fish', 400);
productDatabase.set('Apples', 150);
productDatabase.set('Bread', 50);
productDatabase.set('Chicken', 550);

console.log(productDatabase.get('Fish'));

productDatabase.forEach(function(key, value){
    console.log(Math.max(value));
})
