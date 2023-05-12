function perguntar(){

  let kg = +prompt("Qual seu peso (em kg)?");
  let altura = +prompt("Qual sua altura?");

  let imc = kg / (altura * altura);

  switch (imc) {
    case (imc < 18.5 ? imc : false):
        clear();
        console.log(`IMC: ${imc.toFixed(2)} (Magreza)`);
        break;

    case (imc > 18.5 && imc <= 24.9 ? imc : false):
        clear();
        console.log(`IMC: ${imc.toFixed(2)} (Normal)`);
        break;

    case (imc > 24.9 && imc <= 30 ? imc : false):
        clear();
        console.log(`IMC: ${imc.toFixed(2)} (Sobrepeso)`);
        break;

    case (imc > 30 ? imc : false):
        clear();
        console.log(`IMC: ${imc.toFixed(2)} (Obesidade)`);
        break;

    default:
      console.log("Valores não permitidos. Tente novamente")
      perguntar();
      break;
  }
  return "processo encerrado.";
}

perguntar();