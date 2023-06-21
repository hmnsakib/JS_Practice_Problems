mobile = {
    brand: "Samsung",
    price: 19000,
    storage: "64gb",
    camera: "7mp",
};

var mykeys = Object.keys(mobile);
var myvalues = Object.values(mobile);

console.log(mykeys);
console.log(myvalues);

for (var i = 0; i < mykeys.length; i++) {
    console.log(mykeys[i], ":", myvalues[i]);
}
