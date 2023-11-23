function calcularIMC(peso, altura) {
    var imc = peso / (altura * altura);
    return imc;
}

function classificarIMC(imc) {
    if (imc < 18.5) {
        return "Abaixo do peso normal.";
    } else if (imc >= 18.5 && imc < 25) {
        return "Peso normal.";
    } else if (imc >= 25 && imc < 30) {
        return "Excesso de peso.";
    } else if (imc >= 30 && imc < 35) {
        return "Obesidade classe I";
    } else if (imc >= 35 && imc < 40) {
        return "Obesidade classe II";
    } else {
        return "Obesidade classe III";
    }
}

var terminar = false;
var totalUsuarios = 0;
var somaIMCs = 0;
var maiorIMC = Number.NEGATIVE_INFINITY;
var usuarioMaiorIMC = null;

while (!terminar) {
    console.log(`Usuário ${totalUsuarios + 1}:`);

    var peso, altura;

    if (totalUsuarios === 0) {
        // Para o primeiro usuário, solicite peso e altura uma vez
        peso = parseFloat(prompt(`Digite o peso em kg:`));

        if (isNaN(peso) || peso <= 0) {
            console.log("Por favor, insira um valor válido para o peso.");
            continue;
        }

        altura = parseFloat(prompt(`Digite a altura em metros:`));

        if (isNaN(altura) || altura <= 0) {
            console.log("Por favor, insira um valor válido para a altura.");
            continue;
        }
    } else {
        // Para os demais usuários, solicite peso e altura normalmente
        peso = parseFloat(prompt(`Digite o peso em kg:`));

        if (isNaN(peso) || peso <= 0) {
            console.log("Por favor, insira um valor válido para o peso.");
            continue;
        }

        altura = parseFloat(prompt(`Digite a altura em metros:`));

        if (isNaN(altura) || altura <= 0) {
            console.log("Por favor, insira um valor válido para a altura.");
            continue;
        }
    }

    var imc = calcularIMC(peso, altura);
    var classificacao = classificarIMC(imc);

    console.log(`IMC: ${imc.toFixed(2)}`);
    console.log(`Classificação: ${classificacao}`);
    console.log("\n");

    // Atualizar informações sobre o usuário com o maior IMC
    if (imc > maiorIMC) {
        maiorIMC = imc;
        usuarioMaiorIMC = totalUsuarios + 1;
    }

    // Atualizar total e soma dos IMCs
    totalUsuarios++;
    somaIMCs += imc;

    var resposta = prompt(`Deseja inserir outro usuário? S / N `);

    if (resposta.toUpperCase() === 'N') {
        terminar = true;
    }
}

// Calcular média dos IMCs
var mediaIMCs = totalUsuarios > 0 ? somaIMCs / totalUsuarios : 0;

// Exibir informações finais
console.log(`Total de usuários coletados: ${totalUsuarios}`);
console.log(`Usuário com maior IMC: ${usuarioMaiorIMC}`);
console.log(`Média dos IMCs: ${mediaIMCs.toFixed(2)}`);