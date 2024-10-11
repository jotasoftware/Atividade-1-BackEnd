const tabuada = (i, n, vet) => {
    if(i==0){
        vet[i] = i*n; 
    }else{
        vet[i] = i*n;
        tabuada((i-1), n, vet);
    }
}

let num = 47;
let tab = 10; // tabuada de ate quanto?
let vet = [];

tabuada(tab, num, vet)

for(let i in vet){
    console.log(`${num} * ${i} = ${vet[i]}`)
}