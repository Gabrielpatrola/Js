
//exercicio 01
//Crie uma função que dado o objeto
//Retorne o seguinte conteúdo:
//O usuário mora em São Paulo / SP, no bairro Centro, na rua "Rua dos Pinheiros" com
//nº 1293.
console.log("Exercicio 01 --- Inicio");
function exibeMensagem(endereco) {
    return (
        "O usuário mora em " +
        endereco.cidade +
        " / " +
        endereco.uf +
        ", no bairro " +
        endereco.bairro +
        ', na rua "' +
        endereco.rua +
        '" com nº ' +
        endereco.numero +
        "."
    );
}
var endereco = {
    rua: "Rua dos pinheiros",
    numero: 1293,
    bairro: "Centro",
    cidade: "São Paulo",
    uf: "SP"
};

console.log(exibeMensagem(endereco));
console.log("Exercicio 01 --- Fim");

//exercicio 02
//Crie uma função que dado um intervalo (entre x e y) exiba todos número pares
console.log("Exercicio 02 --- Inicio");
function pares(x, y) {
    for (i = x; i < y; i++) {
        if (i % 2 == 0) {
            console.log(i);
        }
    }
}
pares(32, 321);
console.log("Exercicio 02 --- Fim");
console.log("Exercicio 03 --- Inicio");

//exercicio 03
//Escreva uma função que verifique se o vetor de habilidades passado possui a habilidade "Javascript"
//e retorna um booleano true/false caso exista ou não
function temHabilidade(skills) {
    return skills.indexOf("Javascript") !== -1;
}
var skills = ["Javascript", "ReactJS", "React Native"];
console.log(temHabilidade(skills));

console.log("Exercicio 03 --- Fim");
console.log("Exercicio 04 --- Inicio");

//exercicio 04
//Escreva uma função que dado um total de anos de estudo retorna o quão experiente o usuário é
function experiencia(anos) {
    if (anos <= 1) {
        return "Iniciante";
    } else if (anos <= 3) {
        return "Intermediário";
    } else if (anos <= 6) {
        return "Avançado";
    } else {
        return "Jedi Master";
    }

}
var anosEstudo = 7;
console.log(experiencia(anosEstudo));
// De 0-1 ano: Iniciante
// De 1-3 anos: Intermediário
// De 3-6 anos: Avançado
// De 7 acima: Jedi Master
console.log("Exercicio 04 --- Fim");

//exercicio 05
//Dado o seguinte vetor de objetos
//Escreva uma função que produza o seguinte resultado:
//O Diego possui as habilidades: Javascript, ReactJS, Redux
//O Gabriel possui as habilidades: VueJS, Ruby on Rails, Elixir

console.log("Exericio 05 --- Inicio");
function exibeHabilidades(usuarios) {
    for (usuario of usuarios) {
        console.log(
            "O " +
            usuario.nome +
            " possui as habilidades: " +
            usuario.habilidades.join(", ")
        );
    }
}
var usuarios = [
    {
        nome: "Diego",
        habilidades: ["Javascript", "ReactJS", "Redux"]
    },
    {
        nome: "Gabriel",
        habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
    }
];

exibeHabilidades(usuarios);
console.log("Exercicio 05 --- Fim");
