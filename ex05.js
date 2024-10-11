const numinvertido = (n) => {
    let ni = ''; 
    let nString = n.toString();
    let elem = nString.split('');

    for (let i = elem.length - 1; i >= 0; i--) {
        ni += elem[i];
    }
    return parseInt(ni);
}

let num = 123456;
console.log(numinvertido(num));