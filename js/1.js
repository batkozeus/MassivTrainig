// Task Cycle 1

document.getElementById('btn1').onclick = function() {
	var disp1 = '';
	for (var i = 4; i<=400; i++) {
		disp1 += i + ' ';
	}
	document.getElementById('num1').innerHTML = disp1;
}

// Task Cycle 2

document.getElementById('btn2').onclick = function() {
	var disp2 = '';
	for (var i = 4; i<=13; i=i+3) {
		disp2 += i + ' ';
	}
	document.getElementById('num2').innerHTML = disp2;
}

// Task Cycle 3

document.getElementById('btn3').onclick = function() {
	var disp3 = '';
	for (var i = 654; i>=0; i--) {
		disp3 += i + ' ';
	}
	document.getElementById('num3').innerHTML = disp3;
}

// Task Cycle 4

document.getElementById('btn4').onclick = function() {
	var disp4 = '';
	for (var i = 1983; i<=2017; i++) {
		disp4 += i + ' ';
	}
	document.getElementById('num4').innerHTML = disp4;
}

// Task Cycle 6

document.getElementById('btn6').onclick = function() {
	var disp6 = '';
	for (var i = -4; i<=100; i=i+2) {
		disp6 += i + ' ';
	}
	document.getElementById('num6').innerHTML = disp6;
}



// Task Mass 1

document.getElementById('btnchik1').onclick = function() {
	var mass1 = [3, 6, 1, 13, 88, 43];
	document.getElementById('mas1').innerHTML = mass1[0] + ' ' + mass1[3];
}

// Task Mass 2

document.getElementById('btnchik2').onclick = function() {
	var mass2 = ['Hi', "hello", 34, "prima"];
	document.getElementById('mas2').innerHTML = mass2[0] + ' ' + mass2[3];
}

// Task Mass 3

document.getElementById('btnchik3').onclick = function() {
	var mass3 = ['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43];
	document.getElementById('mas3').innerHTML = mass3.length;
}

// Task Mass 4

document.getElementById('btnchik4').onclick = function() {
	var mass4 = ['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43];
	mass4[3] = 'new element';
	var disp4 = '';
	for (var key in mass4) {
		disp4 += mass4[key] + ' ';
	}
	document.getElementById('mas4').innerHTML = disp4;
}

// Task Mass 5

document.getElementById('btnchik5').onclick = function() {
	var mass5 = ['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43];
	mass5[2] = 22;
	mass5[4] = 44;
	var disp5 = '';
	for (var key in mass5) {
		disp5 += mass5[key] + ' ';
	}
	document.getElementById('mas5').innerHTML = disp5;
}

// Task Mass 6

document.getElementById('btnchik6').onclick = function() {
	var mass6 = ['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43];
	mass6[10] = 200;
	var disp6 = '';
	for (var key in mass6) {
		disp6 += mass6[key] + ' ';
	}
	document.getElementById('mas6').innerHTML = disp6;
}

// Task Mass 7

document.getElementById('btnchik7').onclick = function() {
	var mass7 = ['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43];
	mass7[12] = 200;
	var disp7 = '';
	for (var key in mass7) {
		disp7 += mass7[key] + ' ';
	}
	document.getElementById('mas7').innerHTML = disp7;
	document.getElementById('mas7_1').innerHTML = mass7[11];
}

// Task Mass 8

document.getElementById('btnchik8').onclick = function() {
	var mass8 = [31, 24, 35, 47, 12];
	document.getElementById('mas8').innerHTML = mass8[3];
	document.getElementById('mas8_1').innerHTML = mass8[60];
}

// Task Mass 9

document.getElementById('btnchik9').onclick = function() {
	var mass9 = [31, 24, 35, 47, 12];
	var disp9 = '';
	for (var f=1; f<=7; f=f+3) {
		disp9 += mass9[f] + ' ';
	}
	document.getElementById('mas9').innerHTML = disp9;
}

// Task Mass 10

document.getElementById('btnchik10').onclick = function() {
	var mass10 = ['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43];
	var disp10 = '';
	for (var i=1; i<=5; i++) {
		disp10 += mass10[i] + ' ';
	}
	document.getElementById('mas10').innerHTML = disp10;
}

// Task Mass 11

document.getElementById('btnchik11').onclick = function() {
	var mass11 = ['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43];
	var i = document.getElementById('myNum1').value;
	document.getElementById('mas11').innerHTML = mass11[i];
}

// Task Mass 12

document.getElementById('btnchik12').onclick = function() {
	var mass12 = ['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43];
	var disp12 = '';
	for (var i=0; i<mass12.length; i++) {
		disp12 += mass12[i] + ' ';
	}
	document.getElementById('mas12').innerHTML = disp12;
}

// Task Mass 13

document.getElementById('btnchik13').onclick = function() {
	var mass13 = ['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43];
	var disp13 = '';
	for (var i=mass13.length-1; i>=0; i--) {
		disp13 += mass13[i] + ' ';
	}
	document.getElementById('mas13').innerHTML = disp13;
}



// Task VloMass 14

document.getElementById('vloBtn1').onclick = function() {
	var vloMass1 = arr = [2, 3, [4,5]];
	document.getElementById('vloMas1').innerHTML = vloMass1[0];
	document.getElementById('vloMas1_1').innerHTML = vloMass1[1];
	document.getElementById('vloMas1_2').innerHTML = vloMass1[2];
}

// Task VloMass 15

document.getElementById('vloBtn2').onclick = function() {
	var vloMass2 = [2, 3, [4,5]];
	document.getElementById('vloMas2').innerHTML = vloMass2[2][0];
	document.getElementById('vloMas2_1').innerHTML = vloMass2[2][1];
}

// Task VloMass 16

document.getElementById('vloBtn3').onclick = function() {
	var vloMass3 = [2, 3, [4,5]];
	document.getElementById('vloMas3').innerHTML = vloMass3[2].length;
}

// Task VloMass 17

document.getElementById('vloBtn4').onclick = function() {
	var vloMass4 = [2, [3,4,5], [6,7,8]  ];
	document.getElementById('vloMas4').innerHTML = vloMass4[1][1];
	document.getElementById('vloMas4_1').innerHTML = vloMass4[2][2];
}

// Task VloMass 18

document.getElementById('vloBtn5').onclick = function() {
	var vloMass5 = [2, [3,4,5], [6,7,8]  ];
	document.getElementById('vloMas5').innerHTML = vloMass5[2];
	document.getElementById('vloMas5_1').innerHTML = vloMass5[0];
}

// Task VloMass 19

document.getElementById('vloBtn6').onclick = function() {
	var vloMass6 = [ 2, [3,4,5], [6,7,8,9, 11, 12, 13, 14]  ];
	var got6 = '';
	for (var i=0; i<vloMass6[2].length; i++) {
		got6 += vloMass6[2][i] + ' ';
	}
	document.getElementById('vloMas6').innerHTML = got6;
}

// Task VloMass 20

document.getElementById('vloBtn7').onclick = function() {
	var vloMass7 = [ ['hi', 3, 'beta'], ['foo', 'jam', 'tritto']  ];
	document.getElementById('vloMas7').innerHTML = vloMass7[1][0] + ' ' + vloMass7[0][2];
}