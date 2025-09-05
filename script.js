
function abrirWhatsApp(){
  const numeroTelefone = '5515997507811';
  const mensagem = 'Olá, gostaria de mais informações sobre agendamento!';
  const mensagemCodificada = encodeURIComponent(mensagem);
  const urlWhatsApp = `https://wa.me/${numeroTelefone}?text=${mensagemCodificada}`;
  window.open(urlWhatsApp, '_blank');
}