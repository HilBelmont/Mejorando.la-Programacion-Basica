//Creamos una función que escoja un valor aleatorio para la maquina
function aleatorio(minimo, maximo)
{
	// Iniciamos una variable la cual agarrará un valor aleatorio entre un rango de numeros que metemos
	var numero = Math.floor( Math.random() * (maximo - minimo + 1) + minimo );
		//Math floor redondea un número
			//Math.random regresa un valor entre el 0 y el 1 osea entre el 0% y 100%
				//Multiplicamos el valor por el máximo más uno, de manera que nunca sobrepasaremos el máximo
				//a la hora de multiplicar debido a que math.random regresa un valor mejor a 1 osea mejor al 100%
				//por lo que nunca obtendremos más del 100% del máximo por así decirlo pero tampoco podemos obtener un rango
				//menor al mínimo. Matemáticas <3 <3. Igual se puede aplicar un random a un vector.
	// Iniciamos una variable la cual agarrará un valor aleatorio entre un rango de numeros que metemos
	
	//Regresamos el valor del numero obtenido arriba, de manera que la funcion al ejecutarse puede y debe regresar un valor
	return numero;
	//Regresamos el valor del numero obtenido arriba, de manera que la funcion al ejecutarse puede y debe regresar un valor
}
//Creamos una función que escoja un valor aleatorio para la maquina

// Creamos variables
var piedra = 0;
var papel = 1;
var tijera = 2;
var lagarto = 3;
var spock = 4;

//Vector o Array que usaremos para las opciones
var opciones = ["Piedra", "Papel", "Tijera", "Lagarto", "Spock"];
//Vector o Array que usaremos para las opciones

var opcionUsuario;
var opcionMaquina = aleatorio(0,4);
// Creamos variables

//Pedimos datos con prompt
opcionUsuario = prompt("¿Qué elijes?\nPiedra: 0\nPapel: 1\nTijera: 2\nLagarto: 3\nSpock: 4", 0);
//Pedimos datos con prompt

alert("Elegiste " + opciones[opcionUsuario]);
alert("JavaScript eligió " + opciones[opcionMaquina]);

//Mostramos elección con un alert
// alert("Elegiste: " + opcionUsuario);
//Mostramos elección con un alert

//Usamos condicionales para ver que pasa y validar que hará en caso de que algo pase

	//Checamos si la opción es igual al valor de la variable piedra
	if(opcionUsuario == piedra)
	{
		//Checamos la opcion de la máquina con la del usuario

			//Checamos si con iguales para declarar empate
			if(opcionMaquina == piedra)
			{
				alert("Empataste con las reglas de siempre");
			}
			//Checamos si con iguales para declarar empate

			//Checamos los otros casos para declarar a un ganador
			else if(opcionMaquina = papel)
			{
				alert("Perdiste con las reglas siempre");
			}

			else if(opcionMaquina == tijera)
			{
				alert("Ganaste con las reglas de siempre");
			}

			else if(opcionMaquina = lagarto)
			{
				alert("Ganaste al estilo sheldon!!!");
			}

			else if(opcionMaquina == spock)
			{
				alert("Perdiste al estilo sheldon!!!");
			}
			//Checamos los otros casos para declarar a un ganador

		//Checamos la opcion de la máquina con la del usuario
	}
	//Checamos si la opción es igual al valor de la variable piedra

	//Checamos si la opción es igual al valor de la variable papel
	else if(opcionUsuario == papel)
	{
		//Checamos la opcion de la máquina con la del usuario

			//Cheamos si con iguales para declarar empate
			if(opcionMaquina == papel)
			{
				alert("Empataste con las reglas de siempre");
			}
			//Cheamos si con iguales para declarar empate

			//Checamos los otros casos para declarar a un ganador
			else if(opcionMaquina = tijera)
			{
				alert("Perdiste con las reglas de siempre");
			}

			else if(opcionMaquina == piedra)
			{
				alert("Ganaste con las reglas de siempre");
			}

			else if(opcionMaquina = lagarto)
			{
				alert("Perdiste al estilo sheldon!!!");
			}

			else if(opcionMaquina == spock)
			{
				alert("Ganaste al estilo sheldon!!!");
			}
			//Checamos los otros casos para declarar a un ganador

		//Checamos la opcion de la máquina con la del usuario
	}
	//Checamos si la opción es igual al valor de la variable papel

	//Checamos si la opción es igual al valor de la variable tijera
	else if(opcionUsuario == tijera)
	{
		//Checamos la opcion de la máquina con la del usuario

			//Cheamos si con iguales para declarar empate
			if(opcionMaquina == tijera)
			{
				alert("Empataste con las reglas de siempre");
			}
			//Cheamos si con iguales para declarar empate

			//Checamos los otros casos para declarar a un ganador
			else if(opcionMaquina == piedra)
			{
				alert("Perdiste con las reglas de siempre");
			}

			else if(opcionMaquina == papel)
			{
				alert("Ganaste con las reglas de siempre");
			}

			else if(opcionMaquina == lagarto)
			{
				alert("Ganaste al estilo sheldon!!!");
			}

			else if(opcionMaquina == spock)
			{
				alert("Perdiste al estio sheldon!!!");
			}
			//Checamos los otros casos para declarar a un ganador

		//Checamos la opcion de la máquina con la del usuario
	}
	//Checamos si la opción es igual al valor de la variable lagarto

	else if(opcionUsuario == lagarto)
	{
		//Checamos la opcion de la máquina con la del usuario

			//Cheamos si con iguales para declarar empate
			if(opcionMaquina == lagarto)
			{
				alert("Empataste al estilo sheldon!!!");
			}
			//Cheamos si con iguales para declarar empate

			//Checamos los otros casos para declarar a un ganador
			else if(opcionMaquina == piedra)
			{
				alert("Perdiste al estilo sheldon!!!");
			}

			else if(opcionMaquina == papel)
			{
				alert("Ganaste al estilo sheldon!!!");
			}

			else if(opcionMaquina == tijera)
			{
				alert("Perdiste al estilo sheldon!!!");
			}

			else if(opcionMaquina == spock)
			{
				alert("Ganaste al estio sheldon!!!");
			}
			//Checamos los otros casos para declarar a un ganador

		//Checamos la opcion de la máquina con la del usuario
	else if(opcionUsuario == spock)
	{
		//Checamos la opcion de la máquina con la del usuario

			//Cheamos si con iguales para declarar empate
			if(opcionMaquina == spock)
			{
				alert("Empataste al estilo sheldon!!!");
			}
			//Cheamos si con iguales para declarar empate

			//Checamos los otros casos para declarar a un ganador
			else if(opcionMaquina == piedra)
			{
				alert("Ganaste al estilo sheldon!!!");
			}

			else if(opcionMaquina == papel)
			{
				alert("Perdiste al estilo sheldon!!!");
			}

			else if(opcionMaquina == tijera)
			{
				alert("Ganaste al estilo sheldon!!!");
			}

			else if(opcionMaquina == lagarto)
			{
				alert("Perdiste al estio sheldon!!!");
			}
			//Checamos los otros casos para declarar a un ganador

		//Checamos la opcion de la máquina con la del usuario
	}else
	{
		alert("WHAT? Se supone que escojas un número entre el 0 y el 4");
	}
	//La armamos de pedo si no metió una opción válida ya que ninguna validación anterior se cumplió

//Usamos condicionales para ver que pasa y validar que hará en caso de que algo pase


