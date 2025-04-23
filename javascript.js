function calcular(op){
    var number1 = parseFloat(document.getElementById("number1").value);
    var number2 = parseFloat(document.getElementById("number2").value);
    var output = 0;

    switch(op){
    case "+" : output = number1 + number2; break;
    case "-" : output = number1 - number2; break;
    case "*" : output = number1 * number2; break;
    case "/" : output = number1 / number2; break;

    }

    document.getElementById("output").value = output;
}