const fruit_seasonal = ['Banana', 'Orange', 'Apple', 'Mango', 'Water Melon'];
console.log(fruit_seasonal);
console.log('==========First And Last Element log on=========');
console.log(fruit_seasonal[0], " ", fruit_seasonal[4]);

console.log('==========Add element Papaya Before the element Banana log on=========');
fruit_seasonal.splice(1, 0, 'Papaya')
console.log(fruit_seasonal);

console.log('==========Removing Mango Element in Above Array log on=========');
fruit_seasonal.splice(4, 1);
console.log(fruit_seasonal);

console.log('==========Insert element at last Position "Pineapple" log on=========');
fruit_seasonal.splice(5, 0, 'Pineapple');
console.log(fruit_seasonal);

console.log('==========Insert element Before Water Melon "Drangon Fruit" log on=========');
fruit_seasonal.splice(4, 0, 'Drangon Fruit')
console.log(fruit_seasonal);

console.log('==========Replace the element "Orange" to "Kiwi" and log on=========');
console.log(fruit_seasonal);

console.log('==========log on the elements from 1 to 4 =========');
let sliceing = fruit_seasonal.slice(1, 4);
console.log(sliceing);

console.log('==========Log on last three element using length property=========');
let last = fruit_seasonal.slice(4,7);
console.log(last);