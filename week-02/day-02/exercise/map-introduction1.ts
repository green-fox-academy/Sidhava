let whatiIsMap = new Map();

console.log(whatiIsMap);

whatiIsMap.set(97, "a");
whatiIsMap.set(98, "b");
whatiIsMap.set(99, "c");
whatiIsMap.set(65, "A");
whatiIsMap.set(66, "B");
whatiIsMap.set(67, "C");

console.log(whatiIsMap.keys());
console.log(whatiIsMap.values());

whatiIsMap.set(67, "D");

console.log(whatiIsMap.size);

console.log(whatiIsMap.get(99))

whatiIsMap.delete(96);

if (whatiIsMap.has(100)) {
    console.log('yep there is an associated value')
} else {
    console.log('no brotha');
}

whatiIsMap.clear()

console.log(whatiIsMap);