const sum = (num1, num2) => num1+num2;
const product = (num1, num2) => num1 * num2
const PI = 3.14;

class SomeMathObject{
       constructor(){
              console.log('Object Created');
       }
}
module.exports = {sum: sum, product: product, PI:PI, SomeMathObject: SomeMathObject}