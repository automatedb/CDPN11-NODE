const list = [];

list.push(1);
list.push(2);
list.push(3);
list.push(4);
list[list.length] = 5;

/**
 * Utilisation standard des tableaux
 */
// const listBis = [];
//
// list.forEach(function(value) {
//     listBis.push(value * 2);
// });
//

/**
 * Création d'un tableau avec map
 */
const listBis = list.map(function(value) {
    return value * 2;
});

/**
 * Filter un tableau avec filter
 */
const listFiltered = listBis.filter(function(value) {
    return value > 5;
});


const listOther = list.map(function(value) {
    return value * 2
}).filter(function(value) {
    return value > 5
});

console.log(listOther);
