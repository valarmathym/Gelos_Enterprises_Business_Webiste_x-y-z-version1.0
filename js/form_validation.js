
  
 function validateForm()  {
 
    var myform = document.getElementById("form"); 
     
//alert pops-up if the name field is empty 
     if (myform.name.value =="") {
   
     alert("Fill your name. Your name field is empty");
     myform.name.focus();
     return false; 
     }  
	  
//alert pops-up if the box for the email ID is empty	  
if (myform.email.value == "") {
	 
   alert("Please enter your email ID.");
  myform.email.focus();
 return  false;
 }
 else { 
  alert("Submiitted your info. successfuly. We will get back to you soon");
}
 }



 

