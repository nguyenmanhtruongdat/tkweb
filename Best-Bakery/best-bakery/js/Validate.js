email.addEventListener('input', () => {
    const emailBox = document.querySelector('.Email');
    const emailText = document.querySelector('.emailText');
    var emailPattern = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$/;

    if (email.value.match(emailPattern)) {
        emailBox.classList.add('valid');
        emailBox.classList.remove('invalid');
        emailText.style.display = 'none';
    } else {
        emailBox.classList.add('invalid');
        emailBox.classList.remove('valid');
        emailText.innerHTML = "Email not valid";
        emailText.style.display = 'flex';
    }


});
const password = document.getElementById("password");
const cfpassword = document.getElementById("cfpassword");
email.addEventListener('input', () => {
    const emailBox = document.querySelector('.Email');
    const emailText = document.querySelector('.emailText');
    var emailPattern = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$/;

    if (email.value.match(emailPattern)) {
        emailBox.classList.add('valid');
        emailBox.classList.remove('invalid');
        emailText.style.display = 'none';
    } else {
        emailBox.classList.add('invalid');
        emailBox.classList.remove('valid');
        emailText.innerHTML = "Password not valid";
        emailText.style.display = 'flex';
    }


});

const passwordBox = document.querySelector('.form-control');
const passwordText = document.querySelector('.passwordText');
var passwordPatterm = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
password.addEventListener('input', () => {
    if (password.value.match(passwordPatterm) && (password.value).length>0) {
        passwordBox.classList.add('valid');
        passwordBox.classList.remove('invalid');
        passwordText.style.display = 'none';
    } else {
        passwordBox.classList.add('invalid');
        passwordBox.classList.remove('valid');
        passwordText.innerHTML = "Password not valid";
        passwordText.style.display = 'flex';
    }

});


const cfpasswordBox = document.querySelector('.form-control');
const cfpasswordText = document.querySelector('.cfpasswordText');

cfpassword.addEventListener('input', () => {
        if (cfpassword.value==(password.value)) {
        cfpasswordBox.classList.add('valid');
        cfpasswordBox.classList.remove('invalid');
        cfpasswordText.style.display = 'none';
    } else {
        cfpasswordBox.classList.add('invalid');
        cfpasswordBox.classList.remove('valid');
        cfpasswordText.innerHTML = "Password not match";
        cfpasswordText.style.display = 'flex';
    }
    
    

});

phone.addEventListener('input', () => {
    const phoneBox = document.querySelector('.Phone');
    const phoneText = document.querySelector('.phoneText');
    var phonePattern = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
    if (phone.value.match(phonePattern)) {
        phoneBox.classList.add('valid');
        phoneBox.classList.remove('invalid');
        phoneText.style.display = 'none';
    } else {
        phoneBox.classList.add('invalid');
        phoneBox.classList.remove('valid');
        phoneText.innerHTML = "Phone number not valid";
        phoneText.style.display = 'flex';
    }
});

email.addEventListener('input', () => {
    const emailBox = document.querySelector('.form-control');
    const emailText = document.querySelector('.emailText');
    var emailPattern = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$/;

    if (email.value.match(emailPattern)) {
        emailBox.classList.add('valid');
        emailBox.classList.remove('invalid');
        emailText.style.display = 'none';
    } else {
        emailBox.classList.add('invalid');
        emailBox.classList.remove('valid');
        emailText.innerHTML = "Email not valid";
        emailText.style.display = 'flex';
    }


});


function checkLogin() {
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    if (username == "" || password == "") {
        alert("Please fill full information");
    }

}