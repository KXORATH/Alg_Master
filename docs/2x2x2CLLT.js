function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

var liczba = getRandomInt(0,6) + 1;
var good = 0;
var wrong = 0;

var gen = [];
gen[1] = "U F' U2 F U2 R U R' U'";
gen[2] = "F2 U' R' F U2 R F2 R' U'";
gen[3] = "F' R' U F' U F' R' U2 R2 F'";
gen[4] = "R' F2 U2 F' U R' U R' F' R'";
gen[5] = "R' F U' R F R' U R F'";
gen[6] = "R U' R' U2 R2 F' U' F R'";

var alg = [];
alg[1] = "(R U R' U')(R' F R F')";
alg[2] = "y2 L' U' L U L F' L' F";
alg[3] = "y' R' U R' U2 R U2 R' U R2 U' R'";
alg[4] = "y F U' R U2 R' U' F2 R U R'";
alg[5] = "y2 L F' z' R' U R' U' R U' R";
alg[6] = "y R' U R U2 R2 F R F' R";

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
	$('.view').html('<img src="img/2x2x2CLLT'+liczba+'.svg" style="transform: rotateZ(-90deg);">');
	$('.scramble').html(gen[liczba]);
	$('.counter').html('Attempts: '+good+'/'+wrong);
	$('.accuracy').html('Accuracy: '+(good/wrong*100).toFixed(1)+'%');
	$('.forgotover').html('<div class="forgot"></div><div style="clear:both"></div>');
	$('.forgot').click(function () {
    $('.forgotover').html('Algorithm: '+alg[liczba]);
    $('.forgotover').css('margin-bottom', '0px');
});
}


