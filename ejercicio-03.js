let numeros = [1, 2, 3, 4];

let suma = 0;
let producto = 1;

for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
    producto *= numeros[i];
}

console.log('La suma es:', suma);
console.log('El producto es:', producto);
