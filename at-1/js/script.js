function validarCampos() {
    const nome = document.querySelector("#nome").value.trim();
    const horaValor = parseFloat(document.querySelector("#vh").value.trim());
    const horaTrabalhada = parseFloat(document.querySelector("#ht").value.trim());

    // Validações de preenchimento
    if (!nome || isNaN(horaValor) || isNaN(horaTrabalhada)) {
        alert("Por favor, preencha todos os campos corretamente.");
        return false;
    }

    // Validações de valores
    if (horaValor < 20 || horaValor > 500) {
        alert("O valor por hora deve estar entre R$ 20,00 e R$ 500,00.");
        return false;
    }

    // Validações de horas trabalhadas
    if (horaTrabalhada < 20 || horaTrabalhada > 200) {
        alert("A quantidade de horas trabalhadas deve estar entre 20 e 200 horas por mês.");
        return false;
    }

    return true;
}

function calcularSalario() {
    if (!validarCampos()) {
        return; // Se a validação falhar, não continua
    }

    let nome = document.querySelector("#nome").value;
    let horaValor = parseFloat(document.querySelector("#vh").value);
    let horaTrabalhada = parseFloat(document.querySelector("#ht").value);

    let mult = horaValor * horaTrabalhada;

    let resultadoInss = "";
    let resultadoIrpf = "";

    if (mult <= 1500.99) {
        resultadoInss = mult * (7.5 / 100);
    } else if (mult <= 3000.99) {
        resultadoInss = mult * (9 / 100);
    } else if (mult <= 5000.99) {
        resultadoInss = mult * (12 / 100);
    } else {
        resultadoInss = mult * (14 / 100);
    }

    if (mult <= 1500.99) {
        resultadoIrpf = 0;
    } else if (mult <= 2000.99) {
        resultadoIrpf = mult * (7.5 / 100);
    } else if (mult <= 3000.99) {
        resultadoIrpf = mult * (15 / 100);
    } else if (mult <= 4000.99) {
        resultadoIrpf = mult * (22.5 / 100);
    } else {
        resultadoIrpf = mult * (27.5 / 100);
    }
    
    let valorLiquido = (mult - resultadoInss) - resultadoIrpf

    let desconto = `${nome}, o valor a receber líquido com os descontos do "INSS e IRPF" é: R$ ${valorLiquido.toFixed(2)}`;

    let textInss = `R$ ${resultadoInss.toFixed(2)}`;
    let textIrpf = `R$ ${resultadoIrpf.toFixed(2)}`;

    let descont = document.querySelector("#resultFim");
    descont.innerHTML = desconto;

    let valorBruto = document.querySelector("#bruto");
    valorBruto.innerHTML = `R$ ${mult.toFixed(2)}`;

    let liquido = document.querySelector("#liquido");
    liquido.innerHTML = `R$ ${valorLiquido.toFixed(2)}`;

    let inss = document.querySelector("#inss");
    inss.innerHTML = textInss;

    let irpf = document.querySelector("#irpf");
    irpf.innerHTML = textIrpf;
}

let botao = document.querySelector('.btn');
botao.addEventListener('click', calcularSalario);