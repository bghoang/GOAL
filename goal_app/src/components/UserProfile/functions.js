export function editUsername(){
	var previousName = document.getElementById('userName').innerText;
	alert(previousName);
	document.getElementById('userName').remove();
	var textInput = document.createElement("input");
	var userNameDiv = document.getElementById('userNameDiv');
	userNameDiv.appendChild(textInput);
	
	
}