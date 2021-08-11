// setTimeout(() => {
//     console.log('setTimeout');//4
// }, 0);
//
// const promise = new Promise((resolve) => {
//     console.log('Promise'); //1
//     resolve();
// });
//
// promise.then(() => {
//     console.log('Promise resolve');//3
// });
//
// console.log('End');//2

// task 2

// function runCode() {
//     console.log('before promise')//1
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log('Zero Promise')//4
//
//             resolve()
//         }, 0)
//     })
// }
//
// setTimeout(() => {
//     console.log('Zero')//5
// }, 0)
//
// runCode().then(() => console.log('Zero Promise Invoked'))//3
//
// console.log('One')//2

// task 3

const getData = (callback) => {
    fetch('https://jsonplaceholder.typicode.com/users/1')
        .then((response) => response.json())
        .then((user) => {
            console.log('Success');//4
            callback(user);
        })
        .catch((error) => {
            console.log(error);
        });
}

getData(() => {
    console.log('user received');//1

    const promise = new Promise((resolve) => {
        setTimeout(() => {
            resolve('promise resolved');
        }, 500);

        console.log('in promise');//2
        setTimeout(() => {
            console.log('last set timeout');//5
        }, 400);

    });

    promise.then((result) => {
        console.log(result);//6
    })
});

console.log('End')//3