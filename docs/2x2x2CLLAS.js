function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

var liczba = getRandomInt(0,6) + 1;
var good = 0;
var wrong = 0;

var gen = [];
gen[1] = "U R U R' U R U2 R' U'";
gen[2] = "U' R' F2 R U R' F R U'";
gen[3] = "R U F U' F U2 R F2 U'";
gen[4] = "R' F R2 U F R2 U' R F' R'";
gen[5] = "R F' U' F U2 F R2 F' U'";
gen[6] = "F2 U' F R' F R F2 R U' R'";

var alg = [];
alg[1] = "L' U' L U' L' U2 L";
alg[2] = "y2 R U2 R' F R' F' R U' R U' R'";
alg[3] = "L' U R U' L U R'";
alg[4] = "F' L F L' U2 L' U2 L";
alg[5] = "R U2 R' U2 R' F R F'";
alg[6] = "y2 L' U L' U L U' L U F' L F'";

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
	$('.view').html('<img src="img/2x2x2CLLAS'+liczba+'.svg" style="transform: rotateZ(180deg);">');
	$('.scramble').html(gen[liczba]);
	$('.counter').html('Attempts: '+good+'/'+wrong);
	$('.accuracy').html('Accuracy: '+(good/wrong*100).toFixed(1)+'%');
	$('.forgotover').html('<div class="forgot"></div><div style="clear:both"></div>');
	$('.forgot').click(function () {
    $('.forgotover').html('Algorithm: '+alg[liczba]);
    $('.forgotover').css('margin-bottom', '0px');
});
}


