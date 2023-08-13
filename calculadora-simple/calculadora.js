// Función de suma
function suma(num1, num2) {
    return num1 + num2;
}

// Función de resta
function resta(num1, num2) {
    return num1 - num2;
}

// Función de multiplicación
function multiplicacion(num1, num2) {
    return num1 * num2;
}

// Función de división
function division(num1, num2) {
    if (num2 === 0) {
        window.alert("No es posible dividir por 0, utilice otro valor.");
        return;
    }
   else {
    return num1 / num2;
}
}

// Cómo obtener el resultado de la operación elegida
function calcularResultado() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let operador = document.getElementById("operador").value;
    let Resultado = 0;


// Validar datos numéricos
if (isNaN(num1) || isNaN(num2)) {
    window.alert("Error: sólo se admite valores numéricos. Por favor ingrese nuevamente los valores para realizar la operación.");
    return;
}

// Eleccion de la función de acuerdo al operador
    switch (operador) {
        case "+":
            Resultado = suma(num1, num2);
            break;
        case "-":
            Resultado = resta(num1, num2);
            break;
        case "*":
            Resultado = multiplicacion(num1, num2);
            break;
        case "/":
            Resultado = division(num1, num2);
            break;
        default:
            alert("Operador no válido");
            return;
    }


// Limitar resultados para que no excedan los 18 caracteres 
    if (Resultado > 999999999999999999 || Resultado < -999999999999999999) {
       window.alert("El resultado excede el máximo de caracteres que se pueden mostrar. Máximo: 18 caracteres.")
        Resultado = 0
    }
    document.getElementById("Resultado").textContent = "Resultado = " + Resultado;
}


// Función para limpiar la calculadora y poder ingresar nuevos valores
function limpiarCalculadora() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("Resultado").textContent = "Resultado = ... ";
}



