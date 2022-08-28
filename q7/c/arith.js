function calculate(potencia, diasmes, horasdia, precohora) {
    var tb = document.getElementById("tb");
    var qtdLinhas = tb.rows.length;
    var linha =  tb.insertRow(qtdLinhas);

    var cellPot  = linha.insertCell(0);
    var cellDias  = linha.insertCell(1);
    var cellHoras  = linha.insertCell(2);
    var cellPrecoHora  = linha.insertCell(3);
    var cellValorTotal  = linha.insertCell(4);
    var cellValorTotalHora  = linha.insertCell(5);

    var c = consumo(potencia, diasmes, horasdia, precohora);

    cellPot.innerHTML  = potencia;
    cellDias.innerHTML  = diasmes;
    cellHoras.innerHTML = horasdia;
    cellPrecoHora.innerHTML = precohora;
    cellValorTotal.innerHTML = "R$ " + parseFloat(c).toFixed(2);
    cellValorTotalHora.innerHTML = "R$ "  + parseFloat(c/(diasmes*horasdia)).toFixed(3);
}

function consumo(potencia, diasmes, horasdia, precohora){
    var c = ((potencia * diasmes * horasdia)/1000) * precohora;

    return  c;
}