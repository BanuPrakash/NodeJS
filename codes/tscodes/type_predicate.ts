interface Product {
    name:string;
}

interface ErrorType {
    msg:string;
}

// type predicates
function isProduct(data:Product |ErrorType): data is Product {
    return typeof (data as Product).name === 'string';
}

// type predicates
function isErrorMsg(data:Product |ErrorType): data is ErrorType {
    return "msg" in data;
}

// | union type
function printData(data: Product | ErrorType) :void {
    if(isProduct(data)) {
        console.log("Result ", data.name);
    } else if (isErrorMsg(data)) {
        console.log("Error ", data.msg);
    }
}

printData({"msg":"Invalid Data"});

printData({"name":"Macbook Pro"});