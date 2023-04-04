
interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
}

let products:Product[] = [
    {"id": 1, "name": "iPhone 14", "price": 120000.00, "category" : "mobile"},
    {"id": 2, "name": "Samsung ", "price": 240000.00, "category" : "tv"},
    {"id": 3, "name": "Redmi", "price": 8900.00, "category" : "mobile"},
     {"id": 4, "name": "Wacom", "price": 9811.00, "category" : "computer"}
];


let p:Product = products.find(p => p.id === 2)!;

console.log(p);

function print(name: string | null) {
    console.log(name!.toLowerCase());
}

