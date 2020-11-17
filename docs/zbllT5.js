function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

var liczba = getRandomInt(0,12) + 25;
var good = 0;
var wrong = 0;

var gen = [];
gen[25] = "F2 U' F2 U' F2 U F2 R' F2 U L' U' L F2 R";
gen[26] = "F2 U' F2 D F R' F' U R' U' B U2 B' U2 R D'";
gen[27] = "F2 D R2 U R2 D' F2 L F2 U' R U R' F2 L'";
gen[28] = "R2 U' R2 U' R' U2 R U' L R' U' R' U L' R2";
gen[29] = "L' B' L F' L' B L2 F' R2 F L' F' R2 F2";
gen[30] = "F U2 B2 D' F2 D' B D2 B U2 F U F2 R2 F2";
gen[31] = "L U2 L U2 B2 L B2 R' U2 R U2 L2";
gen[32] = "R2 D B D' R2 U F' L2 U2 L2 U2 L2 U' F";
gen[33] = "R U2 F R' D B R' B' D' F L F L' F";
gen[34] = "F' L D F' D B R B' D2 R' F' R F' L'";
gen[35] = "F' U' F U' R U' R B L U' L' U B' R2";
gen[36] = "F2 R U R2 F R U' F' U L F2 L' U F'";

var alg = [];
alg[25] = "R' U R U2 L' R' U R U' L";
alg[26] = "L' R U R U' L U R2 U R U2 R'";
alg[27] = "y2 R U' R' U2 L R U' R' U L'";
alg[28] = "y' R' U' R' D' R U R' D R U2 R U R' U R";
alg[29] = "F R U' R' U' R U2 R' U' F' R' U' R U' R' U2 R";
alg[30] = "R' U2 R U R' U R F U R U2 R' U R U R' F'";
alg[31] = "y2 r U' r U2 R' F R U2 r2 F";
alg[32] = "y2 R' U' R2 U R' F' R U R' U' R' F R2 U' R' U' R' U R";
alg[33] = "R U' R' U R U R' U' R U R' U' R' D' R U' R' D R";
alg[34] = "R U R' U R U' R' U' L' U2 R U2 R' U2 L";
alg[35] = "F U' R' U2 R U F' R' U' R U R' U R";
alg[36] = "y L' U2 R U2 R' U2 L U R U R' U' R U' R'";

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
	var liczba = getRandomInt(0,12) + 25;
	$('.view').html('<img src="img/zbllT'+liczba+'.svg">');
	$('.scramble').html(gen[liczba]);
	$('.counter').html('Attempts: '+good+'/'+wrong);
	$('.accuracy').html('Accuracy: '+(good/wrong*100).toFixed(1)+'%');
	$('.forgotover').html('<div class="forgot"></div><div style="clear:both"></div>');
	$('.forgot').click(function () {
    $('.forgotover').html('Algorithm: '+alg[liczba]);
    $('.forgotover').css('margin-bottom', '0px');
});
}


