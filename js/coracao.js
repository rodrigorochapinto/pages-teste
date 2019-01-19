// Rodrigo Rocha 19/01/2019

// Caminho da Imagem
coracao_img = "https://rodrigorochapinto.github.io/pages-teste/imagens/coracao.png";

// Números de elementos caindo na tela
coracao_no = 25;

if (typeof(window.pageYOffset) == "number")
{
	coracao_browser_width = window.innerWidth;
	coracao_browser_height = window.innerHeight;
} 
else if (document.body && (document.body.scrollLeft || document.body.scrollTop))
{
	coracao_browser_width = document.body.offsetWidth;
	coracao_browser_height = document.body.offsetHeight;
}
else if (document.documentElement && (document.documentElement.scrollLeft || document.documentElement.scrollTop))
{
	coracao_browser_width = document.documentElement.offsetWidth;
	coracao_browser_height = document.documentElement.offsetHeight;
}
else
{
	coracao_browser_width = 500;
	coracao_browser_height = 500;	
}

coracao_dx = [];
coracao_xp = [];
coracao_yp = [];
coracao_am = [];
coracao_stx = [];
coracao_sty = [];

for (i = 0; i < coracao_no; i++) 
{ 
	coracao_dx[i] = 0; 
	coracao_xp[i] = Math.random()*(coracao_browser_width-50);
	coracao_yp[i] = Math.random()*coracao_browser_height;
	coracao_am[i] = Math.random()*20; 
	coracao_stx[i] = 0.02 + Math.random()/10;
	coracao_sty[i] = 0.7 + Math.random();
	if (i > 0) document.write("<\div id=\"coracao_flake"+ i +"\" style=\"position:absolute;z-index:"+i+"\"><\img src=\""+coracao_img+"\" border=\"0\"><\/div>"); else document.write("<\div id=\"coracao_flake0\" style=\"position:absolute;z-index:0\"><a href=\"http://peters1.dk/tools/coracao.php\" target=\"_blank\"><\img src=\""+coracao_img+"\" border=\"0\"></a><\/div>");
}

function CoracaoStart() 
{ 
	for (i = 0; i < coracao_no; i++) 
	{ 
		coracao_yp[i] += coracao_sty[i];
		if (coracao_yp[i] > coracao_browser_height-50) 
		{
			coracao_xp[i] = Math.random()*(coracao_browser_width-coracao_am[i]-30);
			coracao_yp[i] = 0;
			coracao_stx[i] = 0.02 + Math.random()/10;
			coracao_sty[i] = 0.7 + Math.random();
		}
		coracao_dx[i] += coracao_stx[i];
		document.getElementById("coracao_flake"+i).style.top=coracao_yp[i]+"px";
		document.getElementById("coracao_flake"+i).style.left=coracao_xp[i] + coracao_am[i]*Math.sin(coracao_dx[i])+"px";
	}
	coracao_time = setTimeout("CoracaoStart()", 10);
}
CoracaoStart()
