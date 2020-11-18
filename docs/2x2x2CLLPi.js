function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

var liczba = getRandomInt(0,6) + 1;
var good = 0;
var wrong = 0;

var gen = [];
gen[1] = "R F2 U2 F U' R U' F2 U2 R'";
gen[2] = "F R2 F2 R' U2 R F2 R2 F'";
gen[3] = "R F' R' F U2 R U' F U' R2";
gen[4] = "F' U F R' U2 F2 R' F' U F'";
gen[5] = "";
gen[6] = "F' U R U2 R' U F2 R' F2 R";

var alg = [];
alg[1] = "R2 U R' U' F R F' R U' R2'";
alg[2] = "F (R U R' U')(R U R' U') F'";
alg[3] = "y R U' R U' R' U R' F R2 F'";
alg[4] = "R U' R' F R' F R U R' F R";
alg[5] = "R U2 R' U' R U R' U2 R' F R F'";
alg[6] = "y2 L' U2 L U L' U' L U2 L F' L' F";

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
	var liczba = getRandomInt(0,6) + 1;
	$('.view').html('<img src="img/2x2x2CLLPi'+liczba+'.svg">');
	$('.scramble').html(gen[liczba]);
	$('.counter').html('Attempts: '+good+'/'+wrong);
	$('.accuracy').html('Accuracy: '+(good/wrong*100).toFixed(1)+'%');
	$('.forgotover').html('<div class="forgot"></div><div style="clear:both"></div>');
	$('.forgot').click(function () {
    $('.forgotover').html('Algorithm: '+alg[liczba]);
    $('.forgotover').css('margin-bottom', '0px');
});
}


