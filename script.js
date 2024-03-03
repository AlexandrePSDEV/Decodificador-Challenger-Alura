//Testando arquivo js sem utilizar o botão copiar

function criptografar() {
    let texto = document.getElementById("texto").value;
    let tituloMensagem = document.getElementById("titulo-mensagem");
    let paragrafo = document.getElementById("paragrafo");
    let imagem = document.getElementById("imagem");
  
    let textoCriptografia = texto
      .replace(/e/gi, "enter")
      .replace(/i/gi, "imes")
      .replace(/a/gi, "ai")
      .replace(/o/gi, "ober")
      .replace(/u/gi, "ufat");
  
    if (texto.length != 0) {
      document.getElementById("texto").value = textoCriptografia;
      tituloMensagem.textContent = "Criptografado com Sucesso.";
      paragrafo.textContent = "";
      imagem.src = "./assets/criptografado200.jpg";
    } else {
      imagem.src = "./assets/investigador200.png";
      tituloMensagem.textContent = "Nenhuma mensagem encontrada.";
      paragrafo.textContent = "Retornar: Texto Criptografado ou Descriptografado.";
      alert("Precisa digitar um texto", "warning");
    }
  }
function descriptografar() {
    let texto = document.getElementById("texto").value;
    let tituloMensagem = document.getElementById("titulo-mensagem");
    let paragrafo = document.getElementById("paragrafo");
    let imagem = document.getElementById("imagem");
      
    let textoCriptografia = texto
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");
        
    if (texto.length != 0) {
            document.getElementById("texto").value = textoCriptografia;
            tituloMensagem.textContent = "Descriptografado com Sucesso.";
            paragrafo.textContent = "";
            imagem.src = "./assets/descriptografado200.jpg";
    } else {
            imagem.src = "./assets/investigador200.png";
            tituloMensagem.textContent = "Nenhuma mensagem Encontrada.";
            paragrafo.textContent = "Retornar: Texto Criptografado ou Descriptografado.";
            alert("Precisa digitar um texto", "warning");
      }
  }
// Incluindo um botao Copiar no projeto


 


      