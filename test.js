const {stringLength,reverseString,calcultor,capitalize} = require("./index");
let num1=[];
let num2=[];

let result=stringLength("aa");
result=reverseString("sentayhu");     
 console.log(result);
test ('Shows Length of String ',()=>{
expect(stringLength("aa")).toBe(2);
});

test('Reverse the string ',()=>{
expect(reverseString("sentayhu")).toBe('uhyatnes');
});

 for(let i=0;i<3;i++){
    num1[i]= Math.floor(Math.random() *100);
    num2[i]= Math.floor(Math.random() *100);
}

 describe('Calculate number and get Result : ', () => {
     num1.forEach((n1)=>{
         
         num2.forEach((n2)=>{
            let calc = new calcultor(n1,n2);
            test('can perform Addition',()=>{
                expect(calc.add(n1,n2)).toBe(n1+n2);
            });
            test('can perform sub',()=>{
                expect(calc.sub(n1,n2)).toBe(n1-n2);
            });
            test('can perform  Mul',()=>{
                expect(calc.mul(n1,n2)).toBe(n1*n2);
            });
            test('can perform  div',()=>{
                expect(calc.div(n1,n2)).toBe(n1/n2);
            });
         });
     });
    

 });
 test('capitalize the first letter in a string ',()=>{
expect(capitalize("super")).toBe("Super");
 });
