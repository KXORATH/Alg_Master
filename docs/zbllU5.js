function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

var liczba = getRandomInt(0,12) + 61;
var good = 0;
var wrong = 0;

var gen = [];
gen[61] = "D' R2 U2 L' R' U' R U L U2 R2 D R U2 R'";
gen[62] = "R F' L2 B2 D L' D' L B2 L2 F R'";
gen[63] = "F2 U' L' U2 L B' R' F2 R U F2 U' B";
gen[64] = "R2 F2 U' F D' U2 L2 D' U' F' D2 R2 U B'";
gen[65] = "F U2 F D' L2 D F' U2 F D' L2 D F2";
gen[66] = "L F U F2 L2 D' L' D L' F U' L'";
gen[67] = "F L' U2 L U F2 U F2 U' R' F2 R F'";
gen[68] = "R2 U R U F2 L2 D L' F2 R' F2 D L' F2";
gen[69] = "L D2 R' U' L' U2 R U L U D2 R' U L' U2 R";
gen[70] = "F D B U D' F' U2 L2 U' F' D F' B' R2 D' F2";
gen[71] = "F' L' B L F L2 F2 L B' L' F2 L2";
gen[72] = "L2 F D2 F' L U2 L' F D2 F' L U2 L";

var alg = [];
alg[61] = "y L' U' L U L' U L U2 L' U L U2 L' U' L";
alg[62] = "y' R U R' U' R U' R' U2 R U' R' U2 R U R'";
alg[63] = "y (R U2 R' U' R U' R') U' (R U R' U R U2 R')";
alg[64] = "y R' U' F R' F' R2 U' R' U F' U F R";
alg[65] = "y' (L' U2 L U L' U L) U (L' U' L U' L' U2 L)";
alg[66] = "y R U2 R2' U' R2 U' R' U R' U' R U R' U R";
alg[67] = "y2 R U R' U R' U2 R2 U R2' U R2 U' R'";
alg[68] = "R' U' R U' R U2 R2' U' R2 U' R2' U R";
alg[69] = "y2 (L' U' L U' L' U2 L) (L U L' U L U2 L')";
alg[70] = "y2 (R U R' U R U2 R') (R' U' R U' R' U2 R)";
alg[71] = "R U R' U' R U' R U2 R2' U' R U R' U' R2 U' R2'";
alg[72] = "y (R U2 R' U' R U' R') (L' U2 L U L' U L)";

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
	var liczba = getRandomInt(0,12) + 61;
	$('.view').html('<img src="img/zbllU'+liczba+'.svg">');
	$('.scramble').html(gen[liczba]);
	$('.counter').html('Attempts: '+good+'/'+wrong);
	$('.accuracy').html('Accuracy: '+(good/wrong*100).toFixed(1)+'%');
	$('.forgotover').html('<div class="forgot"></div><div style="clear:both"></div>');
	$('.forgot').click(function () {
    $('.forgotover').html('Algorithm: '+alg[liczba]);
    $('.forgotover').css('margin-bottom', '0px');
});
}


