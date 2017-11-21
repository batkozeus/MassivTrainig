// Task Mass 1

document.getElementById('btnchik1').onclick = function() {
	var mass1 = [7, [7, 8,9], 17];
	document.getElementById('mas1').innerHTML = mass1[1][2];
}

// Task Mass 2

document.getElementById('btnchik2').onclick = function() {
	var mass2 = [5, {'one': 2000, 'two': 4000}, 56];
	document.getElementById('mas2').innerHTML = mass2[1].two;
	document.getElementById('mas2_1').innerHTML = mass2[2];
}

// Task Mass 3

document.getElementById('btnchik3').onclick = function() {
	var mass3 = {'one': 5, 'two': [23, 45]};
	document.getElementById('mas3').innerHTML = mass3.two[1];
}

// Task Mass 4

document.getElementById('btnchik4').onclick = function() {
	var mass4 = {'one': 5, 'two': {'kkk':23,'mmm':45}};
	document.getElementById('mas4').innerHTML = mass4.two.mmm;
}

// Task Mass 5

document.getElementById('btnchik5').onclick = function() {
	var mass5 = [{'mts': '+38050556677', 'life': '+093445566'},{'mts': '+38050665544', 'life': '+093112233'}];
	var disp5 = '';
	for (var key in mass5) {
		disp5 += 'mts: '+ mass5[key].mts + ' ';
	}
	document.getElementById('mas5').innerHTML = disp5;
	var disp5_1 = '';
	for (var key in mass5) {
		disp5_1 += ' life: '+ mass5[key].life + ' ' + 'mts: '+ mass5[key].mts;
	}
	document.getElementById('mas5_1').innerHTML = disp5_1;
}

// Task Mass 6

document.getElementById('btnchik6').onclick = function() {
	var mass6 = {'phone1': {'mts': '+38050556677', 'life': '+093445566'}, 'phone2':  {'mts': '+38050665544', 'life': '+093112233'}};
	var disp6 = '';
	for (var key in mass6) {
		disp6 += 'mts: '+ mass6[key]['mts'] + ' ';
	}
	document.getElementById('mas6').innerHTML = disp6;

	var disp6_1 = '';
	for (var key in mass6) {
		disp6_1 += ' life: '+ mass6[key]['life'] + ' ' + 'mts: '+ mass6[key]['mts'];
	}
	document.getElementById('mas6_1').innerHTML = disp6_1;
}

// Task Mass 7

document.getElementById('btnchik7').onclick = function() {
	var mass7 = [['+38050556677', '+093445566'],['+38050665544', '+093112233']];
	var disp7 = '';
	for (var key in mass7) {
		disp7 += mass7[key][0] + ' ' + mass7[key][1]  + ' ';
	}
	document.getElementById('mas7').innerHTML = disp7;
}

// Task Mass 8

document.getElementById('btnchik8').onclick = function() {
	var mass8 = [2, 3, 4, 5, 6, 4, 77, 32, 4];
	var disp8 = '';
	for (var i=0; i<mass8.length; i++) {
		disp8 +=  i + ' - ' + mass8[i]+ '<br>';
	}
	document.getElementById('mas8').innerHTML = disp8;
}

// Task Mass 9

document.getElementById('btnchik9').onclick = function() {
	var mass9 = [4, 5, 6, 7, 8, 12, 32, 21, 41, 34, 25, 15, 11, 'hello'];
	var disp9 = '';
	for (var f=0; f<mass9.length; f++) {
		if (mass9[f]<35) {
			disp9 += mass9[f] + ', ';
		}	
	}
	document.getElementById('mas9').innerHTML = disp9;
}

// Task Mass 10

document.getElementById('btnchik10').onclick = function() {
	var mass10 = [{"name" : "Alex", "age": 17},{"name" : "Ivan", "age": 27},{"name" : "Sergey", "age": 28},{"name" : "Vitaliy", "age": 30},{"name" : "Olga", "age": 24}];
	var disp10 = '';
	for (var key in mass10) {
		disp10 += mass10[key]['name'] + ' ';
	}
	document.getElementById('mas10').innerHTML = disp10;
}

// Task Mass 11

document.getElementById('btnchik11').onclick = function() {
	var mass11 = [{"name" : "Alex", "age": 17},{"name" : "Ivan", "age": 27},{"name" : "Sergey", "age": 28},{"name" : "Vitaliy", "age": 30},{"name" : "Olga", "age": 24}];
	var age = document.getElementById('age').value;
	var disp11 = '';
	for (var key in mass11) {
		if (mass11[key]['age']<=age) {
			disp11 += mass11[key]['age'] + ' ';
		}	
	}
	document.getElementById('mas11').innerHTML = disp11;
}

// Task Mass 12

document.getElementById('btnchik12').onclick = function() {
	var mass12 = [{"name" : "Alex", "age": 17},{"name" : "Ivan", "age": 27},{"name" : "Sergey", "age": 28},{"name" : "Vitaliy", "age": 30},{"name" : "Olga", "age": 24}];
	var name = document.getElementById('name').value;
	var disp12 = '';
	for (var key in mass12) {
		if (mass12[key]['name']==name) {
			disp12 = mass12[key]['name'];
		}
		else {
			disp12 =  'нет такого имени';
		}	
	}
	document.getElementById('mas12').innerHTML = disp12;
}

// Task Mass 13

document.getElementById('btnchik13').onclick = function() {
	var mass13 = {"7": "Россия",  "38": "Украина", "1": "США"};
	var disp13 = 0;
	for (var key in mass13) {
		disp13++;
	}
	document.getElementById('mas13').innerHTML = disp13;
}