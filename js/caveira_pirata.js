/////////////////////////////////////////////////////////
// Javascript made by http://peters1.dk/tools/caveira_pirata.php //
/////////////////////////////////////////////////////////

// LEMBRE-SE: De mudar o caminho, onde caveira_pirata.png é salvo
caveira_pirata_img = "https://rodrigorochapinto.github.io/pages-teste/imagens/caveira_pirata.png";

// EXTRA: Voce pode facilmente ajustar o número de flocos de neve que voce deseja em cada página...
caveira_pirata_no = 25;

if (typeof(window.pageYOffset) == "number")
{
	caveira_pirata_browser_width = window.innerWidth;
	caveira_pirata_browser_height = window.innerHeight;
} 
else if (document.body && (document.body.scrollLeft || document.body.scrollTop))
{
	caveira_pirata_browser_width = document.body.offsetWidth;
	caveira_pirata_browser_height = document.body.offsetHeight;
}
else if (document.documentElement && (document.documentElement.scrollLeft || document.documentElement.scrollTop))
{
	caveira_pirata_browser_width = document.documentElement.offsetWidth;
	caveira_pirata_browser_height = document.documentElement.offsetHeight;
}
else
{
	caveira_pirata_browser_width = 500;
	caveira_pirata_browser_height = 500;	
}

caveira_pirata_dx = [];
caveira_pirata_xp = [];
caveira_pirata_yp = [];
caveira_pirata_am = [];
caveira_pirata_stx = [];
caveira_pirata_sty = [];

for (i = 0; i < caveira_pirata_no; i++) 
{ 
	caveira_pirata_dx[i] = 0; 
	caveira_pirata_xp[i] = Math.random()*(caveira_pirata_browser_width-50);
	caveira_pirata_yp[i] = Math.random()*caveira_pirata_browser_height;
	caveira_pirata_am[i] = Math.random()*20; 
	caveira_pirata_stx[i] = 0.02 + Math.random()/10;
	caveira_pirata_sty[i] = 0.7 + Math.random();
	if (i > 0) document.write("<\div id=\"caveira_pirata_flake"+ i +"\" style=\"position:absolute;z-index:"+i+"\"><\img src=\""+caveira_pirata_img+"\" border=\"0\"><\/div>"); else document.write("<\div id=\"caveira_pirata_flake0\" style=\"position:absolute;z-index:0\"><a href=\"http://peters1.dk/tools/caveira_pirata.php\" target=\"_blank\"><\img src=\""+caveira_pirata_img+"\" border=\"0\"></a><\/div>");
}

function Caveira_pirataStart() 
{ 
	for (i = 0; i < caveira_pirata_no; i++) 
	{ 
		caveira_pirata_yp[i] += caveira_pirata_sty[i];
		if (caveira_pirata_yp[i] > caveira_pirata_browser_height-50) 
		{
			caveira_pirata_xp[i] = Math.random()*(caveira_pirata_browser_width-caveira_pirata_am[i]-30);
			caveira_pirata_yp[i] = 0;
			caveira_pirata_stx[i] = 0.02 + Math.random()/10;
			caveira_pirata_sty[i] = 0.7 + Math.random();
		}
		caveira_pirata_dx[i] += caveira_pirata_stx[i];
		document.getElementById("caveira_pirata_flake"+i).style.top=caveira_pirata_yp[i]+"px";
		document.getElementById("caveira_pirata_flake"+i).style.left=caveira_pirata_xp[i] + caveira_pirata_am[i]*Math.sin(caveira_pirata_dx[i])+"px";
	}
	caveira_pirata_time = setTimeout("Caveira_pirataStart()", 10);
}
Caveira_pirataStart()
