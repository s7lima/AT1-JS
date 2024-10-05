function aoClicar (){
    let campo = document.querySelector('#meuCampo');
    let valorDigitado = campo.value;
    alert('Você clicou! e tá escrito"' + valorDigitado + '"')
}

let botao = document.querySelector('.btnExibaValor');
botao.addEventListener('click', aoClicar);
