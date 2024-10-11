function fat(n) {
    if(n==1){
        return 1
    }else{
        return n * fat(n-1)
    }
}

let valor = 15

console.log(fat(valor))


