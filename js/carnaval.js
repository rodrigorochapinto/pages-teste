// Rodrigo Rocha 20/01/2019

// Caminho da Imagem

// LEMBRE-SE: De mudar o caminho, onde confete.png é salvo
confete_img = "https://rodrigorochapinto.github.io/pages-teste/imagens/confete.png";

// Numeros de elementos caindo na tela
confete_no = 25;

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
// LEMBRE-SE: De mudar o caminho, onde snow.png é salvo
snow_img = "https://rodrigorochapinto.github.io/pages-teste/imagens/floco_neve.png";

// Numeros de elementos caindo na tela
snow_no = 25;

if (typeof(window.pageYOffset) == "number")
{
	snow_browser_width = window.innerWidth;
	snow_browser_height = window.innerHeight;
} 
else if (document.body && (document.body.scrollLeft || document.body.scrollTop))
{
	snow_browser_width = document.body.offsetWidth;
	snow_browser_height = document.body.offsetHeight;
}
else if (document.documentElement && (document.documentElement.scrollLeft || document.documentElement.scrollTop))
{
	snow_browser_width = document.documentElement.offsetWidth;
	snow_browser_height = document.documentElement.offsetHeight;
}
else
{
	snow_browser_width = 500;
	snow_browser_height = 500;	
}

snow_dx = [];
snow_xp = [];
snow_yp = [];
snow_am = [];
snow_stx = [];
snow_sty = [];

for (i = 0; i < snow_no; i++) 
{ 
	snow_dx[i] = 0; 
	snow_xp[i] = Math.random()*(snow_browser_width-50);
	snow_yp[i] = Math.random()*snow_browser_height;
	snow_am[i] = Math.random()*20; 
	snow_stx[i] = 0.02 + Math.random()/10;
	snow_sty[i] = 0.7 + Math.random();
	if (i > 0) document.write("<\div id=\"snow_flake"+ i +"\" style=\"position:absolute;z-index:"+i+"\"><\img src=\""+snow_img+"\" border=\"0\"><\/div>"); else document.write("<\div id=\"snow_flake0\" style=\"position:absolute;z-index:0\"><a href=\"http://peters1.dk/tools/snow.php\" target=\"_blank\"><\img src=\""+snow_img+"\" border=\"0\"></a><\/div>");
}

function SnowStart() 
{ 
	for (i = 0; i < snow_no; i++) 
	{ 
		snow_yp[i] += snow_sty[i];
		if (snow_yp[i] > snow_browser_height-50) 
		{
			snow_xp[i] = Math.random()*(snow_browser_width-snow_am[i]-30);
			snow_yp[i] = 0;
			snow_stx[i] = 0.02 + Math.random()/10;
			snow_sty[i] = 0.7 + Math.random();
		}
		snow_dx[i] += snow_stx[i];
		document.getElementById("snow_flake"+i).style.top=snow_yp[i]+"px";
		document.getElementById("snow_flake"+i).style.left=snow_xp[i] + snow_am[i]*Math.sin(snow_dx[i])+"px";
	}
	snow_time = setTimeout("SnowStart()", 10);
}
SnowStart() 