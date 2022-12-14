interface Product {
    getName():string;
}

interface ErrorMsg {
    getMsg():string
}

function getData(data: Product | ErrorMsg) {
    if(typeof (data as Product).getName === 'function') {
        return (data as Product).getName();
    }

    if(typeof (data as ErrorMsg).getMsg === 'function') {
        return (data as ErrorMsg).getMsg();
    }
}

let err:ErrorMsg = {getMsg:() => "Boom :-("};

console.log(getData(err));