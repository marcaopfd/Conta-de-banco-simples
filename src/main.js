const h1Title =  document.querySelector('#h1-title');
const button = document.querySelector('#button-start');
const planilha = document.querySelector('#div-planilha');
const botaoLista = document.querySelectorAll('.button-saldo');
let saldo = 0;
let name;

button.addEventListener('click', function(){
  const name = prompt('Digite seu nome aqui');
  console.log(name);
  h1Title.innerHTML = `Olá ${name}! Bem vindo ao Seu Gestor Financeiro!!!`;
  button.classList.add('hidden');
  planilha.classList.remove('hidden');
});


const saldoText = document.querySelector('#planilha-saldo');
saldoText.innerHTML = `Seu Saldo é: ${saldo} Reais`

for (let botao = 0; botao < botaoLista.length; botao++){
    if(botao === 0){
      botaoLista[botao].onclick = function(){
         let adicionarValor = Number(prompt('Quanto voce quer adicionar?'));
         saldo = saldo + adicionarValor;
         saldoText.innerHTML = `Seu novo Saldo é: ${saldo} Reais`
         return saldo
      }
    } else if (botao ===1) {
      botaoLista[botao].onclick = function(){
        let removerValor = Number(prompt("Quando valor voce quer remover?"));
        if (saldo >= removerValor) {
          saldo = saldo - removerValor;
          saldoText.innerHTML = `Seu novo Saldo é: ${saldo} Reais`
          return saldo
        } else {
          alert('Voce nao tem saldo suficiente pra realizar essa transacao!')
        }
    }
    } else if (botao === 2){
      botaoLista[botao].onclick = function(){
        let dividirValor = Number(prompt('por quanto voce quer dividir esse valor'))
        if( saldo > 0){
          saldo = saldo/dividirValor;
          saldoText.innerHTML = `Seu novo Saldo é: ${saldo} Reais`
        } else {
          alert('Voce nao tem saldo pra realizar essa funcao')
        }
    }
    } else if (botao === 3 ) {
      botaoLista[botao].onclick = function(){
      saldo = 0;
      saldoText.innerHTML = `Seu Saldo é: ${saldo} Reais, zeramos sua conta! Comece de novo!`
    }  
    } else {
    
      
    }  
}




  









