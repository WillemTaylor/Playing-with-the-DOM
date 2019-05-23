/* When the user clicks on the button,
toggle between hiding and showing the <p> */
function handleToggle() {
  let e = document.getElementById('clickedContent');
  e.style.display = e.style.display != 'none' ? 'none' : 'block';
}

function handleSubmission() {
  event.preventDefault();
  let regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  let submit = document.getElementById('clickedSubmit');
  let valid = document.getElementById('valid');
  let validEmail = document.getElementById('validEmail');
  let invalid = document.getElementById('invalidSubmit');
  if (valid.value != '' && validEmail.value.match(regex)) {
    submit.style.display = 'block';
    invalid.style.display = 'none';
  } else {
    invalid.style.display = 'block';
    submit.style.display = 'none';
  }
}
