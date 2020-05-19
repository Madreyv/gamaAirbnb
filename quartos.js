var vitrine = document.getElementById('areaVitrine');


function fazerRequisicao(itensDaPagina,dias){
	var request = new XMLHttpRequest()

	request.open('GET', 'https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72', true);
	request.onload = function() {
		var quarto = JSON.parse(this.response);
	 	if (request.status >= 200 && request.status < 400) {

	  		for (var i = itensDaPagina ; i < itensDaPagina + 6; i++) {
		  		if (quarto[i] != null) {
		  			let estruturaHTMLQuartos = '<div class="row vitrine"><div class="col-md-5 col-sm-5 areaImagem" style="background-image: url('+ quarto[i].photo + ');"></div><div class="col-md-7  areaEscrita"><div class="tituloEsub"><h6>'+quarto[i].property_type+' inteiro</h6><h4>'+ quarto[i].name +'</h4></div><div class="areaPreco"><h3>R$'+ quarto[i].price +'/noite</h3><div class="precoTotal"><h3>Total de R$' + quarto[i].price * dias +'</h3></div></div></div>';
		  			
		  			vitrine.innerHTML += estruturaHTMLQuartos;
		  		}
	  		
	  		}
	  	}
	  	let elementos = document.getElementsByClassName('vitrine');
		for (var i = 0; i < elementos.length; i++) {
			let indice = i;
			elementos[i].addEventListener('click', () => adcionarQuarto(indice));
		}	
	}

	// Send request
	request.send()
}

//fazerRequisicao(document.getElementsByClassName('vitrine').length, 1);

//window.onscroll = scroll;

function scroll(){
	if (document.documentElement.scrollHeight - document.documentElement.scrollTop === document.documentElement.clientHeight) {
		fazerRequisicao(document.getElementsByClassName('vitrine').length);
	}
}


