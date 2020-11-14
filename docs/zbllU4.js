function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

var liczba = getRandomInt(0,12) + 25;
var good = 0;
var wrong = 0;

var gen = [];
gen[25] = "B D' R2 F R' F' R' D B R' U' R B2";
gen[26] = "R2 F2 R F2 R U' R' U L' U L U' R";
gen[27] = "F' D R2 B' R B R D' F' R U R' F2";
gen[28] = "F2 D' L2 D' R' U R' U2 B2 R' D' R' D' L2";
gen[29] = "F2 U2 F2 U F2 U F2 U R2 U2 R2 F U' R2 U' R2 U F'";
gen[30] = "F U F' R' F2 D F' U' F D' F2 U R";
gen[31] = "F2 U L' F' L2 D2 R' B' R D2 L' F U' F2";
gen[32] = "F' U2 F' R2 D2 B U2 L2 B L2 U2 B D' B D' R2 U F'";
gen[33] = "L' U' L F' L2 U' L D' L2 D L' U L2 F";
gen[34] = "R' U' R F' U L' U2 R' U2 R U2 L U' F";
gen[35] = "R2 F2 U B2 D2 L2 D' L2 D' L2 D2 L2 B' U' F2 U B' U' R2";
gen[36] = "F' U' L F2 R' L' D2 L D F L' D F2 R";

var alg = [];
alg[25] = "R' F R U' R' U' R U R' F' R U R' U' R' F R F' R";
alg[26] = "L' R' U2 L U2 R U' L' U R' U R U' L";
alg[27] = "y' F2 R U' R' U' R U R' F' R U R' U' R' F R F2";
alg[28] = "L R U2 R' U2 L' U R U' L U' L' U R'";
alg[29] = "y' F U R2' D' R U' R' D R2 F' R' U R";
alg[30] = "y' R' U' R F R2 D' R U R' D R2 U' F'";
alg[31] = "y2 R2 B2 R' U2 R' U2 B2 R' B2 R B2 R' B2 R2 B2";
alg[32] = "y' R2 F' (R U R' U') R' F R2 U' R' U2 R2 U R' U R";
alg[33] = "y R' U' R U' R' U2 R U' R' U2 R' D' R U2 R' D R2";
alg[34] = "y' R U2 R2 L' U2 L U L' U2 R2 U' M' x'";
alg[35] = "L R' U' R2 U2 L' U L U2 L' R2' U2 R";
alg[36] = "R' L U L2 U2 R U' R' U2 R L2 U2 L'";

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
	$('.view').html('<img src="img/zbllU'+liczba+'.svg">');
	$('.scramble').html(gen[liczba]);
	$('.counter').html('Attempts: '+good+'/'+wrong);
	$('.accuracy').html('Accuracy: '+(good/wrong*100).toFixed(1)+'%');
	$('.forgotover').html('<div class="forgot"></div>');
	$('.forgot').click(function () {
    $('.forgotover').html('Algoritmh: '+alg[liczba]);
    $('.forgotover').css('margin-bottom', '0px');
});
}


