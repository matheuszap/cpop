function calculate(n1, n2) {
    var tb = document.getElementById("tb");
    var qtdLinhas = tb.rows.length;
    var linha =  tb.insertRow(qtdLinhas);

    var cellSoma  = linha.insertCell(0);
    var cellProd  = linha.insertCell(1);
    var cellDiv  = linha.insertCell(2);
    var cellRest  = linha.insertCell(3);

    cellSoma.innerHTML  = parseInt(n1) + parseInt(n2);
    cellProd.innerHTML  = n1 * n2;
    cellDiv.innerHTML = n1 / n2;
    cellRest.innerHTML = n1 % n2;

}

function soma(a, b){
    return a + b;
}