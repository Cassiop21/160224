document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    validarNumero();
  });

  function obterMensagem(n) {
    if (n < 1 || n > 50 || isNaN(n)) return "Moscou Parceira? O Numero Deve Ser De 0 A 50!";
    if (n <= 10) return "O Seu Namorado Vai Ficar Bravo se Ficar Sabendo Disso!";
    if (n <= 20) return "Isso é muito pouco Parceira!";
    if (n <= 30) return "Eu Acho Que é Mais! ";
    if (n <= 40) return "Pode Melhorar né?";
    return "Que FoFo, Mas Claramente Seu Namorado Te Ama Mais!";
  }

  let timeout 

  function validarNumero() {
    if (timeout) clearTimeout(timeout)
    let inputNumero =document.getElementById("numero")
    let caixaDeMensagem = document.getElementById("mensagem")
    let numero = Number(inputNumero.value);
    let mensagem = obterMensagem(numero)

    caixaDeMensagem.innerHTML = mensagem
    caixaDeMensagem.style.display = "block"

    timeout = setTimeout(()=> {
      caixaDeMensagem.style.display = 'none'
    }, 2000)
  }