/*
Resulatdo abaixo de 17 - Muito abaixo do peso;<br>
Resultado entre 17 e 18,49 - abaixo do peso;<br>
Resultado entre 18,5 e 24,99 - Peso ideal;<br>
Resultado entre 25 e 29,99 - Sobrepeso;<br>
Resulato entre 30 e 34,9 - Obesidade grau I;<br>
Resulato entre 35 e 39,99 - Obesidade grau II (severa);<br>
Resulato acima de 40 - Obesidade grau III (mórbida);<br>
*/
 var altura;
 var peso;
 var imc;
 var resultado;

 function calcular(event){
     event.preventDefault();
   
     peso = parseFloat(document.getElementById("peso").value);
     altura = parseFloat(document.getElementById("altura").value);
   
     imc = peso / (altura * altura);
  
     resultado = document.getElementById("resultado");
	 
	 if (imc< 17) {
	     resultado.innerHTML= "<br/> Seu resultado foi: " + imc.toFixed(2) + "<br/> Cuidado você está muito abaixo do peso!";
	 } else if (imc >= 17 && imc <= 18.49) {
		 resultado.innerHTML = "<br/> Seu resultado foi: " + imc.toFixed(2) + "<br/> Abaixo do peso!";
	 } else if (imc >= 18.5 && imc <= 24.99) {
		 resultado.innerHTML = "<br/> Seu resultado foi: " + imc.toFixed(2) + "<br/> Você está no peso ideal!";
	 } else if (imc >= 25 && imc <= 29.99) {
		 resultado.innerHTML = "<br/> Seu resultado foi: " + imc.toFixed(2) + "<br/> Você está com sobrepeso!";
	 } else if (imc >= 30 && imc <= 34.99) {
		 resultado.innerHTML = "<br/> Seu resultado foi: " + imc.toFixed(2) + "<br/> CUIDADO, obesidade grau I!";
	 } else if (imc >= 35 && imc <= 39.99) {
		 resultado.innerHTML = "<br/> Seu resultado foi: " + imc.toFixed(2) + "<br/> CUIDADO, Obesidade grau II!";
	 } else if (imc >= 40) {
		 resultado.innerHTML = "<br/> Seu resultado foi: " + imc.toFixed(2) + "<br/> CUIDADO, Obesidade grau III!";
		 
	  }  
	  
	  document.getElementById("peso").value = "";
	  document.getElementById("altura").value = "";
}
   


