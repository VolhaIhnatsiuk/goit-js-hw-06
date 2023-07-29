const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', handlerSubmit);

function handlerSubmit(event) {
  event.preventDefault();

    const {
        elements: {email, password}
    } = event.currentTarget;
    
  if (email.value === '' || password.value === '') {
    alert('Fill in all the fields!');
  } else {
    const formData = {
      email: email.value,
      password: password.value,
    };

    console.log(formData);
  }
  event.currentTarget.reset();
}