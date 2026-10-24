function saludar() {
    console.log("Hola mundo");
    
}
saludar();
function suma() {
    return 2 + 2;
}
suma();
let resultado = suma();
console.log(resultado);
console.log(suma());

let a = 3;
function sumar(a) {
    return a + 2;
}
console.log(sumar(a));

function sumita(b) {
    return b + 2;
}
sumita(5);
console.log(sumita(5));

function sumas(a, b) {
    console.log(arguments);
    return a + b;
}
console.log(sumas(4, 5));
console.log(typeof sumas);
// let resultado = sumas(4, 5,6,7,8);


function sumando (c,d){
    console.log(arguments);
    return c + d;
}
let res= sumando(5,6,1,2,3);
console.log(res);