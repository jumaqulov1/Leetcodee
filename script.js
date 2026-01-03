// 1-exam 

let a = 'Hello World'
console.log(a);

// 2-exam

function createCounter(init = 5) {
    let count = init;
    return {
        increment() {
            count++;
            return count;
        },

        decrement() {
            count--;
            return count;
        },

        reset() {
            count = init;
            return count;
        }
    };
}

//   3-exam

var map = function (arr, fn) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        result[i] = fn(arr[i], i);
    }

    return result;
};

// 4-exam 

var filter = function (arr, fn) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (Boolean(fn(arr[i], i))) {
            result.push(arr[i]);
        }
    }
    return result;
};


