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

