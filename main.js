//document.addEventListener('DOMContentLoaded', function() {
  //  document.getElementById('btn-buscar-cep').addEventListener('click', function() {
    //    const xhttp = new XMLHttpRequest();
    //    const cep = document.getElementById('cep').value; // Corrigido 'documennt' para 'document'
     //   const endpoint = `https://viacep.com.br/ws/${cep}/json`; // Corrigido a URL do endpoint
//
     //   xhttp.open('GET', endpoint, true); // Adicionado o parâmetro true para a chamada assíncrona
     //   xhttp.onreadystatechange = function() {
     //       if (this.readyState == 4 && this.status == 200) {
    //            const response = JSON.parse(this.responseText);
    //            document.getElementById('endereco').value = response.logradouro || '';
    //        }
    //    };
   //     xhttp.send();
   // });
//});

$(document).ready(function(){

    $('#cep').mask('00000-000')

    $('#btn-buscar-cep').click(function(){
        const cep = $('#cep').val();
        const endpoint = `https://viacep.com.br/ws/${cep}/json`;
        const botao = $(this)
        $(botao).find('i').addClass('d-none');
        $(botao).find('span').removeClass('d-none');

        $.ajax(endpoint).done(function(resposta){
            const logradouro = resposta.logradouro;
            const bairro = resposta.bairro;
            const cidade = resposta.localidade;
            const estado = resposta.uf;
            const endereco = `${logradouro}, ${bairro} - ${cidade} - ${estado}`;
            $('#endereco').val(endereco)

            setTimeout(function(){
                $(botao).find('i').removeClass('d-none');
                $(botao).find('span').addClass('d-none');
            }, 500)
        })
    })
})