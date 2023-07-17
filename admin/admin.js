const save = document.getElementById('save');
const uname = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const re_password = document.getElementById('confirmPassword');
const phone = document.getElementById('ContactNo');
const signout = document.getElementById("signout");
const token = JSON.parse(localStorage.getItem("token"));
const id = JSON.parse(localStorage.getItem("id"));
console.log(id);


signout.addEventListener("click", () => {
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    window.location.href = "../signin/signin.html";   
  });

console.log(token);

if (token === null) 
{
    window.location.href="../signin/signin.html";
}
else
{
function openNav()
{
    document.getElementById("mySidenav").style.width = "250px";
}
function closeNav()
{
    document.getElementById("mySidenav").style.width = "0";
}

console.log(id);


function myfunction(){
    fetch('http://localhost:9090/admin', {method: 'GET',})
    .then((res) => res.json())
    .then((data) =>{
        console.log(token);
        const admin=data.filter((ele)=>ele.id==id);
        console.log(admin[0]);
        uname.value=admin[0].name;
        email.value=admin[0].email;
        password.value=admin[0].password;
        phone.value=admin[0].mobile;

    })
    
}

save.addEventListener("click", () => {
    if (validate()) {
        const obj = {
            name: uname.value,
            mobile: phone.value,
            email: email.value,
            password: password.value
        }
         console.log("a"+id);
        fetch(`http://localhost:9090/admin/`+id, {method: 'PATCH',headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(obj),})
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    alert("Saved successfully!");
                    window.location.href="admin.html";
                });
            }
        });


        function validate() {
            if (uname.value == "") {
                swal({
                    icon: 'error',
                    title: "Enter your name!"
                  })
                return false
            }
            if (email.value == "") {
                swal({
                    icon: 'error',
                    title: "Enter your email!"
                  })
                return false
            }
            if (password.value == "") {
                swal({
                    icon: 'error',
                    title: "Enter your password!"
                  })
                return false
            }
            if (phone.value == "") {
                swal({
                    icon: 'error',
                    title: "Enter your mobile number!"
                  })
                return false
            }
            if (phone.value.length != 10) {
                swal({
                    icon: 'error',
                    title: "Enter your mobile no.!"
                  })
                return false
            }
            if (isNaN(phone.value)) {
                swal({
                    icon: 'error',
                    title: "Enter your valid mobile no.!"
                  })
                return false
            }
            if (password.value.length < 8) {
                swal({
                    icon: 'error',
                    title: "Password length should be atleast 8 characters long!"
                  })
                return false
            }
            if (re_password.value !== password.value){
                swal({
                    icon: 'error',
                    title: "Confirm Password does not match with the password value!"
                  })
                return false
            }
            if (checkUpperChar(password.value)&&checkSpecialChar(password.value)) {
                swal({
                    icon: 'error',
                    title: "Password must have atleast one upppercase letter and one special character!"
                  })
                return false
            }
            let at = email.value.indexOf("@")
            let dot = email.value.lastIndexOf(".")
            let len = email.value.length
            if (dot === len - 1 || at === len - 1 || dot < at) {
                swal({
                    icon: 'error',
                    title: "Please enter a valid email address!"
                  })
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
}