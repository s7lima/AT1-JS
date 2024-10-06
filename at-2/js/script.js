function validarCampos() {
    const nome = document.querySelector("#nome").value.trim();
    const numIncricao = document.querySelector("#nInscricao").value.trim();
    const data = document.querySelector("#date").value.trim();
    const natureza = document.querySelector("#natureza").value.trim();
    const humanas = document.querySelector("#humanas").value.trim();
    const linguagens = document.querySelector("#linguagens").value.trim();
    const matematica = document.querySelector("#matematica").value.trim();
    const redacao = document.querySelector("#redacao").value.trim();

    if (!nome || !numIncricao || !data || !natureza || !humanas || !linguagens || !matematica || !redacao) {
        alert("Por favor, preencha todos os campos.");
        return false;
    }
    return true;
}

function resultado() {
    if (!validarCampos()) {
        return; // Se a validação falhar, não continua
    }

    // Dados participantes
    let nome = document.querySelector("#nome").value;
    let numIncricao = parseFloat(document.querySelector("#nInscricao").value);
    let data = parseInt(document.querySelector("#date").value);

    // Validação inscrição!
    let inscricaoResult = `2024${numIncricao}`;
    let dataResult = "";

    // Data
    if (data < 1901 || data > 2007) {
        dataResult = "VALOR INVALIDO!!";
    } else {
        dataResult = data;
    }

    // Notas
    let n = parseFloat(document.querySelector("#natureza").value);
    let h = parseFloat(document.querySelector("#humanas").value);
    let l = parseFloat(document.querySelector("#linguagens").value);
    let m = parseFloat(document.querySelector("#matematica").value);
    let r = parseFloat(document.querySelector("#redacao").value);

    const calcularResultado = (nota) => {
        if (nota > 550) return { resultado: "Aprovado", classe: "aprovado" };
        if (nota < 400) return { resultado: "Reprovado", classe: "reprovado" };
        return { resultado: "Recuperação", classe: "recuperacao" };
    };

    // Resultados
    const resultados = {
        n: calcularResultado(n),
        h: calcularResultado(h),
        l: calcularResultado(l),
        m: calcularResultado(m),
        r: calcularResultado(r)
    };

    // Atualizar o HTML com classes
    document.querySelector("#nResult").innerHTML = `Natureza <span class="${resultados.n.classe}">${resultados.n.resultado}</span>`;
    document.querySelector("#hResult").innerHTML = `Humanas <span class="${resultados.h.classe}">${resultados.h.resultado}</span>`;
    document.querySelector("#lResult").innerHTML = `Linguagens <span class="${resultados.l.classe}">${resultados.l.resultado}</span>`;
    document.querySelector("#mResult").innerHTML = `Matemática <span class="${resultados.m.classe}">${resultados.m.resultado}</span>`;
    document.querySelector("#rResult").innerHTML = `Redação <span class="${resultados.r.classe}">${resultados.r.resultado}</span>`;

    document.querySelector("#nomeResult").innerHTML = nome;
    document.querySelector("#anoResult").innerHTML = dataResult;
    document.querySelector("#inscriResult").innerHTML = inscricaoResult;
}

let botao = document.querySelector('.btn');
botao.addEventListener('click', resultado);