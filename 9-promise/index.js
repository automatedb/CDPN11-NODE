// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject('error');
//     }, 2000);
//     // reject('error');
// });
//
// const promise2 = new Promise(resolve => {
//     setTimeout(() => {
//         resolve('success');
//     }, 5000);
//     // reject('error');
// });

// promise1.then(result => console.log("Resolve =>", result))
//         .catch(e => console.log("Reject =>", e));
//
// promise2.then(result => console.log("Resolve =>", result))
//     .catch(e => console.log("Reject =>", e));


// Promise.all([promise1, promise2]).then(
//     result => console.log("Resolve =>", result)
// ).catch(e => console.log("Reject =>", e));

// const myFunction = () => {
//     return new Promise((resolve, reject) => {
//         resolve('success');
//     });
// };
//
// myFunction().then(
//     result => console.log("Resolve =>", result)
// ).catch(e => console.log("Reject =>", e));

const fs = require('fs');

const myFunctionReadFileCustom = (pathConfigFile) => {
    return new Promise((resolve, reject) => {
        fs.readFile(pathConfigFile, 'utf8', (err, data) => {
            if(err) {
                reject('il y a une grosse erreur');
                return;
            }

            resolve(data);
        });
    });
};

myFunctionReadFileCustom('pathToConfigFile').then(
    result => console.log("Resolve =>", result)
).catch(e => console.log("Reject =>", e));