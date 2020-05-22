function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
 

function increase(){
	var x= document.getElementById("num").innerHTML
	x++;
	document.getElementById("num").innerHTML=x;
	var price= document.getElementById("ticketprice").innerHTML
	price=price*2
	document.getElementById("ticketprice").innerHTML=price;
   }

function decrease(){
	var x= document.getElementById("num").innerHTML
	x--;
	document.getElementById("num").innerHTML=x;

	var price= document.getElementById("ticketprice").innerHTML
	price=price-price
	document.getElementById("ticketprice").innerHTML=price;
   }

function validate(){
  	let form1= document.querySelector("#form1")
  	let fName= document.querySelector("#fname").value
  	let lName = document.querySelector("#lname").value
  	let email= document.querySelector("#email").value
  	let pass= document.querySelector("#psw").value
  	form1.addEventListener('submit', function(e){
  	 	e.preventDefault()
  	 });

	if(fName==""){
  		alert('FirstName')
  	}
	else if( lName==""){
	  	alert('Invalid LastName')
	  }
	else if(email==""){
	  	alert('Invalid email')
	  }
	else if(pass==""){
	  	alert('Invalid password')
	  }

}

document.querySelector('#submit').onclick=function(){
	validate()
}
