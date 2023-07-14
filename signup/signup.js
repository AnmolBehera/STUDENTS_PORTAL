function generateId() {
    return Math.floor(Math.random() * 10000);
}
const id = generateId();
const signup = document.getElementById('signup');
const uname = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('pass');
const re_password=document.getElementById('re_pass');
const phone = document.getElementById('contact');
signup.addEventListener("click", () => {
    if (validate()) {
        const obj = {
            id: id,
            name: uname.value,
            mobile: phone.value,
            email: email.value,
            password: password.value
        }
        fetch('http://localhost:9090/student-details', {
            method: 'GET',
        }).then((res) => res.json()).then((data) => {
            if (data.find((el) => el.email === email.value)) {
                alert('Email Already Exists Please Log In');
            } else {
                fetch('http://localhost:9090/student-details', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(obj),
                }).then((res) => res.json()).then((data) => {
                    console.log(data);
                    alert('Account Created Successfully');
                    window.location.href = "./Sign In.html";
                });
            }
        });
    }
});

function validate() {
    if (uname.value == "") {
        alert("name cannot be null")
        return false
    }
    if (phone.value == "") {
        alert("mobile no. cannot be null")
        return false
    }
    if (email.value == "") {
        alert("email cannot be null")
        return false
    }
    if (password.value == "") {
        alert("password cannot be null")
        return false
    }
    if (phone.value.length != 10) {
        alert("please enter a valid mobile no.")
        return false
    }
    if (isNaN(phone.value)) {
        alert("please enter a valid mobile no.")
        return false
    }
    if (password.value.length < 8) {
        alert("Password length should be atleast 8 characters long")
        return false
    }
    if (re_password.value !== password.value){
        alert('Confirm Password does not match with the entered value.');
        return false
    }
    if (checkUpperChar(password.value)) {
        alert("Password must have atleast one upppercase letter")
        return false
    }
    if (checkSpecialChar(password.value)) {
        alert("Password must have atleast one special character")
        return false
    }
    let at = email.value.indexOf("@")
    let dot = email.value.lastIndexOf(".")
    let len = email.value.length
    if (dot === len - 1 || at === len - 1 || dot < at) {
        alert("please enter a valid email address")
        return false
    }
    return true
}

function checkUpperChar(password) {
    for (let i = 0; i < password.length; i++) {
        if (password.charAt(i) >= 'A' && password.charAt(i) <= 'Z')
            return false
    }
    return true
}

function checkSpecialChar(password) {
    const spchar = /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;
    for (let i = 0; i < password.length; i++) {
        let char = password.charAt(i)
        if (spchar.test(char))
            return false
    }
    return true
}