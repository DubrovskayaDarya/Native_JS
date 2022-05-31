function descendingOrder(n){
    return +Array.from(String(n), Number).sort((a,b)=>b-a).join('')
}
