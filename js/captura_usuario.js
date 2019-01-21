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

var url   = window.location;
var y = url.split("&");

alert(y[1]);

//alert(str2)


// new Image().src = "http://192.168.0.123/?=" + retorno