const handleScroll = () => {
  window.scroll({
    top: 0,
    behavior: 'smooth'
  })
}
const buttonElement =document.getElementById("button-top");
buttonElement.addEventListener("click", handleScroll);

// function validarCPF(cpf) {
//     if (cpf.length != 11) {
//         return false;
//     } else {
//         var numeros = cpf.substring(0, 9);
//         var digitos = cpf.substring(9);
//     }
//     var soma = 0;
//     for (var i = 10; i > 1; i--) {
//         soma += numeros.charAt(10 - i) * i;
//     }
//     var resultado = (soma % 11) < 2 ? 0 : 11 - (soma % 11);
//     if (resultado != digitos.charAt(0)) {
//         return false;
//     }
//     soma = 0;
//     numeros = cpf.substring(0, 10);
//     for (var k = 11; k > 1; k--) {
//         soma += numeros.charAt(11 - k) * k;
//     }
//     resultado = (soma % 11) < 2 ? 0 : 11 - (soma % 11);
//     if (resultado != digitos.charAt(1)) {
//         return false;
//     }
//     return true;
// }



function cpfValido(strCPF) {

	strCPF = strCPF.replace(".","").replace(".","").replace("-","")
	
    var Soma;
    var Resto;
    Soma = 0;
	if (strCPF == "00000000000") return false;

	for (i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
	Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10)) ) return false;

	Soma = 0;
    for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(10, 11) ) ) return false;
    return true;
}



$(function(){
  var options =  {
      onComplete: function(cpf, evt, field) {
      if(!cpfValido(cpf)){
        //deu errado
        field.addClass("error")
        //field.css('border','1px solid red');
        //field.css('background-color','#ffe2e2');
      } else{
        field.removeClass("error")
        //field.css('border',null);
        //field.css('background-color','#fff');
      }
      
      //$("#cpf2").focus();
      }
    }

    $('.cpf').mask('000.000.000-00', options);

      /*$(".cpf").keydown(function(evt){
          console.log(evt.which);
          if (evt.which >= 65 && evt.which <= 90){
              evt.preventDefault();
          }
    //000.000.000-00
    if (evt.which != 8){
      if($(this).val().length == 3 || $(this).val().length == 7 ){
        this.value += "."
      } else
      if($(this).val().length == 11){
        this.value += "-"
      }
    }

      });*/
  });
