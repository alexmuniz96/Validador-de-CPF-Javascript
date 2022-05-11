console.log('conectado')

function validaCpf(cpf) {
  return false
}

function validacao() {
  console.log('cpf avaliado');
  var cpf = document.getElementById('cpf_digitado').value;

  var resutadoValidacacao = validaCpf(cpf);

  if (resutadoValidacacao) {
    document.getElementById('sucess').style.display = 'block'
  } else {
    document.getElementById('failed').style.display = 'block'
  }
}