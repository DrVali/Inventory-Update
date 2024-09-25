
const inventory = ["mouse", "keyboard", "monitor", "laptop", "printer"];
const searchTerm = "laptop";
let arrray = [];
let showFirstSlice = [];
let jsecondSlice= [];
let j = 0 , mysearch, myResult;

if(!inventory.includes(searchTerm)){
    inventory.push(searchTerm);
} else{
    for (let i = 0 ; i<inventory.length; i ++){
         myResult = inventory [i];
   if(searchTerm != myResult){
            arrray[j] = myResult;
         j++;
    }
    else if(searchTerm === myResult)
     mysearch = myResult;
    }
    arrray.push(searchTerm);
    }
    
console.log(arrray);

let FirstSlice =arrray;
showFirstSlice = FirstSlice.slice(0,3);
console.log(showFirstSlice);

jsecondSlice=FirstSlice.slice(-2);

console.log(jsecondSlice);
arrray = showFirstSlice.concat(jsecondSlice);
let lastArray = arrray.join(";");
console.log(lastArray);


