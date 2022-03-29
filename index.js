const stringLength = (string) => {
if(string.length>=1 && string.length<=10){
return string.length;
}
else{
    throw new Error ('check fail: string length not in between 1 and 10')
}
}

let reverseString = (string) => string.split("").reverse().join("");
module.exports = {stringLength,reverseString}
