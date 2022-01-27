function novaOperacao() {
    let opcao = prompt('Deseja fazer uma nova operação?\n1 - Sim\n2 - Não')

    if (opcao == 1) {
        calculadora()
    }else if (opcao == 2) {
        alert('Fim!')
    }else{
        alert('Digite uma opcao válida')
        novaOperacao()
    }
}

function calculadora() {
    const operacao = prompt('Escolha uma operação:\n1 - Soma(+)\n2 - Subtração(-)\n3 - Multiplicação(*)\n4 - Divisão(/)\n5 - Divisão Inteira(%)\n6 - Potenciação(**)')
    let n1 = Number(prompt('Insira o primeiro valor: '));
    let n2 = Number(prompt('Insira o segundo valor: '));
    let resultado;

    function soma(){
        resultado = n1 + n2;
        alert(`${n1} + ${n2} = ${resultado}`);
        novaOperacao()
    }

    function subtracao(){
        resultado = n1 - n2;
        alert(`${n1} - ${n2} = ${resultado}`);
        novaOperacao()
    }

    function multiplicacao(){
        resultado = n1 * n2;
        alert(`${n1} * ${n2} = ${resultado}`);
        novaOperacao()
    }

    function divisao(){
        resultado = n1 / n2;
        alert(`${n1} / ${n2} = ${resultado}`);
        novaOperacao()
    }

    function divisaoInteira(){
        resultado = n1 % n2;
        alert(`O resto da divisao inteira de ${n1} por ${n2} = ${resultado}`);
        novaOperacao()
    }

    function potenciacao(){
        resultado = n1 ** n2;
        alert(`${n1} elevado a ${n2} = ${resultado}`);
        novaOperacao()
    }

    if (operacao == 1) {
        soma();
    } else if (operacao == 2) {
        subtracao();
    } else if (operacao == 3){
        multiplicacao();
    }else if (operacao == 4) {
        divisao();
    }else if (operacao == 5) {
        divisaoInteira();
    }else if (operacao == 6) {
        potenciacao();
    }
}
calculadora()