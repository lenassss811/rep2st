const colaboradores = [
    {
        nome: "Lucas Fernandes",
        idade: 27,
        cidade: "São Paulo",
        email: "lucas.fernandes@empresa.com"
    },
    {
        nome: "Ana Beatriz Lima",
        idade: 31,
        cidade: "Curitiba",
        email: "ana.lima@empresa.com"
    },
    {
        nome: "Rafael Oliveira",
        idade: 24,
        cidade: "Fortaleza",
        email: "rafael.oliveira@empresa.com"
    },
    {
        nome: "Juliana Rocha",
        idade: 29,
        cidade: "Belo Horizonte",
        email: "juliana.rocha@empresa.com"
    }
];

const tbody = document.querySelector("#tabelaColaboradores tbody");

colaboradores.forEach(colab => {
    const row = document.createElement("tr");

    row.innerHTML = `
     <td>${colab.nome}</td>
     <td>${colab.idade}</td>
      <td>${colab.cidade}</td>
      <td>${colab.email}</td>
    `;

    tbody.appendChild(row);
});
