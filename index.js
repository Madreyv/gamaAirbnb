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
var produtoSelecionado = document.getElementById('produtoSelecionado');

//console.log(secaoVitrine);
//fazerRequisicao(document.getElementsByClassName('vitrine').length, 2);

//console.log(secaoVitrine);

for (var i = 0; i < botaoMais.length; i++) {
	let hospede = numeroHospedes[i]
	botaoMais[i].addEventListener('click', () => incremento(hospede));
	botaoMenos[i].addEventListener('click', () => decremento(hospede));
}

botaoBuscar.addEventListener('click', () => botaoDeBusca() )

function pegarDias(entrada, saida){
	let diaDeEntrada = new Date(entrada.value);
	let diaDeSaida = new Date(saida.value);
	let diferença = Math.abs(diaDeSaida.getTime() - diaDeEntrada.getTime());
	let dias = Math.ceil(diferença / (1000 * 60 * 60 * 24))

	return dias;
}

function botaoDeBusca(){
	/*let diaDeEntrada = new Date(entrada.value);
	let diaDeSaida = new Date(saida.value);
	let diferença = Math.abs(diaDeSaida.getTime() - diaDeEntrada.getTime()); // Subtrai uma data pela outra
	let dias = Math.ceil(diferença / (1000 * 60 * 60 * 24))
	//console.log(days)*/
	dias = pegarDias(entrada, saida);
	fazerRequisicao(document.getElementsByClassName('vitrine').length, dias);
	trocarEstado(secaoVitrine, "esconder");
	quartos = document.getElementsByClassName('vitrine');
	trocarEstado(quadroHospedes[0], "esconder");

	window.onscroll = scroll;

	function scroll(){
		if (document.documentElement.scrollHeight - document.documentElement.scrollTop === document.documentElement.clientHeight) {
			fazerRequisicao(document.getElementsByClassName('vitrine').length, dias);
			quartos = document.getElementsByClassName('vitrine');
		}
	}
}

/*for (var i = 0; i < quartos.length; i++) {
	quartos[i].addEventListener('click', console.log(i))
}*/


function adcionarQuarto(indice){

	if (produtoSelecionado.classList.contains('esconder')) {
		trocarEstado(produtoSelecionado, 'esconder')
	}



	let itemProdutoSelecionado = document.getElementsByClassName('itemProdutoSelecionado');
	let dias = pegarDias(entrada, saida);
	let total = document.getElementsByClassName('precoTotal')[indice].childNodes[0].innerHTML;
	let textoBase = document.getElementsByClassName('areaPreco')[indice].childNodes[0].innerHTML;
	console.log(textoBase);
	//let valorUm = ...
	itemProdutoSelecionado[0].innerHTML = textoBase.replace("/noite", " ");
	itemProdutoSelecionado[1].value = entrada.value;
	itemProdutoSelecionado[2].value = saida.value;
	itemProdutoSelecionado[3].innerHTML = confirmacaoHospedes[0].innerHTML;
	itemProdutoSelecionado[4].innerHTML = textoBase.replace("/", " x " + dias + " ");
	itemProdutoSelecionado[5].innerHTML = total//.replace("Total de", "");
	//document.getElementById('checkInSelecionado').value = entrada.value;

	/*var request = new XMLHttpRequest()

	request.open('GET', 'https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72', true);
	request.onload = function() {
		var quarto = JSON.parse(this.response);
	  	if (request.status >= 200 && request.status < 400) {
	  		let i =  indice;
		  	let estruturaHTMLQuartos = '<div class="row vitrine"><div class="col-md-5 col-sm-5 areaImagem" style="background-image: url('+ quarto[i].photo + ');"></div><div class="col-md-7  areaEscrita"><div class="tituloEsub"><h6>'+quarto[i].property_type+' inteiro</h6><h4>'+ quarto[i].name +'</h4></div><div class="areaPreco"><h3>R$'+ quarto[i].price +'/noite</h3><div class="precoTotal"><h3>Total de R$' + quarto[i].price +'</h3></div></div></div>';
		  	console.log(estruturaHTMLQuartos);
	  	}
	}

	// Send request
	request.send()*/
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

