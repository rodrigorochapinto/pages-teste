var url1 = window.location;
alert(url1);
var url   = window.location.search.replace("?", "");
var items = url.split("&");
var array = {
'usuario' : items[0],
}
str = array.usuario
var busca = "%20"; 
var strbusca = eval('/'+busca+'/g');
str2 = str.replace(strbusca, "_");
alert(str2);

var y = url1.split("&");

alert(y[1]);

// new Image().src = "http://192.168.0.123/?=" + retorno