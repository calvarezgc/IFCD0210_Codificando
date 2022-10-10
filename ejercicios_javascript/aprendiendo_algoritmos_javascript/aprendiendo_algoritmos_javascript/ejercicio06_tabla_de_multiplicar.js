/*
Escribe un programa que muestre la tabla de multiplicar del 1 al 10 del número ingresado por el usuario. Intenta resolver el problema escribiendo el mínimo código posible:

- Ingrese un numero: 9
- 9 x 1 = 9
- 9 x 2 = 18
- 9 x 3 = 27
- 9 x 4 = 36
- 9 x 5 = 45
- 9 x 6 = 54
- 9 x 7 = 63
- 9 x 8 = 72
- 9 x 9 = 81
- 9 x 10 = 90
*/

function tablaDeMultiplicar(n){
  result = "";
  for(let i=0; i<=10;i++){
    result += `${n} x ${i} = ${n*i} \n`;
  }
  return result;
}

console.log(tablaDeMultiplicar(5));