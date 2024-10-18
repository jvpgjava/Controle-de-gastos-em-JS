const prompt = require('prompt-sync')();

let salario = 0;
let gastosEssenciais = 0;
let estiloDeVida = 0;
let reserva = 0;

const calcularGastosIdeais = (salario) => {
    gastosEssenciais = salario * 0.50;
    estiloDeVida = salario * 0.30;
    reserva = salario * 0.20;
};

const exibirControle = () => {
    console.log("------Controle de gastos------");
    console.log("1. Gastos essenciais (fixos)");
    console.log("2. Estilo de vida (lazer e afins)");
    console.log("3. Reserva");
};

const perguntarSalario = () => {
    while (true) {
        let input = prompt("Informe o valor do sal�rio/lucro: R$").replace(',', '.');
        let inputSalario = parseFloat(input);

        if (isNaN(inputSalario) || inputSalario <= 0) {
            console.log("Por favor, informe um valor num�rico v�lido para o sal�rio.");
        } else {
            salario = inputSalario;
            calcularGastosIdeais(salario);
            menuPrincipal();
            break;
        }
    }
};

const menuPrincipal = () => {
    exibirControle();
    while (true) {
        let opcao = parseInt(prompt("Escolha uma op��o do menu (1-3): "));

        switch (opcao) {
            case 1:
                console.log(`Para gastos essenciais, voc� deve deixar R$ ${gastosEssenciais.toFixed(2)}`);
                break;
            case 2:
                console.log(`Para estilo de vida, voc� deve deixar R$ ${estiloDeVida.toFixed(2)}`);
                break;
            case 3:
                console.log(`Para reserva, voc� deve deixar R$ ${reserva.toFixed(2)}`);
                break;
            default:
                console.log("Por favor, escolha uma op��o v�lida.");
                continue;
        }

        let continua = prompt("Deseja ver outra op��o do menu? (s/n): ").toLowerCase();
        if (continua === 's') {
            menuPrincipal();
            break;
        } else if (continua === 'n') {
            console.log("Obrigado por usar o sistema de controle de gastos!");
            break;
        } else {
            console.log("Resposta inv�lida. Tente novamente.");
        }
    }
};

const iniciar = () => {
    if (salario === 0) {
        perguntarSalario();
    } else {
        menuPrincipal();
    }
};

iniciar();