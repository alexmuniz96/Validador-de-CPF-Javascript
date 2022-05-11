//cpf verificando a quantidade de digitos

function validaCpf(cpf) {
  console.log(cpf.length)
  if (cpf.length !== 11) {
    return false
  } else {

    var numeros = cpf.substring(0, 9);
    var digitos = cpf.substring(9);

    var soma = 0;
    for (var i = 10; i > 1; i--) {
      soma += numeros.charAt(10 - i) * i;
    }
    console.log(soma)

    // console.log(11 - (soma % 11))

    var resultado = (soma % 11) < 2 ? 0 : 11 - (soma % 11);

    //Validação do primeiro digito
    if (resultado != digitos.charAt(0)) {
      return false
    }
    // resetando a variavel para fazer a verificacao do 2 digito
    soma = 0
    numeros = cpf.substring(0, 10);

    for (var k = 11; k > 1; k--) {
      soma += numeros.charAt(11 - k) * k;
    }

    resultado = (soma % 11) < 2 ? 0 : 11 - (soma % 11);

    //validação do 2 digito

    if (resultado != digitos.charAt(1)) {
      return false
    }

    return true
  }
}

function validacao() {
  console.log('cpf avaliado');
  document.getElementById('sucess').style.display = 'none'
  document.getElementById('failed').style.display = 'none'

  var cpf = document.getElementById('cpf_digitado').value;

  var resutadoValidacacao = validaCpf(cpf);

  if (resutadoValidacacao) {
    document.getElementById('sucess').style.display = 'block'
  } else {
    document.getElementById('failed').style.display = 'block'
  }
}