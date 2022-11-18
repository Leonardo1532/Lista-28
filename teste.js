// Parte 1
// Crie as seguintes classes: Imóvel e Pessoa;

// Um Imóvel deve ter os seguintes atributos: endereço, cep, area em metros, quantidade de
// banheiros, quantidade de quartos, as pessoas que moram neste imóvel e o valor do
// mesmo;

// Uma pessoa deve ter os seguintes atributos: nome, cpf e uma data de nascimento;

// Criar três classes filhas que herdam de Imóvel: Casa, Apartamento e Kitnet;

// Uma Casa deve ter um atributo “ComQuintal” que recebe um valor booleano; =>

// Um Apartamento deve ter os atributos: andar e o valor do condomínio;

// Um Imóvel deve ter dois comportamentos: adicionar uma pessoa como morador e remover uma pessoa como morador; =>

// Uma Kitnet pode ter até dois banheiros, um apartamento pode ter três banheiros e uma casa pode ter até cinco banheiros;


// Cada tipo de Imóvel deve ter um método para calcular seu valor com base nas seguintes
// especificações:
// Uma casa com quintal tem um acréscimo de 30% no seu valor;
// Um apartamento deve ter o valor do seu condomínio somado ao valor base;
// Uma Kitnet não tem alterações no seu valor base;


class Imovel {
    Endereco
    Cep
    AreaEmMetros
    QtdeBanheiros
    QtdeQuartos
    Morador
    ValorImovel

    constructor(endereco, cep, areaEmMetros, qtdeBanheiros, qtdeQuartos, morador, valorImovel) {
        this.Endereco = endereco
        this.Cep = cep
        this.AreaEmMetros = areaEmMetros
        this.QtdeBanheiros = qtdeBanheiros
        this.QtdeQuartos = qtdeQuartos
        this.Morador = morador
        this.ValorImovel = valorImovel
    }

    AdicionarMorador(pessoa) {
        this.Morador = Pessoa

        
    }
    RemoverMorador(pessoa){

    }
}
class Pessoa {
    Nome
    Cpf
    DataDeNascimento

    constructor(nome, cpf, dataDeNascimento){
        this.Nome = nome
        this.Cpf = cpf
        this.DataDeNascimento = dataDeNascimento
    }
}

class Casa extends Imovel {
    ComQuintal
    constructor(endereco, cep, areaEmMetros, qtdeBanheiros, qtdeQuartos, morador, valorImovel, comQuintal) {
        super(endereco, cep, areaEmMetros, qtdeBanheiros, qtdeQuartos, morador, valorImovel)
        this.ComQuintal = comQuintal
    }
}
class Apartamento extends Imovel {
    Andar
    ValorCondominio
    constructor(endereco, cep, areaEmMetros, qtdeBanheiros, qtdeQuartos, morador, valorImovel, andar, valorCondominio) {
        super(endereco, cep, areaEmMetros, qtdeBanheiros, qtdeQuartos, morador, valorImovel)
        this.Andar = andar
        this.ValorCondominio = valorCondominio
    }
}
class Kitnet extends Imovel {
    constructor(endereco, cep, areaEmMetros, qtdeBanheiros, qtdeQuartos, morador, valorImovel) {
        super(endereco, cep, areaEmMetros, qtdeBanheiros, qtdeQuartos, morador, valorImovel)

    }
}
