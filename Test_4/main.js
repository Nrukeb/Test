document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('registerForm')
    const loginForm = document.getElementById('loginForm')
  
    registerForm.addEventListener('submit', function(event) {
      event.preventDefault()

      const email = document.getElementById('email').value
      const password = document.getElementById('password').value
      const confirmPassword = document.getElementById('confirmPassword').value

      if (password !== confirmPassword) {
        alert('Пароли не совпадают')
        return;
      }
  
      if (!validateEmail(email)) {
        alert('Некорректный формат эл.почты')
        return;
      }
  
      const user = {
        email: email,
        password: password
      };
  
      localStorage.setItem('user', JSON.stringify(user))
  
      alert('Регистрация успешна!')
    });
  
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault()
  
      const loginEmail = document.getElementById('loginEmail').value
      const loginPassword = document.getElementById('loginPassword').value
  
      if (!validateEmail(loginEmail)) {
        alert('Некорректный формат эл.почты')
        return
      }
  
      const storedUser = JSON.parse(localStorage.getItem('user'))
  
      if (storedUser && loginEmail === storedUser.email && loginPassword === storedUser.password) {
        alert('Добро пожаловать')
      } else {
        alert('Неверная эл.почта или пароль.')
      }
    })
  
   
    function validateEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return emailRegex.test(email)
    }
  })
// это я с инета забрал