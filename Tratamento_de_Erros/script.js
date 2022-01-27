function validaArray(arr, num) {
    try {
        if (!arr && !num) 
            throw new ReferenceError('Envie os parâmetros')
        if (typeof arr !== 'object') 
            throw TypeError('Precisa ser obj')
        if (typeof num !== 'number') 
            throw TypeError('Precisa ser number')
        if (arr.lenght !== num) 
            throw RangeError('Tamanho Inválido')    
        return arr
            
        } 
    catch (e) {
        if(e instanceof ReferenceError){
            console.log("É um Reference Error!")
            console.log(e.message)
        } else if (e instanceof TypeError){
            console.log("É um Type Error!")
            console.log(e.message)
        }else if (e instanceof RangeError){
            console.log("É um Range Error!")
            console.log(e.message)
        }else{
            console.log("Tipo de erro não esperado" + e)
        }
    }
}

console.log(validaArray([1, 2], 3))

