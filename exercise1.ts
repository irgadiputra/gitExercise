let input:number = 0;
for (let i=0; i <=10; i++){
    console.log(`${input} * ${i} = ` + input * i);
}

let stringToCheck:string = "madam";
let isPolindrome = true;
for (let i = 0;  i < stringToCheck.length; i++){
    if (!(stringToCheck.slice(i,i+1) == stringToCheck.slice(stringToCheck.length-(i+1),stringToCheck.length-i))){
        isPolindrome = false;
        break;
    } 
}
if (isPolindrome){
    console.log("polindrome");
}