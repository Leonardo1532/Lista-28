// Parte 1

// Crie as seguintes classes: Imóvel e Pessoa;

// Um Imóvel deve ter os seguintes atributos: endereço, cep, area em metros, quantidade de banheiros, quantidade de quartos, as pessoas que moram neste imóvel e o valor do
// mesmo;

// Uma pessoa deve ter os seguintes atributos: nome, cpf e uma data de nascimento;

// Criar três classes filhas que herdam de Imóvel: Casa, Apartamento e Kitnet;

// Uma Casa deve ter um atributo “ComQuintal” que recebe um valor booleano; =>

// Um Apartamento deve ter os atributos: andar e o valor do condomínio;

// Um Imóvel deve ter dois comportamentos: adicionar uma pessoa como morador e remover uma pessoa como morador; =>

// Uma Kitnet pode ter até dois banheiros, um apartamento pode ter três banheiros e uma casa pode ter até cinco banheiros;

// Cada tipo de Imóvel deve ter um método para calcular seu valor com base nas seguintes especificações:

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

    constructor(endereco, cep, areaEmMetros, qtdeBanheiros, qtdeQuartos, valorImovel) {
        this.Endereco = endereco
        this.Cep = cep
        this.AreaEmMetros = areaEmMetros
        this.QtdeBanheiros = qtdeBanheiros
        this.QtdeQuartos = qtdeQuartos
        this.ValorImovel = valorImovel
    }

    AdicionarMorador(pessoa) {
        this.Morador = pessoa
        console.log("Morador: " + this.Morador.Nome)
        console.log("CPF:" + this.Morador.Cpf)
        console.log("Data de Nascimento:" + this.Morador.DataDeNascimento)
    }
    RemoverMorador(){
        this.Morador = null
        console.log("O morador se mudou!")
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
    constructor(endereco, cep, areaEmMetros, qtdeBanheiros, qtdeQuartos, valorImovel, comQuintal) {
        super(endereco, cep, areaEmMetros, qtdeBanheiros, qtdeQuartos, valorImovel)
        this.ComQuintal = comQuintal
    }

    AcrescimoQuintal(){
        let valorTotal = 0
        if(this.ComQuintal == true){
            valorTotal = this.ValorImovel + (this.ValorImovel * 0.3)
        }else{
            valorTotal = this.ValorImovel
        }
        console.log("O valor total da Casa com o acréscimo é:" + valorTotal)
        
    }
}
class Apartamento extends Imovel {
    Andar
    ValorCondominio
    constructor(endereco, cep, areaEmMetros, qtdeBanheiros, qtdeQuartos, valorImovel, andar, valorCondominio) {
        super(endereco, cep, areaEmMetros, qtdeBanheiros, qtdeQuartos, valorImovel)
        this.Andar = andar
        this.ValorCondominio = valorCondominio
    }
    ValorTotalAp(){
        let valorTotal1 = this.ValorImovel + this.ValorCondominio
        return valorTotal1
    }
    
}
class Kitnet extends Imovel {
    constructor(endereco, cep, areaEmMetros, qtdeBanheiros, qtdeQuartos, valorImovel) {
        super(endereco, cep, areaEmMetros, qtdeBanheiros, qtdeQuartos, valorImovel)

    }
}

let Pessoa1 = new Pessoa("Juliano", "628392773-89", "25/09/2002")

let Casa1 = new Casa("Rua Rio de Janeiro", "08295-410", 800, 4, 3,  350000, true)

let Ap1 = new Apartamento("Rua Pitanga", "36787-367", 80, 3, 2, 450000, 12, 800)

let Kitnet1 = new Kitnet( "Rua Severo", "06734-152", 25, 1, 1, 85000)


