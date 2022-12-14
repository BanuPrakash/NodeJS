interface Product {
    getName():string;
}

interface ErrorMsg {
    getMsg():string
}

function isProduct(data: Product | ErrorMsg): data is Product {
    console.log("isProduct!!!");
    return typeof (data as Product).getName === 'function';
}

function isErrorMsg(data: Product | ErrorMsg): data is ErrorMsg {
    return 'getMsg' in data;
}

function getData(data: Product | ErrorMsg) {
    if(isProduct(data)) {
        return (data as Product).getName();
    }

    if(isErrorMsg(data)) {
        return (data as ErrorMsg).getMsg();
    }
}

let err:ErrorMsg = {getMsg:() => "Boom :-("};

console.log(getData(err));