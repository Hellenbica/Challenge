let amigos = [];

function agregarAmigo() {
  let inputAmigo = document.getElementById("amigo");
  let nombre = inputAmigo.value;
  
  if (nombre === '') {
    alert("Por favor, inserte un nombre.");
    return;
  }

  amigos.push(nombre);

  inputAmigo.value = "";
  inputAmigo.focus();
 
  actualizarLista();
}

function actualizarLista() {
  
  let listaAmigos = document.getElementById('listaAmigos');

  listaAmigos.innerHTML = "";

  for (let i = 0; i < amigos.length; i++) {
    let li = document.createElement("li");
    li.textContent = amigos[i];
    listaAmigos.appendChild(li);
  }
}

function sortearAmigo() {
  
  if (amigos.length === 0) {
    alert("No hay amigos para sortear.");
    return;
  }


  let amigoSorteado  = amigos[Math.floor(Math.random() * amigos.length)];

  let resultado = document.getElementById("resultado");
  resultado.innerHTML = `El amigo sorteado es: ${amigoSorteado}`;
}