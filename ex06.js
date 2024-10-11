const quantVogais = (str) => {
    let quant = 0;
    let letras = str.split('');

    for (let i = 0; i < letras.length; i++) {
        let letMaiusc = letras[i].toUpperCase()
        console.log(letMaiusc)
        if(letMaiusc == 'A' || letMaiusc == 'E' || letMaiusc == 'I' || letMaiusc == 'O' || letMaiusc == 'U'){
            quant++;
            console.log(letMaiusc)
        } 
    }
    return quant;
}

let str = 'tEStaNdO';
console.log(quantVogais(str));

