    /**
     * Verifica si el array está ordenado o no.
     * @param {integer[]} intArray - El array de números enteros
     * @return {boolean} - TRUE si {intArray} está ordenado. Sino, FALSE
     * */
     function arrayOrdenado(intArray) {
      for (let i = 1; i < intArray.length; i++) {
        if (intArray[i - 1] > intArray[i])
          return false;
      }
      return true;
    }

    /**
     * Devuelve una nueva lista compuesta únicamente por los números pares del parámetro recibido.
     * @param {integer[]} intArray - El array de números pares e impares
     * @return {integer[]} pares - Array compuesto únicamente por números pares
     * */
    function extraerListaDePares(intArray) {
      const pares = [];
      for (let i = 0; i < intArray.length; i++) {
        if (intArray[i] % 2 == 0 && !pares.includes(intArray[i]))
          pares.push(intArray[i]);
      }
      return pares;
    }

    /**
     * Devuelve una nueva lista sin elementos repetidos a partir del parámetro recibido
     * @param {(Number[]|string[])} array - Lista de elementos (números o strings)
     * @return {(Number[]|string[])} array - Lista de elementos (números o strings) sin repetir
     * */
    function elementosSinRepetir(array) {
      const arraySinRepeticiones = [];
      for (let i = 0; i < array.length; i++) {
        if (!arraySinRepeticiones.includes(array[i]))
          arraySinRepeticiones.push(array[i]);
      }
      return arraySinRepeticiones;
    }

    /**
     * Devuelve una nueva lista con el orden de los elementos invertidos
     * @param {(Number[]|string[])} array - Lista de elementos (números o strings)
     * @return {(Number[]|string[])} array - Lista de elementos (números o strings) en orden inverso
     * */
    function invertido(array) {
      const arrayInvertido = [];
      for (let i = array.length - 1; i >= 0; i--) {
        arrayInvertido.push(array[i]);
      }
      return arrayInvertido;
    }

    /**
     * Devuelve un array de números a partir de un string con números separados por comas
     * @param {string} inputId - El ID del elemento HTML del cual extraer la lista de números
     * @return {Number[]} result - Lista de numeros
     * */
    function capturarInputDelUsuario(inputId) {
      return document.getElementById(inputId).value.split(",").map(Number);
    }

    /**
     * @typedef {Object} person
     * @property {String} name - Nombre de la persona
     * @property {Number} age - Edad de la persona
     * */

    /**
     * @type {person[]} 
     * */
    const _listaDePersonas = [];

    /**
     * Añade una nueva persona a la variable "global" _listaDePersonas
     * @param {string} nameInputId - El ID del elemento HTML con el nombre de la persona 
     * @param {string} ageInputId - El ID del elemento HTML con la edad de la persona 
     * @return {void}
     * */
    function añadirPersonaALaLista(nameInputId, ageInputId) {
      const nombre = document.getElementById(nameInputId).value;
      const edad = Number(document.getElementById(ageInputId).value);
      _listaDePersonas.push({ name: nombre, age: edad });

      const str = personArrayToString(_listaDePersonas);
      document.getElementById("readInput5").innerHTML = "[" + str + "]";
    }

    /**
     * Borra todos los elementos de la variable global _listaDePersonas
     * @return {void}
     * */
    function borrarPersonas() {
      // Lectura interesante sobre como borrar todos los elementos de un array:
      // https://stackoverflow.com/questions/1232040/how-do-i-empty-an-array-in-javascript
      _listaDePersonas.length = 0;
      const str = personArrayToString(_listaDePersonas);
      document.getElementById("readInput5").innerHTML = "[" + str + "]";
      document.getElementById("result5").innerHTML = "[" + str + "]";
    }

    /**
     * Devuelve un string compuesto por los elementos de la lista obtenida separados por comas
     * @param {person[]} personArray
     * @return {string}
     * */
    function personArrayToString(personArray) {
      const stringArray = personArray.map(function (p) {
        return '{name:"' + p.name + '", age:"' + p.age + '"}';
      })
      return stringArray.join(", ");
    }

    /**
     * Devuelve la lista de personas obtenida ordenada según edad y nombre de cada persona.
     * @param {person[]} personArray
     * @return {person[]}
     * */
    function ordenarPersonas(personArray) {
      return personArray.sort(function (a, b) {
        if (a.age < b.age)
          return -1;
        if (a.age > b.age)
          return 1;

        // Llegados a este punto, las dos personas tienen la misma edad
        if (a.name < b.name)
          return -1;
        if (a.name > b.name)
          return 1;

        return 0; // caso final por defecto: misma edad y mismo nombre
      }); // fin del .sort()
    }

    /**
     * Devuelve una lista de números enteros aleatorios entre -10 y 10.
     * @param {Number} length - La longitud de la lista a devolver
     * @return {Number[]} randomIntArray 
     * */
    function getRndIntArray(length) {
      const randomIntArray = [];
      for (let i = 0; i < length; i++) {
        randomIntArray.push(getRndInteger(-10, 10));
      }
      return randomIntArray;
    }

    /**
     * Devuelve un entero entre los parámetros min y max
     * @param {Number} min - El valor mínimo a devolver
     * @param {Number} max - El valor máximo a devolver
     * */
    function getRndInteger(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }