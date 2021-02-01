
//variables globales
var numeroUno;
var numeroDos;
var operacion;

/**
 * @author José Daniel Benavides
 * Este procedimiento lo que hace es asignar las variables de cada elemento en la calculadora
 * y su accion en el programa mediante 'onClick'
 */
function calculadora(){
    //variable pantalla
    let pantalla = document.getElementById("pantalla");
    //variables botones
    let cero = document.getElementById("cero");
    let uno = document.getElementById("uno");
    let dos = document.getElementById("dos");
    let tres = document.getElementById("tres");
    let cuatro = document.getElementById("cuatro");
    let cinco = document.getElementById("cinco");
    let seis = document.getElementById("seis");
    let siete = document.getElementById("siete");
    let ocho = document.getElementById("ocho");
    let nueve = document.getElementById("nueve");
    //variables operadores
    let suma = document.getElementById("suma");
    let resta = document.getElementById("resta");
    let multiplicacion = document.getElementById("multiplicacion");
    let division = document.getElementById("division");
    let clear = document.getElementById("clear");
    let igual = document.getElementById("igual");
    let decimal = document.getElementById("decimal");

    //mostrar en pantalla
    uno.onclick = function(){
        pantalla.textContent = pantalla.textContent + '1';
    }
    dos.onclick = function(){
        pantalla.textContent = pantalla.textContent + '2';
    }
    tres.onclick = function(){
        pantalla.textContent = pantalla.textContent + '3';
    }
    cuatro.onclick = function(){
        pantalla.textContent = pantalla.textContent + '4';
    }
    cinco.onclick = function(){
        pantalla.textContent = pantalla.textContent + '5';
    }
    seis.onclick = function(){
        pantalla.textContent = pantalla.textContent + '6';
    }
    siete.onclick = function(){
        pantalla.textContent = pantalla.textContent + '7';
    }
    ocho.onclick = function(){
        pantalla.textContent = pantalla.textContent + '8';
    }
    nueve.onclick = function(){
        pantalla.textContent = pantalla.textContent + '9';
    }
    cero.onclick = function(){
        pantalla.textContent = pantalla.textContent + '0';
    }
    decimal.onclick = function(){
        pantalla.textContent = pantalla.textContent + '.';
    }

    //operaciones
    clear.onclick = function(){
        pantalla.textContent = "";
        numeroUno = 0
        numeroDos = 0
        operacion = "";
    }

    suma.onclick = function(){
        numeroUno = pantalla.textContent;
        operacion = "+";
        limpiarPantalla();
    }

    resta.onclick = function(){
        numeroUno = pantalla.textContent;
        operacion = "-";
        limpiarPantalla();

    }

    multiplicacion.onclick = function(){
        numeroUno = pantalla.textContent;
        operacion = "*";
        limpiarPantalla();

    }

    division.onclick = function(){
        numeroUno = pantalla.textContent;
        operacion = "/";
        limpiarPantalla();

    }

    porcentaje.onclick = function(){
        numeroUno = pantalla.textContent;
        operacion = "%";
        pantalla.textContent = pantalla.textContent + '%';
    }

    igual.onclick = function(){
        numeroDos = pantalla.textContent;
        resultado();

    }
    function limpiarPantalla(){
        pantalla.textContent = "";
    }
    /**
     * @author  Jose Daniel Benavides
     * Esta funcion evalua el simbolo que se utiliza en variable operacion para ejecutar la op correcta
     */
    function resultado(){
        var total = 0;
        switch(operacion){
          case "+":
            total = parseFloat(numeroUno) + parseFloat(numeroDos);
            break;
          case "-":
            total = parseFloat(numeroUno) - parseFloat(numeroDos);
              break;
          case "*":
            total = parseFloat(numeroUno) * parseFloat(numeroDos);
            break;
          case "/":
            total = parseFloat(numeroUno) / parseFloat(numeroDos);
            break;
           case "%":
             numeroDos = 100;
             total = parseFloat(numeroUno) / parseFloat(numeroDos);
            break;
        }
        limpiarPantalla();
        pantalla.textContent = total;
      }
}
