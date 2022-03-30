const stringLength = (string) => {
if(string.length>=1 && string.length<=10){
return string.length;
}
else{
    throw new Error ('check fail: string length not in between 1 and 10')
}
}

let reverseString = (string) => string.split("").reverse().join("");

class calcultor{
    constructor(num1,num2){
        this.num1=num1;
        this.num2=num2;
    }
    add=()=> this.num1+this.num2;
    sub=()=> this.num1-this.num2;
    mul=()=> this.num1*this.num2;
    div=()=> this.num1/this.num2;

}

let capitalize = (string) =>{
    let result=string[0].toUpperCase();
    for(let i=1;i<string.length;i++){
        result+=string[i];
    }
    return result;

} 
module.exports = {stringLength,reverseString,calcultor,capitalize}