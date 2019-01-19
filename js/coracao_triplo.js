// Rodrigo Rocha 19/01/2019

// Caminho da Imagem
coracao_triplo_img = "https://rodrigorochapinto.github.io/pages-teste/imagens/coracao_triplo.png";

// Números de elementos caindo na tela
coracao_triplo_no = 25;

if (typeof(window.pageYOffset) == "number")
{
	coracao_triplo_browser_width = window.innerWidth;
	coracao_triplo_browser_height = window.innerHeight;
} 
else if (document.body && (document.body.scrollLeft || document.body.scrollTop))
{
	coracao_triplo_browser_width = document.body.offsetWidth;
	coracao_triplo_browser_height = document.body.offsetHeight;
}
else if (document.documentElement && (document.documentElement.scrollLeft || document.documentElement.scrollTop))
{
	coracao_triplo_browser_width = document.documentElement.offsetWidth;
	coracao_triplo_browser_height = document.documentElement.offsetHeight;
}
else
{
	coracao_triplo_browser_width = 500;
	coracao_triplo_browser_height = 500;	
}

coracao_triplo_dx = [];
coracao_triplo_xp = [];
coracao_triplo_yp = [];
coracao_triplo_am = [];
coracao_triplo_stx = [];
coracao_triplo_sty = [];

for (i = 0; i < coracao_triplo_no; i++) 
{ 
	coracao_triplo_dx[i] = 0; 
	coracao_triplo_xp[i] = Math.random()*(coracao_triplo_browser_width-50);
	coracao_triplo_yp[i] = Math.random()*coracao_triplo_browser_height;
	coracao_triplo_am[i] = Math.random()*20; 
	coracao_triplo_stx[i] = 0.02 + Math.random()/10;
	coracao_triplo_sty[i] = 0.7 + Math.random();
	if (i > 0) document.write("<\div id=\"coracao_triplo_flake"+ i +"\" style=\"position:absolute;z-index:"+i+"\"><\img src=\""+coracao_triplo_img+"\" border=\"0\"><\/div>"); else document.write("<\div id=\"coracao_triplo_flake0\" style=\"position:absolute;z-index:0\"><a href=\"http://peters1.dk/tools/coracao_triplo.php\" target=\"_blank\"><\img src=\""+coracao_triplo_img+"\" border=\"0\"></a><\/div>");
}

function Coracao_triploStart() 
{ 
	for (i = 0; i < coracao_triplo_no; i++) 
	{ 
		coracao_triplo_yp[i] += coracao_triplo_sty[i];
		if (coracao_triplo_yp[i] > coracao_triplo_browser_height-50) 
		{
			coracao_triplo_xp[i] = Math.random()*(coracao_triplo_browser_width-coracao_triplo_am[i]-30);
			coracao_triplo_yp[i] = 0;
			coracao_triplo_stx[i] = 0.02 + Math.random()/10;
			coracao_triplo_sty[i] = 0.7 + Math.random();
		}
		coracao_triplo_dx[i] += coracao_triplo_stx[i];
		document.getElementById("coracao_triplo_flake"+i).style.top=coracao_triplo_yp[i]+"px";
		document.getElementById("coracao_triplo_flake"+i).style.left=coracao_triplo_xp[i] + coracao_triplo_am[i]*Math.sin(coracao_triplo_dx[i])+"px";
	}
	coracao_triplo_time = setTimeout("Coracao_triploStart()", 10);
}
Coracao_triploStart()
