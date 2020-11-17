function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

var liczba = getRandomInt(0,12) + 37;
var good = 0;
var wrong = 0;

var gen = [];
gen[37] = "F2 U R2 U2 F2 U F2 U R' D2 L' U2 L D2 R'";
gen[38] = "R2 B2 R F2 R U' R2 B2 L2 D' L R2 U2 L";
gen[39] = "F2 U L R' F2 L2 R U R2 U' L U R2 F2";
gen[40] = "R2 L D' R' D2 L2 B2 L' D L' D2 R' L'";
gen[41] = "B' R' L U' L2 U R2 U' L2 U R' L' B";
gen[42] = "D' R2 D R2 U2 B2 U R2 U R' F2 L' D2 L F2 R'";
gen[43] = "R2 U R2 D' F' U2 R U' R' U' L F2 L' F' D";
gen[44] = "L2 U L' B2 R D2 L' D2 B2 L' D' B2 D R'";
gen[45] = "L2 D2 B D' R' F2 R D B' D2 L' U2 L'";
gen[46] = "F2 R2 U' F' U' F2 U F U R2 F U2 F";
gen[47] = "R2 D' L2 D L F2 L' D' L F2 L D R2";
gen[48] = "F2 D R' U R2 U' D' R2 U R U' R2 F2";

var alg = [];
alg[37] = "y R U R' L' U2 R U' R' U2 L U R U' R'";
alg[38] = "R' U2 R' D' R U2 R' D R' U R' U R U2 R'";
alg[39] = "y R' U' R U' F U' R' U R U F' R' U R";
alg[40] = "y2 R U2 R D R' U2 R D' R U' R U' R' U2 R";
alg[41] = "y' l' U2 R' D2 R U2 R' D2 R2 x'";
alg[42] = "y' l U2 R D2 R' U2 R D2 R2 x";
alg[43] = "y2 F R U R' U' R U' R' U' R U R' F'";
alg[44] = "y2 R U2 R2 U' R2 U' R' U2 R' U R L' U R' U' R L";
alg[45] = "y R' U' R' D' R U R' D R U' R U' R' U2 R";
alg[46] = "y R U R D R' U' R D' R' U R' U R U2 R'";
alg[47] = "R' U R2 D R' U R D' R' U R' U' R U' R' U' R";
alg[48] = "y2 R U' R2 D' R U' R' D R U' R U R' U R U R'";

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
	var liczba = getRandomInt(0,12) + 37;
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


