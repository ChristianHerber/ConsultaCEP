function consultaCep(){
    let cepDigitado = document.querySelector('#cepDigitado').value
    if(cepDigitado == ''){ alert('Necessário Digitar um CEP Válido!'); var invalido = true}

    $("#tabela").removeClass("is-hidden")
    $(".progress").removeClass("is-hidden")

    $.ajax({
        url: `https://viacep.com.br/ws/${cepDigitado}/json/`,
        type: "get",
        success: function(response){
            console.log(response)
            let cep = document.getElementById('cep')
            let localidade = document.getElementById('localidade')
            let uf = document.getElementById('uf')
            let ibge = document.getElementById('ibge')
            let logradouro = document.getElementById('logradouro')
            let complemento = document.getElementById('complemento')
            let bairro = document.getElementById('bairro')
            let gia = document.getElementById('gia')
            let siafi = document.getElementById('siafi')

            cep.innerHTML = response.cep
            localidade.innerHTML = response.localidade
            uf.innerHTML = response.uf
            ibge.innerHTML = response.ibge
            logradouro.innerHTML = response.logradouro
            complemento.innerHTML = response.complemento
            bairro.innerHTML = response.bairro
            gia.innerHTML = response.gia
            siafi.innerHTML = response.siafi

            $(".progress").addClass("is-hidden")
        },
        error: function(){
            $("#tabela").addClass("is-hidden")
            $(".progress").addClass("is-hidden")
        }
    })
}

let btn = document.querySelector(".button")
btn.addEventListener('click', function(){
    consultaCep()
})