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
  function validaPreenchimento(el){
    if ($(el).val() != ""){
        $(el).removeClass("is-invalid ");
        return true;
    } else {
        $(el).addClass("is-invalid ");
        return false;
    }
}
function validarData(el){

  data = $(el).val();
  if (_isValidData(data)){
      $(el).removeClass("is-invalid ");
      return true;
  } else {
      $(el).addClass("is-invalid ");
      return false;
  }

}
function validarEmail(el){

  data = $(el).val();
  if (_isValidEmail(data)){
      $(el).removeClass("is-invalid ");
      return true;
  } else {
      $(el).addClass("is-invalid ");
      return false;
  }

}
function enviar(){

  erro = false;
  $("input, select").each(function(k,el){
      if (!validaPreenchimento(el)){
          erro = true;
      }
  });

  if (!validarCpf($("#cpf"))){
      erro = true;
  }
  if (!validarData($("#data"))){
    erro = true;
}

if (!validarEmail($("#email"))){
    erro = true;
}

if (erro == false){
    $("#form").submit();
}
}
$(function(){
  $("#cpf").blur(function(){
      validarCpf(this);
  })
  $("#email").blur(function(){
      validarEmail(this);
  })
  $("#data").blur(function(){
      validarData(this);
  })
});

  
 