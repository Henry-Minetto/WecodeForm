let dados = [];
let fMail = $(".email").val();
let gmail = fMail.includes("@gmail.com");
let hotmail = fMail.includes("@hotmail.com");
$(".enviar").click(function () {
    let objetoDados = {
        nome:$(".name").val(),
        empresa: $(".enterprise").val(),
        telefone: $(".phone").val(),
        email: $(".email").val(),
        mensagem: $(".message").val()
    }
    dados.push(objetoDados)
    console.log(dados)
    $("div.overlay").toggleClass("left")
    $("div.concluido").toggleClass("left")
    for(i = 0; i<dados.length; i++){ 
        if(gmail || hotmail){
            $(".paragrafo").text("Cadastro concluído, " + (dados[i].nome) + "! Em breve, entraremos em contato.")
        }
        else{
            $(".paragrafo").text("seu endereço email deve terminar com: @gmail.com ou @hotmail.com")
        }}
}),
$(".dataSend").click(function(){
    $(".divDados").empty();
    $(".dadosP").toggleClass("left")
    $(".overlay").toggleClass("left")
    //POP UP DADOS
    let i = 1;
    while (i < dados.length) {
    let ulCreate = $("<ul></ul>").appendTo(".divDados");
    let liName = $("<li></li>").appendTo(ulCreate);
    let liEnterprise = $("<li></li>").appendTo(ulCreate);
    let liPhone = $("<li></li>").appendTo(ulCreate);
    let liEmail = $("<li></li>").appendTo(ulCreate);
    let liMessage = $("<li></li>").appendTo(ulCreate);
    $(liName).html("nome: " + (dados[i].nome));
    $(liEnterprise).html("empresa: " + (dados[i].empresa));
    $(liPhone).html("telefone: " + (dados[i].telefone));
    $(liEmail).html("email: " + (dados[i].email));
    $(liMessage).html("mensagem: " + (dados[i].mensagem));
    i++
    }
}),
$(".overlay").click(function(){
    $(".overlay").addClass("left")
    $(".dadosP").addClass("left")
    $(".concluido").addClass("left")
})