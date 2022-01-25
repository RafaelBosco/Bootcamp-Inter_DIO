function comparaNumeros(n1, n2) {
    let comparacao = '';
    if (n1 == n2) {
        comparacao = "iguais";
    } else {
        comparacao = "diferentes";
    }
    let resultado = n1 + n2
    let somaCompara10 = '';
    let somaCompara20 = '';

    if (resultado < 10) {
        somaCompara10 = 'menor';
        somaCompara20 = 'menor';
    } else if (resultado < 20){
        somaCompara10 = 'maior';
        somaCompara20 = 'menor';
    }else {
        somaCompara10 = 'maior';
        somaCompara20 = 'maior';
    }

    alert(`Os números ${n1} e ${n2} são ${comparacao}. Sua soma é ${resultado}, que é ${somaCompara10} que 10 e ${somaCompara20} que 20`)
}    

var n1 = Number(prompt('Digite um numero'));
var n2 = Number(prompt('Digite outro numero'));

comparaNumeros(n1, n2)


validaNumero();