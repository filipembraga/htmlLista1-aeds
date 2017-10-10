function calcular()	{
	var num1 = Number(document.getElementById('num1').value);
	var num2 = Number(document.getElementById('num2').value);
	var operadores = document.getElementsByName('operacao');
	var resultado = document.getElementById('resultado');

	for (var i = 0; i < operadores.length; i++)	{

		if (operadores[i].checked){

			switch (operadores[i].id){
				case "somar":
					resultado.innerHTML = num1+num2;
					break;
				case "multiplicar":
					resultado.innerHTML = num1*num2;
					break;
				case "subtrair":
					resultado.innerHTML = num1-num2;
					break;
				case "dividir":
					resultado.innerHTML = num1/num2;
					break;
			}
		}
	}
	console.log("setuo scirote arerod");
}