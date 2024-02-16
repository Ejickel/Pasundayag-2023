function calculateAge() {
	const currentYear = new Date().getFullYear();
	let birthYear = documnet.getElementById("input").value;
	const age = currentYear - birthYear;
	documnet.getElementById("print1").innerHTML = "Your age is" + age;

	let finalAge = "";

	if (age >= 0  && age <= 4){
		finalAge = "infants and Toddlers.";            
	}else if (age >= 5 && age <= 12){
		finalAge = "Children.";
	}else if(age >= 13 && age <= 19){
		finalAge = "Teens.";
	}else  if (age >= 20 && age <= 39) {
		finalAge = "Young Adult.";
	}else if (age >= 40 && age <= 59) {
		finalAge = "Middle-aged Adult";
	}else if (age >= 60) {
		finalAge = "Senior.";
	}
	
	let yearage = "Your age is " + finalAge;
	documnet.getElementById("print2").innerHTML = yearage;
}