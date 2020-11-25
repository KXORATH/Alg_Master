function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

var liczba = getRandomInt(0,6) + 1;
var good = 0;
var wrong = 0;

var gen = [];
gen[1] = "F' U F' R' U2 R F2 R' U'";
gen[2] = "R2 U' R' F2 U F R U2 F' R";
gen[3] = "R2 F' R2 U' F R' U' F' U2";
gen[4] = "R F2 R' F2 R' F U F' U2";
gen[5] = "F' R F' R U R U2 F2 U' R'";
gen[6] = "F' R' U2 F U2 F U' R F R2";

var alg = [];
alg[1] = "R U R' U R U2 R'";
alg[2] = "y2 R U R' U R' F R F' R U2 R'";
alg[3] = "R U' L' U R' U' L";
alg[4] = "F R' F' R U2 R U2 R'";
alg[5] = "L' U2 L U2 L F' L' F";
alg[6] = "y2 R U' R U' R' U R' U' F R' F'";

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
	$('.view').html('<img src="img/2x2x2CLLS'+liczba+'.svg">');
	$('.scramble').html(gen[liczba]);
	$('.counter').html('Attempts: '+good+'/'+wrong);
	$('.accuracy').html('Accuracy: '+(good/wrong*100).toFixed(1)+'%');
	$('.forgotover').html('<div class="forgot"></div><div style="clear:both"></div>');
	$('.forgot').click(function () {
    $('.forgotover').html('Algorithm: '+alg[liczba]);
    $('.forgotover').css('margin-bottom', '0px');
});
}


