const str = (msg) => {
    if(n==1){
        return msg
    }else{
        return msg + str((n-1), msg)
    }
}

let msg = 'msgteste'
let num = 5

console.log(str(msg, n))