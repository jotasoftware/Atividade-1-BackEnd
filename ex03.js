const calc = (n1, n2, op) => {
    switch(op){
        case '+':
            return n1+n2;
        case '-':
            return n1-n2;
        case '*':
            return n1*n2;
        case ':':
            if(n2!=0) return n1/n2;
        default:
            return null
    }
}

let n1 = 5;
let n2 = 0;
let operacao = ':'

console.log(calc(n1, n2, operacao))