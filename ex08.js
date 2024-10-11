class Pessoa {
    constructor(id, nome, idade){
        this.id = id;
        this.nome = nome;
        this.idade = idade;
    }
}

function newPessoa (n){
    const nomes = ['Alice', 'Bob', 'Carlos', 'Daniela', 'Eduardo', 'Fernanda', 'Gabriel', 'Helena', 'Igor', 'Júlia'];
    const numAleatorio = (min, max) => {
        return parseInt(Math.random() * (max - min) + min);
    }
    let p = []
    for(let i = 0; i<n; i++){
        p[i] = new Pessoa((i+1), nomes[numAleatorio(0, 10)], numAleatorio(18, 90))
    } 
    return p;
}


let quant = 4
let p = newPessoa(quant)
for(let i in p){
    console.log(p[i])
}





  
  



