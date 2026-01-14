// Oyente a un evento submit del formulario, evita recargar, obtener datos.
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = txtEmail.value;
    const password = txtPassword.value;

    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    window.location.href = './pages/contacts.html';
})