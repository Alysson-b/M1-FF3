const arr = []

const input = document.getElementById('arrayInput')
const btnAgrupar = document.getElementById('agrupar')
const btnExibir = document.getElementById('exibirArray')
const divResult = document.getElementById('result')

btnAgrupar.addEventListener('click', function(){
    agrupar()

})

btnExibir.addEventListener('click', function(){
    exibir();
})


function agrupar(){

    const inputValue = input.value.trim();  
    if(inputValue){

        const numeros = inputValue.split(',').map(Number);

       arr.push(numeros)
       input.value = '';
    }else{
        alert('Insira um valor')
    }

}
function exibir(){
    if(arr.length > 0){
        
        const unicoArray = arr.flat();
        const  ordemAscendente = unicoArray.sort((a, b) => a - b)

        divResult.innerText = 'Array Ascendente: ' + ordemAscendente.join(', ')
    }else{
        divResult.innerText = 'o array está vazio.'
        
    }
}
