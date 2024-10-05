function resultado (){
    // Notas
    let n = parseFloat(document.querySelector("#natureza").value);
    let h = parseFloat(document.querySelector("#humanas").value);
    let l = parseFloat(document.querySelector("#linguagens").value);
    let m = parseFloat(document.querySelector("#matematica").value);
    let r = parseFloat(document.querySelector("#redacao").value);

    let resultadoN = ""
    let resultadoH = ""
    let resultadoL = ""
    let resultadoM = ""
    let resultadoR = ""

    if (n > 550 ) {
        resultadoN = "Aprovado"
    } else if (n < 400) {
        resultadoN = "Reprovado"
    } else {
        resultadoN = "Recuperação"
    }

    if (h > 550 ) {
        resultadoH = "Aprovado"
    } else if (h < 400) {
        resultadoH = "Reprovado"
    } else {
        resultadoH = "Recuperação"
    }

    if (l > 550 ) {
        resultadoL = "Aprovado"
    } else if (l < 400) {
        resultadoL = "Reprovado"
    } else {
        resultadoL = "Recuperação"
    }

    if (m > 550 ) {
        resultadoM = "Aprovado"
    } else if ( m < 400) {
        resultadoM = "Reprovado"
    } else {
        resultadoM = "Recuperação"
    }

    if (r > 550 ) {
        resultadoR = "Aprovado"
    } else if (r < 400) {
        resultadoR = "Reprovado"
    } else {
        resultadoR = "Recuperação"
    }


    let resultN = document.querySelector("#nResult");
    resultN.innerHTML = resultadoN

    let resultH = document.querySelector("#hResult");
    resultH.innerHTML = resultadoH

    let resultL = document.querySelector("#lResult");
    resultL.innerHTML = resultadoL

    let resultM = document.querySelector("#mResult");
    resultM.innerHTML = resultadoM

    let resultR = document.querySelector("#rResult");
    resultR.innerHTML = resultadoR
}

let botao = document.querySelector('.btn');
botao.addEventListener('click', resultado);