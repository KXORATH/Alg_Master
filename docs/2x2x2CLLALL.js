function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

var liczba = getRandomInt(0,40) + 1;
var good = 0;
var wrong = 0;
var cubecasenumber;
var number;

if (liczba>0 && liczba<5) 
{
	cubecasenumber = 1;
	if (liczba == 1) number = 1;
	if (liczba == 2) number = 2;
	if (liczba == 3) number = 3;
	if (liczba == 4) number = 4;
}
if (liczba>4 && liczba<11)
{
	cubecasenumber = 2;
	if (liczba == 5) number = 1;
	if (liczba == 6) number = 2;
	if (liczba == 7) number = 3;
	if (liczba == 8) number = 4;
	if (liczba == 9) number = 5;
	if (liczba == 10) number = 6;
}
if (liczba>10 && liczba<17)
{	
	cubecasenumber = 3;
	if (liczba == 11) number = 1;
	if (liczba == 12) number = 2;
	if (liczba == 13) number = 3;
	if (liczba == 14) number = 4;
	if (liczba == 15) number = 5;
	if (liczba == 16) number = 6;
}
if (liczba>16 && liczba<23)
{	
	cubecasenumber = 4;
	if (liczba == 17) number = 1;
	if (liczba == 18) number = 2;
	if (liczba == 19) number = 3;
	if (liczba == 20) number = 4;
	if (liczba == 21) number = 5;
	if (liczba == 22) number = 6;
}
if (liczba>22 && liczba<29)
{	
	cubecasenumber = 5;
	if (liczba == 23) number = 1;
	if (liczba == 24) number = 2;
	if (liczba == 25) number = 3;
	if (liczba == 26) number = 4;
	if (liczba == 27) number = 5;
	if (liczba == 28) number = 6;
}
if (liczba>28 && liczba<35)
{	
	cubecasenumber = 6;
	if (liczba == 29) number = 1;
	if (liczba == 30) number = 2;
	if (liczba == 31) number = 3;
	if (liczba == 32) number = 4;
	if (liczba == 33) number = 5;
	if (liczba == 34) number = 6;
}
if (liczba>34 && liczba<41)
{	
	cubecasenumber = 7;
	if (liczba == 35) number = 1;
	if (liczba == 36) number = 2;
	if (liczba == 37) number = 3;
	if (liczba == 38) number = 4;
	if (liczba == 39) number = 5;
	if (liczba == 40) number = 6;
}

var cubecase = [];
cubecase[1] = "H";
cubecase[2] = "Pi";
cubecase[3] = "S";
cubecase[4] = "AS";
cubecase[5] = "T";
cubecase[6] = "L";
cubecase[7] = "U";

var gen = [];
//H
gen[1] = "U2 R2 F2 U2 R' U2 F2 R2 U'";
gen[2] = "U R2 F' R2 F2 U2 F' R2 U'";
gen[3] = "R2 U2 F' R' U2 R' U2 R' F'";
gen[4] = "F R' U2 R2 F R' U R2 U R2";

//Pi
gen[5] = "R F2 U2 F U' R U' F2 U2 R'";
gen[6] = "F R2 F2 R' U2 R F2 R2 F'";
gen[7] = "R F' R' F U2 R U' F U' R2";
gen[8] = "F' U F R' U2 F2 R' F' U F'";
gen[9] = "R2 U' F U R2 F2 R' F' R U' F'";
gen[10] = "F' U R U2 R' U F2 R' F2 R";

//Sune
gen[11] = "F' U F' R' U2 R F2 R' U'";
gen[12] = "R2 U' R' F2 U F R U2 F' R";
gen[13] = "R2 F' R2 U' F R' U' F' U2";
gen[14] = "R F2 R' F2 R' F U F' U2";
gen[15] = "F' R F' R U R U2 F2 U' R'";
gen[16] = "F' R' U2 F U2 F U' R F R2";

//Anti-Sune
gen[17] = "U R U R' U R U2 R' U'";
gen[18] = "U' R' F2 R U R' F R U'";
gen[19] = "R U F U' F U2 R F2 U'";
gen[20] = "R' F R2 U F R2 U' R F' R'";
gen[21] = "R F' U' F U2 F R2 F' U'";
gen[22] = "F2 U' F R' F R F2 R U' R'";

//T
gen[23] = "U F' U2 F U2 R U R' U'";
gen[24] = "F2 U' R' F U2 R F2 R' U'";
gen[25] = "F' R' U F' U F' R' U2 R2 F'";
gen[26] = "R' F2 U2 F' U R' U R' F' R'";
gen[27] = "R' F U' R F R' U R F'";
gen[28] = "R U' R' U2 R2 F' U' F R'";

//L
gen[29] = "F U R F U' R' F' R' U'";
gen[30] = "U' F U F' U' R' F' R U'";
gen[31] = "R' F' R2 U2 R' F' R U2 R'";
gen[32] = "R2 U' R2 F U R F2 U' F' R";
gen[33] = "F U' F' U2 F' R' F2 R2 U' R'";
gen[34] = "U R' U' R2 F2 R' U' R F2 R'";

//U
gen[35] = "U' R U2 F R2 F' U2 R' U'";
gen[36] = "U R F2 U2 R' U' F R' F R'";
gen[37] = "F' U R F' R F R' F R'";
gen[38] = "F R U' R2 U' F' R' U F2 R";
gen[39] = "F U2 R U' R U2 F R U2 R2";
gen[40] = "F R U2 F' R2 F U' R' U R2";

var alg = [];
alg[1] = "R2 U2' R U2 R2'";
alg[2] = "x' U2 R U2' R2' F2 R U2'";
alg[3] = "R' U2 R y R' U R' U' R U' R";
alg[4] = "y R U R' U R U R' F R' F' R";

alg[5] = "R2 U R' U' F R F' R U' R2'";
alg[6] = "F (R U R' U')(R U R' U') F'";
alg[7] = "y R U' R U' R' U R' F R2 F'";
alg[8] = "R U' R' F R' F R U R' F R";
alg[9] = "R U2 R' U' R U R' U2 R' F R F'";
alg[10] = "y2 L' U2 L U L' U' L U2 L F' L' F";

alg[11] = "R U R' U R U2 R'";
alg[12] = "y2 R U R' U R' F R F' R U2 R'";
alg[13] = "R U' L' U R' U' L";
alg[14] = "F R' F' R U2 R U2 R'";
alg[15] = "L' U2 L U2 L F' L' F";
alg[16] = "y2 R U' R U' R' U R' U' F R' F'";

alg[17] = "L' U' L U' L' U2 L";
alg[18] = "y2 R U2 R' F R' F' R U' R U' R'";
alg[19] = "L' U R U' L U R'";
alg[20] = "F' L F L' U2 L' U2 L";
alg[21] = "R U2 R' U2 R' F R F'";
alg[22] = "y2 L' U L' U L U' L U F' L F'";

alg[23] = "(R U R' U')(R' F R F')";
alg[24] = "y2 L' U' L U L F' L' F";
alg[25] = "y' R' U R' U2 R U2 R' U R2 U' R'";
alg[26] = "y F U' R U2 R' U' F2 R U R'";
alg[27] = "y2 L F' z' R' U R' U' R U' R";
alg[28] = "y R' U R U2 R2 F R F' R";

alg[29] = "F R' F' R U R U' R'";
alg[30] = "F R U' R' U' R U R' F'";
alg[31] = "R U2 R2' F R F' R U2' R'";
alg[32] = "R U2 R' U' y' R2 U' R' U R2";
alg[33] = "y L' U2 L U y' R2 U R U' R2'";
alg[34] = "y R' U R' U2 R U' R' U R U' R2";

alg[35] = "F (R U R' U') F'";
alg[36] = "y' R2' F2 R U R' F U' R U R2";
alg[37] = "y x R U' R U' R' U L' U' L";
alg[38] = "z' U2 R' U' R2 U' R' U' R U' R' U'";
alg[39] = "y' R U2 R' U R' F2 R F' R' F2 R";
alg[40] = "y' R' F2 R U' R U2' R' F R U2' R'";


replacement();
$('.accuracy').html('Accuracy: ');

$('.good').click(function () {
    good++;
	wrong++;
	replacement();
});

$('.wrong').click(function () {
    wrong++;
	replacement();
});

$('.next').click(function () {
	replacement();
});

document.onkeyup = function(e) {
  if (e.which == 71 || e.which == 103) 
  {
	good++;
	wrong++;
    replacement();
  } 
  if (e.which == 87 || e.which == 119) 
  {
	wrong++;
    replacement();
  } 
  if (e.which == 78 || e.which == 110) 
  {
    replacement();
  } 
};


function replacement()
{
	var liczba = getRandomInt(0,40) + 1;
	var cubecasenumber;
	var number;

	if (liczba>0 && liczba<5) 
	{
		cubecasenumber = 1;
		if (liczba == 1) number = 1;
		if (liczba == 2) number = 2;
		if (liczba == 3) number = 3;
		if (liczba == 4) number = 4;
	}
	if (liczba>4 && liczba<11)
	{
		cubecasenumber = 2;
		if (liczba == 5) number = 1;
		if (liczba == 6) number = 2;
		if (liczba == 7) number = 3;
		if (liczba == 8) number = 4;
		if (liczba == 9) number = 5;
		if (liczba == 10) number = 6;
	}
	if (liczba>10 && liczba<17)
	{	
		cubecasenumber = 3;
		if (liczba == 11) number = 1;
		if (liczba == 12) number = 2;
		if (liczba == 13) number = 3;
		if (liczba == 14) number = 4;
		if (liczba == 15) number = 5;
		if (liczba == 16) number = 6;
	}
	if (liczba>16 && liczba<23)
	{	
		cubecasenumber = 4;
		if (liczba == 17) number = 1;
		if (liczba == 18) number = 2;
		if (liczba == 19) number = 3;
		if (liczba == 20) number = 4;
		if (liczba == 21) number = 5;
		if (liczba == 22) number = 6;
	}
	if (liczba>22 && liczba<29)
	{	
		cubecasenumber = 5;
		if (liczba == 23) number = 1;
		if (liczba == 24) number = 2;
		if (liczba == 25) number = 3;
		if (liczba == 26) number = 4;
		if (liczba == 27) number = 5;
		if (liczba == 28) number = 6;
	}
	if (liczba>28 && liczba<35)
	{	
		cubecasenumber = 6;
		if (liczba == 29) number = 1;
		if (liczba == 30) number = 2;
		if (liczba == 31) number = 3;
		if (liczba == 32) number = 4;
		if (liczba == 33) number = 5;
		if (liczba == 34) number = 6;
	}
	if (liczba>34 && liczba<41)
	{	
		cubecasenumber = 7;
		if (liczba == 35) number = 1;
		if (liczba == 36) number = 2;
		if (liczba == 37) number = 3;
		if (liczba == 38) number = 4;
		if (liczba == 39) number = 5;
		if (liczba == 40) number = 6;
	}
	
	if (cubecasenumber == 1) $('.view').html('<img src="img/2x2x2CLL'+cubecase[cubecasenumber]+number+'.svg" style="transform: rotateZ(90deg);">');
	if (cubecasenumber == 2) $('.view').html('<img src="img/2x2x2CLL'+cubecase[cubecasenumber]+number+'.svg">');
	if (cubecasenumber == 3) $('.view').html('<img src="img/2x2x2CLL'+cubecase[cubecasenumber]+number+'.svg">');
	if (cubecasenumber == 4) $('.view').html('<img src="img/2x2x2CLL'+cubecase[cubecasenumber]+number+'.svg" style="transform: rotateZ(180deg);">');
	if (cubecasenumber == 5) $('.view').html('<img src="img/2x2x2CLL'+cubecase[cubecasenumber]+number+'.svg" style="transform: rotateZ(-90deg);">');
	if (cubecasenumber == 6) $('.view').html('<img src="img/2x2x2CLL'+cubecase[cubecasenumber]+number+'.svg" style="transform: rotateZ(90deg);">');
	if (cubecasenumber == 7) $('.view').html('<img src="img/2x2x2CLL'+cubecase[cubecasenumber]+number+'.svg" style="transform: rotateZ(-90deg);">');
	$('.scramble').html(gen[liczba]);
	$('.counter').html('Attempts: '+good+'/'+wrong);
	$('.accuracy').html('Accuracy: '+(good/wrong*100).toFixed(1)+'%');
	$('.forgotover').html('<div class="forgot"></div><div style="clear:both"></div>');
	$('.forgot').click(function () {
    $('.forgotover').html('Algorithm: '+alg[liczba]);
    $('.forgotover').css('margin-bottom', '0px');
});
}


//zmiana dla Arletki