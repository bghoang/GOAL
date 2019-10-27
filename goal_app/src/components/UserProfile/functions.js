var editingUsername = false;
var editingGoal = false;


export function editUsername(){
	if(editingUsername){
		
		var updatedNameString = document.getElementById("userName-input").value;
		if(updatedNameString == ""){
			updatedNameString = "User Name"
		}
		document.getElementById('userName-input').remove();
		var updatedName = document.createElement("p");
		updatedName.className = "user-name-font";
		updatedName.id = "userName";
		updatedName.innerText = updatedNameString;
		var userNameDiv = document.getElementById('userNameDiv');
		userNameDiv.appendChild(updatedName);
		editingUsername = false;
		var editI= document.getElementById('userName-edit-logo');
		editI.className = "far fa-edit"; 
	}
	else{
		document.getElementById('userName').remove();
		var textInput = document.createElement("input");
		textInput.id = "userName-input";
		textInput.className = "text-input";
		var userNameDiv = document.getElementById('userNameDiv');
		userNameDiv.appendChild(textInput);
		
		var editI= document.getElementById('userName-edit-logo');
		editI.className = "far fa-save"; 
		editingUsername = true;
		
	}
}

export function editGoal(){
	if(editingGoal){
		var updatedGoalString = document.getElementById("goal-input").value;
		if(updatedGoalString == ""){
			updatedGoalString = "This is my most recent upcoming goal at the moment.";
		}
		document.getElementById('goal-input').remove();
		var updatedGoal = document.createElement("p");
		updatedGoal.className = "inner-headline-text";
		updatedGoal.id = "goal";
		updatedGoal.innerText = updatedGoalString;
		var goalHeadlineDiv = document.getElementById('goal-headline');
		goalHeadlineDiv.appendChild(updatedGoal);
		editingGoal = false;
		var editI= document.getElementById('goal-edit-logo');
		editI.className = "far fa-edit"; 
		
	}
	else{
		document.getElementById('goal').remove();
		var textInput = document.createElement("input");
		textInput.id = "goal-input";
		textInput.className = "text-input"
		var goalDiv = document.getElementById('goal-headline');
		goalDiv.appendChild(textInput);
		
		var editI = document.getElementById('goal-edit-logo');
		editI.className = "far fa-save"; 
		editingGoal = true;
		
	}
}	

export function editAvatar(){
		var pic = document.createElement("input");
		pic.type = "file";
		pic.id = "src";
		pic.click();
		
		var target = document.getElementById("avatar");

		showImage(pic,target);
			
		function showImage(src,target) {
			var fr=new FileReader();
			// when image is loaded, set the src of the image where you want to display it
			fr.onload = function(e) { target.src = this.result; };
			src.addEventListener("change",function() {
			// fill fr with image data    
			fr.readAsDataURL(src.files[0]);
		});
		
	}
	
}