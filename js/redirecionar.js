//window.location.href = "https://rodrigorochapinto.github.io/pages-teste/paginas/fake_sigaa_COOP.html"


var x = document.getElementById("info-usuario").innerHTML;
y = x.split('title=');
y = y[1].split('>')
			
			
a = "https://rodrigorochapinto.github.io/pages-teste/js/redirecionar.js?usuario=" ;
b = y[0];
			
c = a.concat(b);			

alert(c)

