function consultaCep(){
    let cep = document.querySelector('#cep').value
    $.ajax({
        url: `https://viacep.com.br/ws/${cep}/json/`,
        type: "get",
        success: function(response){
            console.log(response)
        }
    })
}

let btn = document.querySelector(".button")
btn.addEventListener('click', function(){
    consultaCep()
})