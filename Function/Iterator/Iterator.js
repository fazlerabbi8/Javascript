const arr = ["Rabbi", "ali", "sagor", "joy"];

const it = arr[Symbol.iterator]();
for(let val of it){
    console.log(val);
}