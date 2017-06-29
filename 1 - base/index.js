var i = 0;
var list = [];

// console.log(list);

list.push(1);
list.push(2);

// console.log(list);

list.forEach(function(value) {
   console.log('Valeur => ', value);
});

var obj = {
   property: 'bibi'
};

obj.display = function() {
    return obj.property;
};

console.log(obj.display());