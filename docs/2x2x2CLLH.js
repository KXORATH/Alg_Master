function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

var liczba = getRandomInt(0,4) + 1;
var good = 0;
var wrong = 0;

var gen = [];
gen[1] = "U2 R2 F2 U2 R' U2 F2 R2 U'";
gen[2] = "U R2 F' R2 F2 U2 F' R2 U'";
gen[3] = "R2 U2 F' R' U2 R' U2 R' F'";
gen[4] = "F R' U2 R2 F R' U R2 U R2";

var alg = [];
alg[1] = "R2 U2' R U2 R2'";
alg[2] = "x' U2 R U2' R2' F2 R U2'";
alg[3] = "R' U2 R y R' U R' U' R U' R";
alg[4] = "y R U R' U R U R' F R' F' R";

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
	var liczba = getRandomInt(0,4) + 1;
	$('.view').html('<img src="img/2x2x2CLLH'+liczba+'.svg" style="transform: rotateZ(90deg);">');
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