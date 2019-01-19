// Rodrigo Rocha 19/01/2019

// TUX PIRATA

// Caminho da Imagem
tux_pirata_img = "https://rodrigorochapinto.github.io/pages-teste/imagens/tux_pirata.png";

// Números de elementos caindo na tela
tux_pirata_no = 25;

if (typeof(window.pageYOffset) == "number")
{
	tux_pirata_browser_width = window.innerWidth;
	tux_pirata_browser_height = window.innerHeight;
} 
else if (document.body && (document.body.scrollLeft || document.body.scrollTop))
{
	tux_pirata_browser_width = document.body.offsetWidth;
	tux_pirata_browser_height = document.body.offsetHeight;
}
else if (document.documentElement && (document.documentElement.scrollLeft || document.documentElement.scrollTop))
{
	tux_pirata_browser_width = document.documentElement.offsetWidth;
	tux_pirata_browser_height = document.documentElement.offsetHeight;
}
else
{
	tux_pirata_browser_width = 500;
	tux_pirata_browser_height = 500;	
}

tux_pirata_dx = [];
tux_pirata_xp = [];
tux_pirata_yp = [];
tux_pirata_am = [];
tux_pirata_stx = [];
tux_pirata_sty = [];

for (i = 0; i < tux_pirata_no; i++) 
{ 
	tux_pirata_dx[i] = 0; 
	tux_pirata_xp[i] = Math.random()*(tux_pirata_browser_width-50);
	tux_pirata_yp[i] = Math.random()*tux_pirata_browser_height;
	tux_pirata_am[i] = Math.random()*20; 
	tux_pirata_stx[i] = 0.02 + Math.random()/10;
	tux_pirata_sty[i] = 0.7 + Math.random();
	if (i > 0) document.write("<\div id=\"tux_pirata_flake"+ i +"\" style=\"position:absolute;z-index:"+i+"\"><\img src=\""+tux_pirata_img+"\" border=\"0\"><\/div>"); else document.write("<\div id=\"tux_pirata_flake0\" style=\"position:absolute;z-index:0\"><a href=\"http://peters1.dk/tools/tux_pirata.php\" target=\"_blank\"><\img src=\""+tux_pirata_img+"\" border=\"0\"></a><\/div>");
}

function Tux_pirataStart() 
{ 
	for (i = 0; i < tux_pirata_no; i++) 
	{ 
		tux_pirata_yp[i] += tux_pirata_sty[i];
		if (tux_pirata_yp[i] > tux_pirata_browser_height-50) 
		{
			tux_pirata_xp[i] = Math.random()*(tux_pirata_browser_width-tux_pirata_am[i]-30);
			tux_pirata_yp[i] = 0;
			tux_pirata_stx[i] = 0.02 + Math.random()/10;
			tux_pirata_sty[i] = 0.7 + Math.random();
		}
		tux_pirata_dx[i] += tux_pirata_stx[i];
		document.getElementById("tux_pirata_flake"+i).style.top=tux_pirata_yp[i]+"px";
		document.getElementById("tux_pirata_flake"+i).style.left=tux_pirata_xp[i] + tux_pirata_am[i]*Math.sin(tux_pirata_dx[i])+"px";
	}
	tux_pirata_time = setTimeout("Tux_pirataStart()", 10);
}
Tux_pirataStart()
