// Rodrigo Rocha 19/01/2019

// Caminho da Imagem
pirata_img = "https://rodrigorochapinto.github.io/pages-teste/imagens/pirata.png";

// Números de elementos caindo na tela
pirata_no = 25;

if (typeof(window.pageYOffset) == "number")
{
	pirata_browser_width = window.innerWidth;
	pirata_browser_height = window.innerHeight;
} 
else if (document.body && (document.body.scrollLeft || document.body.scrollTop))
{
	pirata_browser_width = document.body.offsetWidth;
	pirata_browser_height = document.body.offsetHeight;
}
else if (document.documentElement && (document.documentElement.scrollLeft || document.documentElement.scrollTop))
{
	pirata_browser_width = document.documentElement.offsetWidth;
	pirata_browser_height = document.documentElement.offsetHeight;
}
else
{
	pirata_browser_width = 500;
	pirata_browser_height = 500;	
}

pirata_dx = [];
pirata_xp = [];
pirata_yp = [];
pirata_am = [];
pirata_stx = [];
pirata_sty = [];

for (i = 0; i < pirata_no; i++) 
{ 
	pirata_dx[i] = 0; 
	pirata_xp[i] = Math.random()*(pirata_browser_width-50);
	pirata_yp[i] = Math.random()*pirata_browser_height;
	pirata_am[i] = Math.random()*20; 
	pirata_stx[i] = 0.02 + Math.random()/10;
	pirata_sty[i] = 0.7 + Math.random();
	if (i > 0) document.write("<\div id=\"pirata_flake"+ i +"\" style=\"position:absolute;z-index:"+i+"\"><\img src=\""+pirata_img+"\" border=\"0\"><\/div>"); else document.write("<\div id=\"pirata_flake0\" style=\"position:absolute;z-index:0\"><a href=\"http://peters1.dk/tools/pirata.php\" target=\"_blank\"><\img src=\""+pirata_img+"\" border=\"0\"></a><\/div>");
}

function PirataStart() 
{ 
	for (i = 0; i < pirata_no; i++) 
	{ 
		pirata_yp[i] += pirata_sty[i];
		if (pirata_yp[i] > pirata_browser_height-50) 
		{
			pirata_xp[i] = Math.random()*(pirata_browser_width-pirata_am[i]-30);
			pirata_yp[i] = 0;
			pirata_stx[i] = 0.02 + Math.random()/10;
			pirata_sty[i] = 0.7 + Math.random();
		}
		pirata_dx[i] += pirata_stx[i];
		document.getElementById("pirata_flake"+i).style.top=pirata_yp[i]+"px";
		document.getElementById("pirata_flake"+i).style.left=pirata_xp[i] + pirata_am[i]*Math.sin(pirata_dx[i])+"px";
	}
	pirata_time = setTimeout("PirataStart()", 10);
}
PirataStart()
