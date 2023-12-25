//your JS code here. If required.
const arr = [1, 2, 3, 4];
const output = document.getElementById('output');

new Promise (function (resolve, reject) {

    let arr1;
	setTimeout(()=> {
		arr1 = arr.filter((element)=> {
            return (Math.floor(element % 2) === 0);
        })
        output.innerText = arr1;
        resolve(arr1);
	}, 1000);	

})
.then((intermediateArray)=> {
    
    console.log(intermediateArray);
    let arr2;
    setTimeout(()=> {
        arr2 = intermediateArray.map((element)=> {
            return (element * 2);
        });
        output.innerText = arr2;
        return 'done';
    }, 2000);

})