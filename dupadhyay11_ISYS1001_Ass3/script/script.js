/* toggle dark mode on */
/* only used when working at night */
function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
} 



/* King's Newslatter Form with Validation */
const submitBtn = document.getElementById('submit-btn');

const validate = (e) => {
  e.preventDefault();
  const username = document.getElementById('username');
  const emailAddress = document.getElementById('email-address');
  if (username.value === "") {
    alert("Please enter your username.");
    username.focus();
    return false;
  }
  if (emailAddress.value === "") {
    alert("Please enter your email address.");
    emailAddress.focus();
    return false;
  }
  
  return true;
}

submitBtn.addEventListener('click', validate);

/*onload function to alert users in Form Page*/
function myFunction() {
  alert("Welcome to King's Music Store");
}

/* Do not submit unless all fields are filled */
function validateForm() {
  var x=document.forms["myform"]["fname"].value;  
  if(x==null || x=="" )
  {
      alert("First Name should be filled out");
      return false;
  }

  var y=document.forms["myform"]["lname"].value;
  if(y==null || y=="")
  {
      alert("Last Name should be filled out");
      return false;
  }

  var y=document.forms["myform"]["useremail"].value;
  if(y==null || y=="")
  {
      alert("Email is mandatory");
      return false;
  }

  var y=document.forms["myform"]["commentbox"].value;
  if(y==null || y=="")
  {
      alert("Comment is mandatory");
      return false;
  }

  else
  {
      return true;
  }
}

/* reset form */
function reset() {
  document.getElementById("resetForm").reset();
}