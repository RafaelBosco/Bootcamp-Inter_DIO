var frase = "arara"


function conferePalindromo(frase) {
    
    if (frase.split("").reverse().join("") === frase){
        console.log('É um Palíndromo')
    }else{
        console.log('Não é um Palíndromo')
    }    
}

conferePalindromo(frase)