// initialize the variables 

var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var textError = document.getElementById('text-error');
var submitError = document.getElementById('submit-error');
// validate name
function validdateName(){
    var name = document.getElementById('contact-name').value;
if(name.length == 0){
    nameError.innerHTML = "name is required";
    return false;
}
if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
    nameError.innerHTML ='write full name'
    return false;
}
nameError.innerHTML = '<i class="fa-solid fa-check"></i>'
return true;

}

// validate Phone Numbver
function validdatePhone() {
   var phone = document.getElementById('phone-number').value;
   if(phone.length == 0) {
    phoneError.innerHTML = "Phone Required"
    return false;
   };
   
  if(!phone.match(/^[0-9]*$/)){
    phoneError.innerHTML = 'Must be number only.';
    return false;
  };
  if(phone.length !== 11) {
    phoneError.innerHTML = 'Must be 11 digit'
    return false;
   }
phoneError.innerHTML = '<i class="fa-solid fa-check"></i>'
  return true;
}

// validate email

function validdateemail() {
    var email = document.getElementById('email-id').value;
    if(email.length == 0 ) {
        emailError.innerHTML = 'Enter your Email'
        return false;
    }

  
if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)) {
    emailError.innerHTML = "Invalid Email";
    return false;
}

emailError.innerHTML = '<i class="fa-solid fa-check"></i>'
return true;

}
// validate msg

function validdateMsg () {
    var meassage = document.getElementById("msg-id").value;
    var required = 30;
    var left = required - meassage.length;

    if(left>0) {
        textError.innerHTML = left + 'more character required'
        return false;
    }

    textError.innerHTML = '<i class="fa-solid fa-check"></i>'
    return true;
  
}

function validdateForm(event) {
//   checkt the input fields
    if(!validdateName() || !validdatePhone() || !validdateemail() || !validdateMsg()) {
        submitError.style.display = 'block';
        submitError.innerHTML = 'Fix error First';
        setTimeout(function(){submitError.style.display = 'none';}, 3000);
        return false;       
    }
    
//    stops temporay browser
    if(event) { event.preventDefault(); } 

//    activate the animation
    var successModal = document.getElementById('form-success-modal');
    successModal.classList.add('active');

// reset
    setTimeout(function() {
        successModal.classList.remove('active');
        
        nameError.innerHTML = "";
        phoneError.innerHTML = "";
        emailError.innerHTML = "";
        textError.innerHTML = "";
        
        
        document.querySelector('form').submit();
    }, 3500);

    return true; 
}

       

