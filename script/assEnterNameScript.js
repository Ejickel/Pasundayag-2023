function myName(){
	var input = document.getElementById("inputName").value;
	var message = document.getElementById("displayName").innerHTML = "Hello, " + input + "!";
	return message;
}