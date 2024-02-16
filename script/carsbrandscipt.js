const cars = ["BMW", "Volvo", "Ford", "Fiat", "Audi"];

let table = document.getElementById("myTable");

for (let i = 0; i < cars.length; i++) {
	let row = table.insertRow(i +1);
	let cell = row.insertCell(0);
	cell.innerHTML = cars[i];

	if (i % 2 == 0) {
		row.id = 'even';
	} else {
		row.id = 'odd';
	}
}