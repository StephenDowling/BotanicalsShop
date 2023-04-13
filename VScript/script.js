/*Cart function variables*/

var itemCount=0;
var totalCost=0.0;
var howMany1=0;
var howMany2=0;
var howMany3=0;
var howMany4=0;
var howMany5=0;
var howMany6=0;
var howMany7=0;
var howMany8=0;
var howMany9=0;
var howMany10=0;
var howMany11=0;
var howMany12=0;
var howMany13=0;
var howMany14=0;
var howMany15=0;
var howMany16=0;

/*Cart functions to add or remove items with individual prices*/

function addPlant1() {
	
	itemCount+=1;
	document.getElementById("cart").innerHTML="Cart: "+itemCount;
	
	totalCost+=10;
	howMany1+=1;
	document.getElementById("cost").innerHTML="Checkout: &euro; "+totalCost;
	document.getElementById("plant1").innerHTML=howMany1;
	
}

function removePlant1() {
	
	if(howMany1>0){
		howMany1-=1;
		totalCost-=10;
		itemCount-=1;
	}
	document.getElementById("cost").innerHTML="Checkout: &euro; "+totalCost;
	document.getElementById("cart").innerHTML="Cart: "+itemCount;
	document.getElementById("plant1").innerHTML=howMany1;
	
}

function addPlant2() {
	
	itemCount+=1;
	document.getElementById("cart").innerHTML="Cart: "+itemCount;
	
	totalCost+=10.50;
	howMany2+=1;
	document.getElementById("cost").innerHTML="Checkout: &euro; "+totalCost;
	document.getElementById("plant2").innerHTML=howMany2;
	
}
function removePlant2() {
	
	if(howMany2>0){
		howMany2-=1;
		totalCost-=10.50;
		itemCount-=1;
	}
	document.getElementById("cost").innerHTML="Checkout: &euro; "+totalCost;
	document.getElementById("cart").innerHTML="Cart: "+itemCount;
	document.getElementById("plant2").innerHTML=howMany2;
	
}

function addPlant3() {
	
	itemCount+=1;
	document.getElementById("cart").innerHTML="Cart: "+itemCount;
	
	totalCost+=13.50;
	howMany3+=1;
	document.getElementById("cost").innerHTML="Checkout: &euro; "+totalCost;
	document.getElementById("plant3").innerHTML=howMany3;
	
}

function removePlant3() {
	
	if(howMany3>0){
		howMany3-=1;
		totalCost-=13.50;
		itemCount-=1;
	}
	document.getElementById("cost").innerHTML="Checkout: &euro; "+totalCost;
	document.getElementById("cart").innerHTML="Cart: "+itemCount;
	document.getElementById("plant3").innerHTML=howMany3;
	
}

function addPlant4() {
	
	itemCount+=1;
	document.getElementById("cart").innerHTML="Cart: "+itemCount;
	
	totalCost+=15;
	howMany4+=1;
	document.getElementById("cost").innerHTML="Checkout: &euro; "+totalCost;
	document.getElementById("plant4").innerHTML=howMany4;
	
}

function removePlant4() {
	
	if(howMany4>0){
		howMany4-=1;
		totalCost-=15;
		itemCount-=1;
	}
	document.getElementById("cost").innerHTML="Checkout: &euro; "+totalCost;
	document.getElementById("cart").innerHTML="Cart: "+itemCount;
	document.getElementById("plant4").innerHTML=howMany4;
	
}

function addPlant5() {
	
	itemCount+=1;
	document.getElementById("cart").innerHTML="Cart: "+itemCount;
	
	totalCost+=12.50;
	howMany5+=1;
	document.getElementById("cost").innerHTML="Checkout: &euro; "+totalCost;
	document.getElementById("plant5").innerHTML=howMany5;
	
}

function removePlant5() {
	
	if(howMany5>0){
		howMany5-=1;
		totalCost-=12.50;
		itemCount-=1;
	}
	document.getElementById("cost").innerHTML="Checkout: &euro; "+totalCost;
	document.getElementById("cart").innerHTML="Cart: "+itemCount;
	document.getElementById("plant5").innerHTML=howMany5;
	
}

function addPlant6() {
	
	itemCount+=1;
	document.getElementById("cart").innerHTML="Cart: "+itemCount;
	
	totalCost+=13;
	howMany6+=1;
	document.getElementById("cost").innerHTML="Checkout: &euro; "+totalCost;
	document.getElementById("plant6").innerHTML=howMany6;
	
}

function removePlant6() {
	
	if(howMany6>0){
		howMany6-=1;
		totalCost-=13;
		itemCount-=1;
	}
	document.getElementById("cost").innerHTML="Checkout: &euro; "+totalCost;
	document.getElementById("cart").innerHTML="Cart: "+itemCount;
	document.getElementById("plant6").innerHTML=howMany6;
	
}

function addPlant7() {
	
	itemCount+=1;
	document.getElementById("cart").innerHTML="Cart: "+itemCount;
	
	totalCost+=16.50;
	howMany7+=1;
	document.getElementById("cost").innerHTML="Checkout: &euro; "+totalCost;
	document.getElementById("plant7").innerHTML=howMany7;
	
}

function removePlant7() {
	
	if(howMany7>0){
		howMany7-=1;
		totalCost-=16.50;
		itemCount-=1;
	}
	document.getElementById("cost").innerHTML="Checkout: &euro; "+totalCost;
	document.getElementById("cart").innerHTML="Cart: "+itemCount;
	document.getElementById("plant7").innerHTML=howMany7;
	
}

function addPlant8() {
	
	itemCount+=1;
	document.getElementById("cart").innerHTML="Cart: "+itemCount;
	
	totalCost+=18;
	howMany8+=1;
	document.getElementById("cost").innerHTML="Checkout: &euro; "+totalCost;
	document.getElementById("plant8").innerHTML=howMany8;
	
}

function removePlant8() {
	
	if(howMany8>0){
		howMany8-=1;
		totalCost-=18;
		itemCount-=1;
	}
	document.getElementById("cost").innerHTML="Checkout: &euro; "+totalCost;
	document.getElementById("cart").innerHTML="Cart: "+itemCount;
	document.getElementById("plant8").innerHTML=howMany8;
	
}

function addPlant9() {
	
	itemCount+=1;
	document.getElementById("cart").innerHTML="Cart: "+itemCount;
	
	totalCost+=14;
	howMany9+=1;
	document.getElementById("cost").innerHTML="Checkout: &euro; "+totalCost;
	document.getElementById("plant9").innerHTML=howMany9;
	
}

function removePlant9() {
	
	if(howMany9>0){
		howMany9-=1;
		totalCost-=14;
		itemCount-=1;
	}
	document.getElementById("cost").innerHTML="Checkout: &euro; "+totalCost;
	document.getElementById("cart").innerHTML="Cart: "+itemCount;
	document.getElementById("plant9").innerHTML=howMany9;
	
}

function addPlant10() {
	
	itemCount+=1;
	document.getElementById("cart").innerHTML="Cart: "+itemCount;
	
	totalCost+=14.50;
	howMany10+=1;
	document.getElementById("cost").innerHTML="Checkout: &euro; "+totalCost;
	document.getElementById("plant10").innerHTML=howMany10;
	
}

function removePlant10() {
	
	if(howMany10>0){
		howMany10-=1;
		totalCost-=14.50;
		itemCount-=1;
	}
	document.getElementById("cost").innerHTML="Checkout: &euro; "+totalCost;
	document.getElementById("cart").innerHTML="Cart: "+itemCount;
	document.getElementById("plant10").innerHTML=howMany10;
	
}

function addPlant11() {
	
	itemCount+=1;
	document.getElementById("cart").innerHTML="Cart: "+itemCount;
	
	totalCost+=16.50;
	howMany11+=1;
	document.getElementById("cost").innerHTML="Checkout: &euro; "+totalCost;
	document.getElementById("plant11").innerHTML=howMany11;
	
}

function removePlant11() {
	
	if(howMany11>0){
		howMany11-=1;
		totalCost-=16.50;
		itemCount-=1;
	}
	document.getElementById("cost").innerHTML="Checkout: &euro; "+totalCost;
	document.getElementById("cart").innerHTML="Cart: "+itemCount;
	document.getElementById("plant11").innerHTML=howMany11;
	
}

function addPlant12() {
	
	itemCount+=1;
	document.getElementById("cart").innerHTML="Cart: "+itemCount;
	
	totalCost+=20;
	howMany12+=1;
	document.getElementById("cost").innerHTML="Checkout: &euro; "+totalCost;
	document.getElementById("plant12").innerHTML=howMany12;
	
}

function removePlant12() {
	
	if(howMany12>0){
		howMany12-=1;
		totalCost-=20;
		itemCount-=1;
	}
	document.getElementById("cost").innerHTML="Checkout: &euro; "+totalCost;
	document.getElementById("cart").innerHTML="Cart: "+itemCount;
	document.getElementById("plant12").innerHTML=howMany12;
	
}

function addPlant13() {
	
	itemCount+=1;
	document.getElementById("cart").innerHTML="Cart: "+itemCount;
	
	totalCost+=20.50;
	howMany13+=1;
	document.getElementById("cost").innerHTML="Checkout: &euro; "+totalCost;
	document.getElementById("plant13").innerHTML=howMany13;
	
}

function removePlant13() {
	
	if(howMany13>0){
		howMany13-=1;
		totalCost-=20.50;
		itemCount-=1;
	}
	document.getElementById("cost").innerHTML="Checkout: &euro; "+totalCost;
	document.getElementById("cart").innerHTML="Cart: "+itemCount;
	document.getElementById("plant13").innerHTML=howMany13;
	
	
}

function addPlant14() {
	
	itemCount+=1;
	document.getElementById("cart").innerHTML="Cart: "+itemCount;
	
	totalCost+=22;
	howMany14+=1;
	document.getElementById("cost").innerHTML="Checkout: &euro; "+totalCost;
	document.getElementById("plant14").innerHTML=howMany14;
	
}

function removePlant14() {
	
	if(howMany14>0){
		howMany14-=1;
		totalCost-=22;
		itemCount-=1;
	}
	document.getElementById("cost").innerHTML="Checkout: &euro; "+totalCost;
	document.getElementById("cart").innerHTML="Cart: "+itemCount;
	document.getElementById("plant14").innerHTML=howMany14;
	
}

function addPlant15() {
	
	itemCount+=1;
	document.getElementById("cart").innerHTML="Cart: "+itemCount;
	
	totalCost+=22.50;
	howMany15+=1;
	document.getElementById("cost").innerHTML="Checkout: &euro; "+totalCost;
	document.getElementById("plant15").innerHTML=howMany15;
	
}

function removePlant15() {
	
	if(howMany15>0){
		howMany15-=1;
		totalCost-=22.50;
		itemCount-=1;
	}
	document.getElementById("cost").innerHTML="Checkout: &euro; "+totalCost;
	document.getElementById("cart").innerHTML="Cart: "+itemCount;
	document.getElementById("plant15").innerHTML=howMany15;
	
}

function addPlant16() {
	
	itemCount+=1;
	document.getElementById("cart").innerHTML="Cart: "+itemCount;
	
	totalCost+=25;
	howMany16+=1;
	document.getElementById("cost").innerHTML="Checkout: &euro; "+totalCost;
	document.getElementById("plant16").innerHTML=howMany16;
	
}

function removePlant16() {
	
	if(howMany16>0){
		howMany16-=1;
		totalCost-=25;
		itemCount-=1;
	}
	document.getElementById("cost").innerHTML="Checkout: &euro; "+totalCost;
	document.getElementById("cart").innerHTML="Cart: "+itemCount;
	document.getElementById("plant16").innerHTML=howMany16;
	
}

/*Timer countdown functions*/

function discount(duration, display) {
	
	var timer = duration, mins, secs;
	
	setInterval(function () {
		mins=parseInt(timer / 60, 10)
		secs=parseInt(timer % 60, 10);
		
		mins=mins<10?"0"+mins:mins;
		secs=secs<10?"0"+secs:secs;
		
		display.textContent=mins+":"+secs;
		
		if (--timer < 0) {
			timer=duration;
		}
	
	}, 1000);
	
}

window.onload = function () {
	var fiveMinutes = 60*15;
	display=document.querySelector('#discount');
	discount(fiveMinutes, display);
};

/*Checkout form submission functions*/

function setValue() {
	var nameVar=document.getElementById("nameinput").value;
	var creditVar=document.getElementById("creditinput").value;
	var securityVar=document.getElementById("securityinput").value;
	alert("Purchase successful!");
}

function formShow() {
	document.getElementById("creditdiv").style.display="block";
}

function formHide() {
	document.getElementById("creditdiv").style.display="none";
	document.getElementById("showcheckout").style.display="none";
	document.getElementById("checkoutlist").style.display="none";
	event.preventDefault();
}

/*Page link functions, alternative to anchor tags that are interfering with button div styles*/

function shopLink() {
	location.replace("../Shop/Shop.html");
}

function plantLink() {
	location.replace("../PlantCare/PlantCare.html");
}

function cartLink() {
	location.replace("../Cart/Cart.html");
}