function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

var liczba = getRandomInt(0,6) + 1;
var good = 0;
var wrong = 0;

var gen = [];
gen[1] = "U' R U2 F R2 F' U2 R' U'";
gen[2] = "U R F2 U2 R' U' F R' F R'";
gen[3] = "F' U R F' R F R' F R'";
gen[4] = "F R U' R2 U' F' R' U F2 R";
gen[5] = "F U2 R U' R U2 F R U2 R2";
gen[6] = "F R U2 F' R2 F U' R' U R2";

var alg = [];
alg[1] = "F (R U R' U') F'";
alg[2] = "y' R2' F2 R U R' F U' R U R2";
alg[3] = "y x R U' R U' R' U L' U' L";
alg[4] = "z' U2 R' U' R2 U' R' U' R U' R' U'";
alg[5] = "y' R U2 R' U R' F2 R F' R' F2 R";
alg[6] = "y' R' F2 R U' R U2' R' F R U2' R'";

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
	$('.view').html('<img src="img/2x2x2CLLU'+liczba+'.svg" style="transform: rotateZ(-90deg);">');
	$('.scramble').html(gen[liczba]);
	$('.counter').html('Attempts: '+good+'/'+wrong);
	$('.accuracy').html('Accuracy: '+(good/wrong*100).toFixed(1)+'%');
	$('.forgotover').html('<div class="forgot"></div><div style="clear:both"></div>');
	$('.forgot').click(function () {
    $('.forgotover').html('Algorithm: '+alg[liczba]);
    $('.forgotover').css('margin-bottom', '0px');
});
}


