//your JS code here. If required.
const arr = [1, 2, 3, 4];
const output = document.getElementById('output');

new Promise (function (resolve, reject) {

	setTimeout((arr)=> {
		arr.forEach((element)=> {
			if(Math.floor(Number(element) % 2) === 0) {
				output.innerText += element + ',';
			}
		})
	}, 1000);

	setTimeout((arr)=> {
		output.textContent = arr.map((element)=> {
			return element * 2;
		});
	},2000);

	resolve('done');
}).then((result)=> {
	console.log(result);
})