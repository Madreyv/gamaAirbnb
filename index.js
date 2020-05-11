var entrada = document.getElementById('checkIn');
var saida = document.getElementById('checkOut');
var numeroDeHospedes = document.getElementById('numeroDeHospedes');
var quadroHospedes = document.getElementsByClassName('quantidadeHospedes');
var botaoBuscar = document.getElementById('botaoBuscar');
var secaoVitrine = document.getElementById('secaoVitrine');
var botaoMais = document.getElementsByClassName('botaoMais');
var numeroHospedes = document.getElementsByClassName('numeroHospedes');
var botaoMenos = document.getElementsByClassName('botaoMenos');
var confirmacaoHospedes = document.getElementsByClassName('confirmacaoHospedes');
var quartos = document.getElementsByClassName('vitrine');


//console.log(secaoVitrine);

for (var i = 0; i < botaoMais.length; i++) {
	let hospede = numeroHospedes[i]
	botaoMais[i].addEventListener('click', () => incremento(hospede));
	botaoMenos[i].addEventListener('click', () => decremento(hospede));
}

botaoBuscar.addEventListener('click', () => botaoDeBusca() )


function botaoDeBusca(){
	let diaDeEntrada = new Date(entrada.value);
	let diaDeSaida = new Date(saida.value);
	let diferença = Math.abs(diaDeSaida.getTime() - diaDeEntrada.getTime()); // Subtrai uma data pela outra
	let dias = Math.ceil(diferença / (1000 * 60 * 60 * 24))
	//console.log(days)
	fazerRequisicao(document.getElementsByClassName('vitrine').length, dias);
	trocarEstado(secaoVitrine, "esconder");
	quartos = document.getElementsByClassName('vitrine');

	window.onscroll = scroll;

	function scroll(){
		if (document.documentElement.scrollHeight - document.documentElement.scrollTop === document.documentElement.clientHeight) {
			fazerRequisicao(document.getElementsByClassName('vitrine').length, dias);
			quartos = document.getElementsByClassName('vitrine');
		}
	}
	console.log(quartos);
}

for (var i = 0; i < quartos.length; i++) {
	quartos[i].addEventListener('click', console.log(i))
}

function adcionarQuarto(indice){
	console.log(indice);
	/*var request = new XMLHttpRequest()

	request.open('GET', 'https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72', true);
	request.onload = function() {
		
	  var quarto = JSON.parse(this.response);
	  if (request.status >= 200 && request.status < 400) {

	  	for (var i = indice ; i < itensDaPagina + 6; i++) {
	  		if (quarto[i] != null) {
	  			let estruturaHTMLQuartos = '<div class="row vitrine"><div class="col-md-5 col-sm-5 areaImagem" style="background-image: url('+ quarto[i].photo + ');"></div><div class="col-md-7  areaEscrita"><div class="tituloEsub"><h6>'+quarto[i].property_type+' inteiro</h6><h4>'+ quarto[i].name +'</h4></div><div class="areaPreco"><h3>R$'+ quarto[i].price +'/noite</h3><div class="precoTotal"><h3>Total de R$' + quarto[i].price * dias +'</h3></div></div></div>';
	  			
	  		vitrine.innerHTML += estruturaHTMLQuartos;
	  		}
	  		
	  	}
	  }
	}

	// Send request
	request.send()
}*/

}


numeroDeHospedes.addEventListener('click', () => trocarEstado(quadroHospedes[0], 'esconder') )
function completar(){
	let adultos = parseInt(numeroHospedes[0].innerHTML) + parseInt(numeroHospedes[1].innerHTML);
	let bebes =  parseInt(numeroHospedes[2].innerHTML);
	confirmacaoHospedes[0].innerHTML = adultos + " Hóspedes e " + bebes + " bebês" ;

}

function trocarEstado(elemento, classe){
	if (elemento.classList.contains(classe)) {
		elemento.classList.remove(classe);
	}else{
		elemento.classList.add(classe);
	}
}

function incremento(elementoIncrementado){
	elementoIncrementado.innerHTML = parseInt(elementoIncrementado.innerHTML) + 1; 
	completar()
}

function decremento(elementoDecrementado){
	if (parseInt(elementoDecrementado.innerHTML) != 0) {
		elementoDecrementado.innerHTML = parseInt(elementoDecrementado.innerHTML) - 1; 
	}
	completar()
}

