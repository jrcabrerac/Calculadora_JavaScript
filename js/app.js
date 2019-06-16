var Calculadora = {
	
	
	
	operacion: "",
	valorUno: 0,
	valorDos: 0,
	ultValor: 0,
	resultado: 0,	
	valorMostrar: "0",
	pantalla: document.getElementById("display"),
	signoIgulPresionado: false, 
	
	init: (function(){
		this.eventoTeclaPreionada();
	}),
	

	eventoTeclaPreionada: function(){

		document.getElementById("on").addEventListener("click", function() {Calculadora.limpiar();});
		document.getElementById("sign").addEventListener("click", function() {Calculadora.cambiarSigno();});		
		document.getElementById("0").addEventListener("click", function() {Calculadora.numeroIngresado("0");});
		document.getElementById("1").addEventListener("click", function() {Calculadora.numeroIngresado("1");});
		document.getElementById("2").addEventListener("click", function() {Calculadora.numeroIngresado("2");});
		document.getElementById("3").addEventListener("click", function() {Calculadora.numeroIngresado("3");});
		document.getElementById("4").addEventListener("click", function() {Calculadora.numeroIngresado("4");});
		document.getElementById("5").addEventListener("click", function() {Calculadora.numeroIngresado("5");});
		document.getElementById("6").addEventListener("click", function() {Calculadora.numeroIngresado("6");});
		document.getElementById("7").addEventListener("click", function() {Calculadora.numeroIngresado("7");});
		document.getElementById("8").addEventListener("click", function() {Calculadora.numeroIngresado("8");});
		document.getElementById("9").addEventListener("click", function() {Calculadora.numeroIngresado("9");});		
		document.getElementById("punto").addEventListener("click", function() {Calculadora.decimalIngresado();});
		document.getElementById("igual").addEventListener("click", function() {Calculadora.mostrarResulOperacion();});		
		document.getElementById("menos").addEventListener("click", function() {Calculadora.operacionIngresada("-");});
		document.getElementById("mas").addEventListener("click", function() {Calculadora.operacionIngresada("+");});
		document.getElementById("por").addEventListener("click", function() {Calculadora.operacionIngresada("*");});
		document.getElementById("dividido").addEventListener("click", function() {Calculadora.operacionIngresada("/");});
	},
	
		
	
	limpiar: function(){ 

	    this.valorMostrar = "0";
		this.operacion = "";
		this.valorUno = 0;
		this.valorDos = 0;
		this.resultado = 0;
		this.Operación = "";
		this.signoIgulPresionado = false;
		this.ultValor = 0;
		this.mostrar();
	},
	
	cambiarSigno: function(){
		if (this.valorMostrar !="0") {
			var vl;
			if (this.valorMostrar.charAt(0)=="-") {
				vl = this.valorMostrar.slice(1);
			}	else {
				vl = "-" + this.valorMostrar;
			}
		this.valorMostrar = vl;
		this.mostrar();
		}
	},
	
	decimalIngresado: function(){
		if (this.valorMostrar.indexOf(".")== -1) {
			if (this.valorMostrar == ""){
				this.valorMostrar = this.valorMostrar + "0.";
			} else {
				this.valorMostrar = this.valorMostrar + ".";
			}
			this.mostrar();
		}
	},
	
	numeroIngresado: function(valor){
		if (this.valorMostrar.length < 8) {
		
			if (this.valorMostrar=="0") {
				this.valorMostrar = "";
				this.valorMostrar = this.valorMostrar + valor;
			} else {
				this.valorMostrar = this.valorMostrar + valor;
			}
		this.mostrar();
		}
	},
	
	operacionIngresada: function(oper){
		this.valorUno = parseFloat(this.valorMostrar);
		this.valorMostrar = "";
		this.operacion = oper;
		this.signoIgulPresionado = false;
		this.mostrar();
	},

	operacionArealizar: function(valorUno, valorDos, operacion){
		switch(operacion){
			case "+": 
				this.resultado = eval(valorUno + valorDos);
			break;
			case "-": 
				this.resultado = eval(valorUno - valorDos);
			break;
			case "*": 
				this.resultado = eval(valorUno * valorDos);
			break;
			case "/": 
				this.resultado = eval(valorUno / valorDos);
		}
	},
	
	mostrarResulOperacion: function(){ 

		if(!this.signoIgulPresionado){ 
			this.valorDos = parseFloat(this.valorMostrar);
			this.ultValor = this.valorDos;
		
			this.operacionArealizar(this.valorUno, this.valorDos, this.operacion);
		
		} else { 
			this.operacionArealizar(this.valorUno, this.ultValor, this.operacion);
		}
	
		this.valorUno = this.resultado;
		this.valorMostrar = "";
	
		if (this.resultado.toString().length < 9){
			this.valorMostrar = this.resultado.toString();
		} else {
			this.valorMostrar = this.resultado.toString().slice(0,8) + "...";
		}
	
		this.signoIgulPresionado = true;		
		this.mostrar();
	
	},
	
	
	mostrar: function(){
		this.pantalla.innerHTML = this.valorMostrar;
	}
	
};

Calculadora.init();