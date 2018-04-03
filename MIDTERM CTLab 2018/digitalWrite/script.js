//Please read READ ME PLEASE.txt for references and other information


function onWindowLoaded(event){
	// preload(); 
	var myButton = document.getElementById("myButton");
	myButton.addEventListener("click", onButtonClick);
	console.log("loaded"); 

	loadImages(images);

}

var images = [
	"assets/reactions/angry-1.jpg",
	"assets/reactions/angry-2.jpg",
	"assets/reactions/angry-3.jpg",
	"assets/reactions/angry-4.jpg",
	"assets/reactions/angry-5.jpg",

	"assets/reactions/happy-1.jpg",
	"assets/reactions/happy-2.jpg",
	"assets/reactions/happy-2.jpg",
	"assets/reactions/happy-4.jpg",
	"assets/reactions/happy.gif",

	"assets/reactions/normal-1.jpg",
	"assets/reactions/normal-2.jpg",
	"assets/reactions/normal-3.jpg",

	"assets/reactions/random-1.jpg",
	"assets/reactions/random-2.jpg",
	"assets/reactions/random-3.jpg",
	"assets/reactions/random-4.jpg",

];

function loadImages(imgArr, targetId){
    for(var i=0; i< imgArr.length; i++) {
        console.log(imgArr[i]);
        var img = new Image();
            img.src = imgArr[i];
        // document.getElementById('output').appendChild(img);
    }
}


function onButtonClick(event){
	//update the value of our dice roll
	if(!diceRollElement){
		createdDiceElement();
	} 
	updateDiceValue(); 
}
var diceRollElement; 

function createdDiceElement(){
	diceRollElement = document.createElement("img");
	// diceRollElement.style.color = "blue"; 
	// diceRollElement.style.fontSize = "24px"; 
	document.body.appendChild(diceRollElement); 
}

function updateDiceValue(){
	var diceRollValue = Math.random()*17;
	diceRollValue = Math.floor(diceRollValue); 
	// diceRollValue ++; 

	for(var i = 1; i<18; i++){
		diceRollElement.src = images[diceRollValue]; 
	}
	// if(diceRollValue === 1 || diceRollValue=== 4){
	// 	diceRollElement.src = images[0];  
	// }else{
	// 	diceRollElement.src = images[1];  
	// }
}

window.addEventListener("load", onWindowLoaded);