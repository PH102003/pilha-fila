let pilha_fila = [];

const inputNumero = document.getElementById("inputNumero");
const btAdd = document.getElementById("btAdd");
const btRemover = document.getElementById("btRemover");
const btLimpar = document.getElementById("btLimpar");

//let objeto = {};

const handleClickBtAdd = () => {
    let  numero = inputNumero.value;
    if(!numero){
        alert("Digite um número!");
        return;
    }

}
function saida(){
    let x = document.getElementById("inputNumero").value;
    document.getElementById("preObjeto").innerHTML = x;   
}

btAdd.onclick = handleClickBtAdd;
btRemover.onclick = handleClickBtRemover;
