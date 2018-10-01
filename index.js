let dinheiro = process.argv [2];
let taxaConversao = 0.25;


if(!dinheiro){
    console.log('Informe um valor para conversão:')
}
else{
    dinheiro = dinheiro.replace(',','.'); //replace substitui o valor atual por um novo.

    let resultado = dinheiro * taxaConversao;
    
    if(isNaN(resultado)){
        console.log('O valor para conversão deve ser um valor númerico.');
    }
    else{
        console.log(`O resultado convertido é US$${resultado}`);
    }

}