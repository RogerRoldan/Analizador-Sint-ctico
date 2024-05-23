
// Función para agregar texto al input
function addTextToInput(text) {
  var input = document.getElementById("textInputCalculator");
  input.value += text;
}

// Función para limpiar
function clearInput() {
  var input = document.getElementById("textInputCalculator");
  var inputEcuacion = document.getElementById("resultado");
  var inputPolinomioSimplificado = document.getElementById(
    "inputPolinomioSimplificado"
  );
  input.value = "";
  input.style.backgroundColor = "white";
  inputEcuacion.value = "";
  inputPolinomioSimplificado.value = "";
}

// Función para borrar el último carácter del input
function deleteLastCharacter() {
  var input = document.getElementById("textInputCalculator");
  input.value = input.value.slice(0, -1); // Remueve el último carácter
}

window.onload = function () {
  var buttons = document.querySelectorAll("button");
  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      console.log(button.textContent);
      if (button.textContent === "Limpiar") {
        clearInput();
      } else if (button.textContent === "Borrar") {
        deleteLastCharacter();
      } else if (button.textContent === "Analizar") {
        analizarEcuacion();
      } else {
        addTextToInput(button.textContent);
      }
    });
  });
};

function validarEcuacion(ecuacion) {
  console.log("entra a validar");

  const regexPrimerGrado =
    /^[-+]?(\d*x|\d+)(\s*[-+]\s*\d*x|\s*[-+]\s*\d+)*\s*=\s*[-+]?(\d*x|\d+)(\s*[-+]\s*\d*x|\s*[-+]\s*\d+)*$/i;
  const regexSegundoGrado =
    /^([-+]?\d*x\^2\s*([-+]\s*\d*x)?\s*([-+]\s*\d+)?\s*=\s*[-+]?\d+)$/;
  const regexCubica =
    /^([-+]?\d*x\^3\s*([-+]\s*\d*x\^2)?\s*([-+]\s*\d*x)?\s*([-+]\s*\d+)?\s*=\s*[-+]?\d+)$/;
  const regexTrigonométrica =
    /^(\s*[-+]?\d*\s*(sin|cos|tan)\(([a-zA-Z0-9π\/()+\-*]+\s*([+]\s*[a-zA-Z0-9π\/()+\-*]+\s*)*)\)(\^\d+)?\s*([-+]\s*[-+]?\d*\s*(sin|cos|tan)\(([a-zA-Z0-9π\/()+\-*]+\s*([+]\s*[a-zA-Z0-9π\/()+\-*]+\s*)*)\)(\^\d+)?)*)\s*=\s*[-+]?\d+(\.\d+)?(\/\d+)?\s*$/;
  const regexRadicalGeneral =
    /^([-+]?\d*\.?\d+)?((?:√|³√|ⁿ√|\d+√|\d*\^\d*\/?\d*)\(\s*[-+]?(\d*\.?\d*[a-zA-Z])(?:\^\d+)?(?:\s[-+/]\s[-+]?(\d*\.?\d*[a-zA-Z])(?:\^\d+)?)\s*\)(?:\^\d*\/?\d*)?)(?:\s*[-+/]\s[-+]?(\d*\.?\d*[a-zA-Z])(?:\^\d+)?)?\s(?:\+|\-|\|\/)?\s((?:√|³√|ⁿ√|\d+√|\d*\^\d*\/?\d*)\(\s*[-+]?(\d*\.?\d*[a-zA-Z])(?:\^\d+)?(?:\s[-+/]\s[-+]?(\d*\.?\d*[a-zA-Z])(?:\^\d+)?)\s*\)(?:\^\d*\/?\d*)?)\s=\s*([-+]?\d*\.?\d*|\d*\^\d*\/?\d*|√\([a-zA-Z0-9+/^\s]+\)|(?:\d+\^\d\/?\d*)|(?:[-+]?(\d*\.?\d*[a-zA-Z0-9](?:\^\d+)?|√\([a-zA-Z0-9+/^\s]+\))))?(?:\s*[-+/]\s[-+]?(\d*\.?\d*[a-zA-Z0-9](?:\^\d+)?)?)$/;
  //const regexLogaritmica = /log(?[a-zA-Z]\d)?\(\s*([-+]?(\d+|\w+|log\(\w+\)|\(.+\))(?:\s*[-+\/^]\s(\d+|\w+|log\(\w+\)|\(.+\)))?)\s*\)\s*=\s*([-+]?\s*\d+\.?\d*|\s*[-+]?\s*log(?[a-zA-Z]\d)?\(\s*([-+]?(\d+|\w+|log\(\w+\)|\(.+\))(?:\s*[-+\/^]\s(\d+|\w+|log\(\w+\)|\(.+\)))?)\s*\))/;
  const regexExponencial =
    /^(\(?(?:\d*\.?\d*|e)\^[a-zA-Z]+\s*[+\-/]\s\d*\.?\d*\)?|\(?(?:\d*\.?\d*|e)\^[a-zA-Z]+\)?|\(?(?:\d*\.?\d*|e)\^[a-zA-Z]+\s*[+\-/]\s(?:\d*\.?\d*|e)\)?|\(?(?:\d*\.?\d*|e)\^[a-zA-Z]+\s*[+\-/]\s(?:\d*\.?\d*|e)\s*[+\-/]\s(?:\d*\.?\d*|e)\)?)/;
  const regexExponencialIrracional =
    /^(\(?\d*\.?\d*\)?[+\-/])?(\(?[+\-]?\d\.\d+\)?|\(?\d+\)?\^[a-zA-Z]+|e[+\-/]\d\.\d*|\(?\d+\)?\^[a-zA-Z]+|\(?[+\-]?\d*\.\d+\)?|\(?\d+\)?\^[a-zA-Z]+)?(\(\w*\)\^)?([a-zA-Z]+\^\d+|\d*\.\d+\^\d+|e\^\d+|\(?\d+\)?\^\d+|\d+\.\d+\^\d+|\w+\^\d+)?=?(\d+)?$/;
  //const regexLogaritmicaIrracional = /^log(?[a-zA-Z]\d)?\(\s*([-+]?(\d+|\w+|log\(\w+\)|\(.+\))(?:\s*[-+\/^]\s(\d+|\w+|log\(\w+\)|\(.+\)))?)\s*\)\s*=\s*([-+]?\s*\d+\.?\d*|\s*[-+]?\s*log(?[a-zA-Z]\d)?\(\s*([-+]?(\d+|\w+|log\(\w+\)|\(.+\))(?:\s*[-+\/^]\s(\d+|\w+|log\(\w+\)|\(.+\)))?)\s*\))$/;

  if (!validarParentesisBalanceados(ecuacion)) {
    return "Paréntesis desbalanceados";
  } else if (regexPrimerGrado.test(ecuacion)) {
    return "Ecuación de primer grado";
  } else if (regexSegundoGrado.test(ecuacion)) {
    return "Ecuación de segundo grado";
  } else if (regexCubica.test(ecuacion)) {
    return "Ecuación cúbica";
  } else if (regexTrigonométrica.test(ecuacion)) {
    return "Ecuación trigonométrica";
  } else if (regexRadicalGeneral.test(ecuacion)) {
    return "Ecuación radical general";
  } else if (regexExponencial.test(ecuacion)) {
    return "Ecuación exponencial";
  } else if (regexExponencialIrracional.test(ecuacion)) {
    return "Ecuación exponencial irracional";
  } else {
    return "Expresión no reconocida";
  }
}

function simplificarEcuacion(polinomio) {
  if (!validarParentesisBalanceados(polinomio)) {
    return "Paréntesis desbalanceados";
  }

  var despuesIgual = polinomio.split("=")[1];
  polinomio = polinomio.split("=")[0];

  // Actualiza esta expresión regular para manejar funciones trigonométricas con argumentos más complejos
  const terminos = polinomio
    .replace(/\s/g, "")
    .match(
      /-?\d*\.?\d*(sin|cos|tan)\([^\)]+\)(\^\d+)?|-?\d*\.?\d*x\^\d+|-?\d*\.?\d*x|-?\d+/g
    );

  const coeficientes = {};

  terminos.forEach((term) => {
    const match = term.match(
      /(-?\d*\.?\d*)(sin|cos|tan)\(([^\)]+)\)(\^\d+)?|(-?\d*\.?\d*)(x)?(\^\d+)?/
    );
    let coeficiente = match[1]
      ? parseFloat(match[1]) || 1
      : parseFloat(match[5]) || (match[5] ? 0 : 1);
    const trigFunc = match[2] ? match[2] + "(" + match[3] + ")" : "";
    const potencia = match[4] || match[7] || "";

    const clave = trigFunc + (match[6] ? "x" : "") + potencia;

    if (match[1] === "-") coeficiente = -1;

    if (coeficientes[clave]) {
      coeficientes[clave] += coeficiente;
    } else {
      coeficientes[clave] = coeficiente;
    }
  });

  const resultado = Object.keys(coeficientes)
    .map((clave) => {
      const valor = coeficientes[clave];
      if (
        clave === "x" ||
        clave.includes("sin") ||
        clave.includes("cos") ||
        clave.includes("tan")
      ) {
        return (valor === 1 ? "" : valor === -1 ? "-" : valor) + clave;
      } else {
        return valor + clave;
      }
    })
    .join(" + ")
    .replace(/\+\s-/g, "- ");

  return resultado + "=" + despuesIgual;
}

function analizarEcuacion() {
  var inputEcuacion = document.getElementById("resultado");
  inputEcuacion.value = "";
  var input = document.getElementById("textInputCalculator");

  //Aqui simplifico la ecuación
  var ecuacionSimplificada = simplificarEcuacion(input.value);

  var tipoEcuacion = validarEcuacion(ecuacionSimplificada);

  inputEcuacion.value += tipoEcuacion;
  if (
    tipoEcuacion === "Paréntesis desbalanceados" ||
    tipoEcuacion === "Expresión no reconocida"
  ) {
    input.style.backgroundColor = "red";
  } else {
    input.style.backgroundColor = "lightgreen";
  }

  var inputPolinomioSimplificado = document.getElementById(
    "inputPolinomioSimplificado"
  );
  inputPolinomioSimplificado.value = ecuacionSimplificada;
}

function validarParentesisBalanceados(ecuacion) {
  const stack = [];
  for (let i = 0; i < ecuacion.length; i++) {
    if (ecuacion[i] === "(") {
      stack.push("(");
    } else if (ecuacion[i] === ")") {
      if (stack.length === 0) {
        return false;
      }
      stack.pop();
    }
  }
  return stack.length === 0;
}
