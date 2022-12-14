interface Product {

}

interface Mobile extends Product {

}

interface Tv extends Product {

}
function testing<T extends Product> (arg:T): void {
 // 
}

function doTask<T extends {"name":string}>(arg:T) {

}

doTask({"name": "A", "age": 44});
doTask({"name": "iPhone", "price": 222244});

