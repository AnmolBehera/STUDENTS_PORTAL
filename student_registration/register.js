
const Name = document.getElementById("name");
const fathername = document.getElementById("fname");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const date = document.getElementById("date");
const gender = document.getElementById("gender");
const stream = document.getElementById("stream");
const Class = document.getElementById("class");
const button = document.getElementById("submit");


function  Validation(){

  //name validation
  if(Name.value==""){
    document.getElementById("check").innerHTML="name cannot be null";
    return false;
  }
  if(fathername.value==""){
    document.getElementById("check").innerHTML="Fathername cannot be null";
     return false;
  } 
  if(email.value=="")
  {
     document.getElementById("check").innerHTML="email cannot be null";
     return false;
  }
  if(phone.value=="")
  {
     document.getElementById("check").innerHTML="mobile no. cannot be null";
     return false;
  }
  if(date.value=="")
  {
     document.getElementById("check").innerHTML="date cannot be null";
     return false;
  }
  
  if (Name.value.length < 3 || Name.value.length > 20) {
      document.getElementById("check").innerHTML="Name length should be more than 3 and less than 21";
      return false;
    }
    if (/\d/.test(Name.value)){
       
      document.getElementById("check").innerHTML="Name should only contain alphabetic characters!";
      return false;
    }

    
    if (fathername.value.length < 3 || fathername.value.length > 20) {
      document.getElementById("check").innerHTML="Fathername length should be more than 3 and less than 21";
      return false
      
    }
 
    if (/\d/.test(fathername.value)){
      document.getElementById("check").innerHTML="Fathername should only contain alphabetic characters!!";
      return false;
    }
   
   var at=email.value.indexOf("@");
   var dot=email.value.lastIndexOf(".");
   var len=email.value.length;
   if(dot==len-1 || at==len-1|| dot<at){
    document.getElementById("check").innerHTML="please enter a valid email address"
    return false
  }
  if (phone.value.length !== 10 || isNaN(phone.value)) {
        document.getElementById("check").innerHTML = "Please enter a valid 10-digit phone number.";
        return false;
  }
  else{
    return true;
  }

}
  button.addEventListener("click", () => {
    if(Validation()){
    const dataobj = {
      name: Name.value,
      fname: fathername.value,
      email: email.value,
      phone: phone.value,
      date: date.value,
      gender: gender.value,
      stream: stream.value,
      class: Class.value
    };
  
  fetch("http://localhost:9000/user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataobj),
  })
  .then((res) => res.json())
  .then((data) => {
      alert(
        "Registered successfully!"
      );
      // document.getElementById("check_s").innerHTML = "Registration Successful";
      // document.getElementById("check_s").style.color = "green";
     
  });
}
});




     
   