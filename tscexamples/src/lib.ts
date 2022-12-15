export  function forEach<T>(elems:T[], action:(elem:T) => void):void {
	let i: number = 0;
	for(i = 0; i < elems.length; i++) {
		action(elems[i]);
	}
}

// HOF
export function filter<T>(elems:T[], predicate: (elem:T) => boolean ) : T[] {
    let result:T[] = [];
    forEach(elems, e => {
        if(predicate(e)) {
            result.push(e);
        }
    });
    return result;
}
