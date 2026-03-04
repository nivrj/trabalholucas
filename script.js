const dados = [
  { time: "3º Ano A", pontos: 9, vitorias: 3, derrotas: 0 },
  { time: "2º Ano B", pontos: 6, vitorias: 2, derrotas: 1 },
  { time: "1º Ano C", pontos: 3, vitorias: 1, derrotas: 2 },
  { time: "3º Ano B", pontos: 0, vitorias: 0, derrotas: 3 }
];

function carregarTabela() {
  const tbody = document.querySelector("#tabela tbody");
  tbody.innerHTML = "";

  dados.sort((a, b) => b.pontos - a.pontos);

  dados.forEach(time => {
    const linha = `
      <tr>
        <td>${time.time}</td>
        <td>${time.pontos}</td>
        <td>${time.vitorias}</td>
        <td>${time.derrotas}</td>
      </tr>
    `;
    tbody.innerHTML += linha;
  });
}

function atualizarTabela() {
  dados[0].pontos += 3;
  dados[0].vitorias += 1;
  carregarTabela();
}

function mostrarMensagem() {
  alert("Em breve mais notícias do Interclasses!");
}

carregarTabela();