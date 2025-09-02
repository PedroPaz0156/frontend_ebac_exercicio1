function Jogo(nome, preco, genero, idadeRecomendada) { 
    this.nome = nome;
    this.preco = preco;
    this.genero = genero;
    this.idadeRecomendada = idadeRecomendada;
}

function JogoTerror(nome, preco) { 
    Jogo.call(this, nome, preco, "Terror", 18);
}

function JogoAcao(nome, preco) { 
    Jogo.call(this, nome, preco, "Ação", 12);
}

function JogoPlataforma(nome, preco) { 
    Jogo.call(this, nome, preco, "Plataforma", "Livre");
}

const jogo1 = new Jogo("Hollow Knight: SilkSong", 20.00, "Metroidvania", 14);
const jogo2 = new JogoTerror("Silent Hill f", 350.00);
const jogo3 = new JogoAcao("Battlefield 6", 250.00);
const jogo4 = new JogoPlataforma("Donkey Kong Bananza", 439.99);

console.log(jogo1);
console.log(jogo2);
console.log(jogo3);
console.log(jogo4);