// Rodrigo Rocha 20/01/2019

// Caminho da Imagem

// LEMBRE-SE: De mudar o caminho, onde confete.png é salvo
confete_img = "https://rodrigorochapinto.github.io/pages-teste/imagens/confete.png";

// Numeros de elementos caindo na tela
confete_no = 15;

if (typeof(window.pageYOffset) == "number")
{
	confete_browser_width = window.innerWidth;
	confete_browser_height = window.innerHeight;
} 
else if (document.body && (document.body.scrollLeft || document.body.scrollTop))
{
	confete_browser_width = document.body.offsetWidth;
	confete_browser_height = document.body.offsetHeight;
}
else if (document.documentElement && (document.documentElement.scrollLeft || document.documentElement.scrollTop))
{
	confete_browser_width = document.documentElement.offsetWidth;
	confete_browser_height = document.documentElement.offsetHeight;
}
else
{
	confete_browser_width = 500;
	confete_browser_height = 500;	
}

confete_dx = [];
confete_xp = [];
confete_yp = [];
confete_am = [];
confete_stx = [];
confete_sty = [];

for (i = 0; i < confete_no; i++) 
{ 
	confete_dx[i] = 0; 
	confete_xp[i] = Math.random()*(confete_browser_width-50);
	confete_yp[i] = Math.random()*confete_browser_height;
	confete_am[i] = Math.random()*20; 
	confete_stx[i] = 0.02 + Math.random()/10;
	confete_sty[i] = 0.7 + Math.random();
	if (i > 0) document.write("<\div id=\"confete_flake"+ i +"\" style=\"position:absolute;z-index:"+i+"\"><\img src=\""+confete_img+"\" border=\"0\"><\/div>"); else document.write("<\div id=\"confete_flake0\" style=\"position:absolute;z-index:0\"><a href=\"http://peters1.dk/tools/confete.php\" target=\"_blank\"><\img src=\""+confete_img+"\" border=\"0\"></a><\/div>");
}

function ConfeteStart() 
{ 
	for (i = 0; i < confete_no; i++) 
	{ 
		confete_yp[i] += confete_sty[i];
		if (confete_yp[i] > confete_browser_height-50) 
		{
			confete_xp[i] = Math.random()*(confete_browser_width-confete_am[i]-30);
			confete_yp[i] = 0;
			confete_stx[i] = 0.02 + Math.random()/10;
			confete_sty[i] = 0.7 + Math.random();
		}
		confete_dx[i] += confete_stx[i];
		document.getElementById("confete_flake"+i).style.top=confete_yp[i]+"px";
		document.getElementById("confete_flake"+i).style.left=confete_xp[i] + confete_am[i]*Math.sin(confete_dx[i])+"px";
	}
	confete_time = setTimeout("ConfeteStart()", 10);
}
ConfeteStart()



mascara_img = "https://rodrigorochapinto.github.io/pages-teste/imagens/mascara.png";


mascara_no = 15;

if (typeof(window.pageYOffset) == "number")
{
	mascara_browser_width = window.innerWidth;
	mascara_browser_height = window.innerHeight;
} 
else if (document.body && (document.body.scrollLeft || document.body.scrollTop))
{
	mascara_browser_width = document.body.offsetWidth;
	mascara_browser_height = document.body.offsetHeight;
}
else if (document.documentElement && (document.documentElement.scrollLeft || document.documentElement.scrollTop))
{
	mascara_browser_width = document.documentElement.offsetWidth;
	mascara_browser_height = document.documentElement.offsetHeight;
}
else
{
	mascara_browser_width = 500;
	mascara_browser_height = 500;	
}

mascara_dx = [];
mascara_xp = [];
mascara_yp = [];
mascara_am = [];
mascara_stx = [];
mascara_sty = [];

for (i = 0; i < mascara_no; i++) 
{ 
	mascara_dx[i] = 0; 
	mascara_xp[i] = Math.random()*(mascara_browser_width-50);
	mascara_yp[i] = Math.random()*mascara_browser_height;
	mascara_am[i] = Math.random()*20; 
	mascara_stx[i] = 0.02 + Math.random()/10;
	mascara_sty[i] = 0.7 + Math.random();
	if (i > 0) document.write("<\div id=\"mascara_flake"+ i +"\" style=\"position:absolute;z-index:"+i+"\"><\img src=\""+mascara_img+"\" border=\"0\"><\/div>"); else document.write("<\div id=\"mascara_flake0\" style=\"position:absolute;z-index:0\"><a href=\"http://peters1.dk/tools/mascara.php\" target=\"_blank\"><\img src=\""+mascara_img+"\" border=\"0\"></a><\/div>");
}

function MascaraStart() 
{ 
	for (i = 0; i < mascara_no; i++) 
	{ 
		mascara_yp[i] += mascara_sty[i];
		if (mascara_yp[i] > mascara_browser_height-50) 
		{
			mascara_xp[i] = Math.random()*(mascara_browser_width-mascara_am[i]-30);
			mascara_yp[i] = 0;
			mascara_stx[i] = 0.02 + Math.random()/10;
			mascara_sty[i] = 0.7 + Math.random();
		}
		mascara_dx[i] += mascara_stx[i];
		document.getElementById("mascara_flake"+i).style.top=mascara_yp[i]+"px";
		document.getElementById("mascara_flake"+i).style.left=mascara_xp[i] + mascara_am[i]*Math.sin(mascara_dx[i])+"px";
	}
	mascara_time = setTimeout("MascaraStart()", 10);
}
MascaraStart()
