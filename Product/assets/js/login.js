// Name and Password from the register-form
var un = document.getElementById('un');
var pw = document.getElementById('pw');

// Storing input from register-form
function store() {
    localStorage.setItem('un', un.value);
    localStorage.setItem('pw', pw.value);
}

// Check if stored data from register-form is equal to entered data in the login-form
function check() {

    // stored data from the register-form
    var storedUn = localStorage.getItem('un');
    var storedPw = localStorage.getItem('pw');

    // entered data from the login-form
    var userUn = document.getElementById('userUn');
    var userPw = document.getElementById('userPw');

    // check if stored data from register-form is equal to data from login form
    if(userUn.value == storedUn && userPw.value == storedPw) {
        alert('You are logged in.');
    }else {
        alert('ERROR.');
    }
}