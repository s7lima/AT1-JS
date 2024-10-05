function calcularSalario (){
    let nome = document.querySelector("#nome").value;
    let horaValor = parseFloat(document.querySelector("#vh").value);
    let horaTrabalhada = parseFloat(document.querySelector("#ht").value);

    let mult = horaValor * horaTrabalhada ;

    let resultadoInss = "";
    let resultadoIrpf = "";
    
    if ( mult <= 1500.99) {
        resultadoInss = mult * (7.5 / 100)
    } else if (mult <= 3000.99 ) {
        resultadoInss = mult * (9 / 100)
    } else if (mult <= 5000.99 ) {
        resultadoInss = mult * (12 / 100)
    } else {
        resultadoInss = mult * (14 / 100)
    }
    
    if ( mult <= 1500.99) {
        resultadoIrpf = 0
    } else if (mult <= 2000.99 ) {
        resultadoIrpf = mult * (7.5 / 100)
    } else if (mult <= 3000.99 ) {
        resultadoIrpf = mult * (15 / 100)
    } else if (mult <= 4000.99 ) {
        resultadoIrpf = mult * (22.5 / 100)
    } else {
        resultadoIrpf = mult * (27.5 / 100)
    }

    let desconto = `${nome} o valor a receber liquido com os descontos do "INSS e IPRF" é: R$ ${(mult - resultadoInss) - resultadoIrpf}`;

    let textInss = `R$ ${resultadoInss}`;

    let textIrpf = `R$ ${resultadoIrpf}`;
    
    let descont = document.querySelector("#resultFim");
    descont.innerHTML = desconto

    let valorBruto = document.querySelector("#bruto")
    valorBruto.innerHTML = mult

    let inss = document.querySelector("#inss");
    inss.innerHTML = textInss

    let irpf = document.querySelector("#irpf");
    irpf.innerHTML = textIrpf
}

let botao = document.querySelector('.btn');
botao.addEventListener('click', calcularSalario);
