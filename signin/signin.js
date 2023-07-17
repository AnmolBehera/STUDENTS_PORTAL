const email=document.getElementById("email");
const pass=document.getElementById("password");
const button=document.getElementById("signin");

console.log(pass.value);

button.addEventListener("click",() => {
    fetch("http://localhost:9090/admin",{
        method:"GET",
    }).then((res) => res.json()).then((data) =>{
        const comparison = data.find(ele=>(ele.email===email.value && ele.password===pass.value));
        console.log(comparison);
        if(comparison != undefined){
            localStorage.setItem("token",JSON.stringify(Date.now()));
            localStorage.setItem("id",JSON.stringify(comparison.id));
            swal({
                icon: 'success',
                title: 'Login Successfull!',
                buttons: false
              })        
            setTimeout(function(){window.location.href="../admin/admin.html"},1250);
        }else{
            swal({
                icon: 'error',
                title: 'Invalid Credentials!'
              })
        }
    })
})