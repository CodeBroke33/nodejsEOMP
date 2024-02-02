function signIn() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Add your authentication logic here
    // For simplicity, this example just logs the entered credentials
    console.log('Email:', email);
    console.log('Password:', password);
}

document.getElementById('signUpLabel').addEventListener('click', function() {
    alert('Redirect to sign up page'); // Replace with your actual sign-up page redirection logic
});

document.getElementById('forgotPassword').addEventListener('click', function() {
    alert('Redirect to forgot password page'); // Replace with your actual forgot password page redirection logic
});
