const alunos = [
    {nome: "Pedro", nota: 3},
    {nome: "João", nota: 8},
    {nome: "Ana", nota: 7},
    {nome: "Nicolle", nota: 5},
    {nome: "Abel", nota: 9},
    {nome: "Joezio", nota: 10},
    {nome: "Caroline", nota: 4},
    {nome: "Vinicius", nota: 9},
    {nome: "Vitória", nota: 10}
] 

const alunosAprovados = alunos.filter(alunos => alunos.nota >= 6);

alunosAprovados.forEach(alunos => console.log(`${alunos.nome} passou com uma nota de: ${alunos.nota}`))