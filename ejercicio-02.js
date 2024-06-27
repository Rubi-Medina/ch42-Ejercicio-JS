function duplicarValor(valor) {
    // Duplica el valor de cada número en el arreglo
    let valorDuplicado = valor.map(function(numero) {
      return numero * 2;
    });
  
    // Imprime el nuevo arreglo actualizado
    console.log(valorDuplicado);
  }
  
  // Ejemplo de uso
  let numeros = [1, 2, 4, 5];
  duplicarValor(numeros);