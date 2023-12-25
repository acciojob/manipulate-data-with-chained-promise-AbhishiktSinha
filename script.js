//your JS code here. If required.
const arr = [1, 2, 3, 4];
const output = document.getElementById('output');

new Promise (function (resolve, reject) {

	setTimeout(()=> {
		output.innerText = arr.filter((element)=> {
            return (Math.floor(element % 2) === 0);
        })
	}, 1000);

	setTimeout(()=> {
		output.textContent = arr.map((element)=> {
			return element * 2;
		});
	},2000);

	resolve('done');
}).then((result)=> {
	console.log(result);
	
})