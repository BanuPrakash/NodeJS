
interface User {
 id:number;
 name:string
}

function fetchData(id:number): Promise<User> {
	return new Promise( (resolve, rejected) => {
		setTimeout( () => {
			resolve({"id": 2, "name": "Tim"});
		}, 2000);

   	});
}


fetchData(2).then( res => console.log(res), (err) => console.log(err));