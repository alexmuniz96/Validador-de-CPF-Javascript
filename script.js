const alertSuccess = document.querySelector('.sucess')
const alertError = document.querySelector('.error')
const input = document.getElementById('cpf_digitado')

function validaCpf(cpf) {
  if (cpf.length !== 11) {
    return false

  } else {

    const numerosPrimeiraValidacao = cpf.substring(0, 9);
    const digitos = cpf.substring(9);

    let soma = 0;
    for (let i = 10; i > 1; i--) {
      soma += numerosPrimeiraValidacao.charAt(10 - i) * i;
    }

    const resultadoPrimeiroDigito = (soma % 11) < 2 ? 0 : 11 - (soma % 11);

    if (resultadoPrimeiroDigito != digitos.charAt(0)) {
      return false
    }

    soma = 0
    const numerosSegundaValidacao = cpf.substring(0, 10);

    for (let k = 11; k > 1; k--) {
      soma += numerosSegundaValidacao.charAt(11 - k) * k;
    }

    const resultadoSegundoDigito = (soma % 11) < 2 ? 0 : 11 - (soma % 11);

    if (resultadoSegundoDigito != digitos.charAt(1)) {
      return false
    }

    return true
  }
}

function validacao() {
  alertSuccess.style.display = 'none'
  alertError.style.display = 'none'
  input.style.borderColor = 'initial'

  let cpf = document.getElementById('cpf_digitado').value;

  var resultadoValidacacao = validaCpf(cpf);

  if (resultadoValidacacao) {
    alertSuccess.style.display = 'block'
    input.style.borderColor = 'green'
  } else {
    alertError.style.display = 'block'
    input.style.borderColor = 'red'
  }
}