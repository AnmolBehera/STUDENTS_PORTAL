const sname = document.getElementById("name");
const sclass = document.getElementById("sclass");
const search = document.getElementById("search");
const container=document.getElementById("container");
const save=document.getElementById("save");
const ssname=document.getElementById("sname");
const fname=document.getElementById("fname");
const uemail=document.getElementById("email");
const uphone=document.getElementById("phone");
const date=document.getElementById("date");
const gen = document.getElementsByName("gender");
const stream=document.getElementById("stream");
const stclass=document.getElementById("class");
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
function myfunction1(){
    tablehead();
    const tbody=document.getElementById("tbody");
    fetch(`http://localhost:9090/student-details`,{method:"GET"})
    .then((res)=>res.json())
    .then((data)=>{
        data.map((el)=>{          
        const tr=tablebody(el);
        tbody.append(tr);
        });
    });
}

function myfunction2(){
    const table=document.getElementById("table");
    table.remove();
    if(sclass.value==11||sclass.value==12)
    {
        tablehead();
        const tbody=document.getElementById("tbody");
        fetch(`http://localhost:9090/student-details`,{method:"GET"})
        .then((res) => res.json())
        .then((data) =>{
            const details = data.filter((item) => item.class == sclass.value);
            console.log(details);
            details.map((el)=>
            {
                const tr=tablebody(el);
                tbody.append(tr);
            })
        })
    }
    else{
        myfunction1();
    }
}

search.addEventListener("click",()=>{
    const table=document.getElementById("table");
    table.remove();
    fetch(`http://localhost:9090/student-details`,{method:"GET"})
    .then((res) => res.json())
    .then((data) =>{
    const comparison=data.find((ele)=>ele.name.toLowerCase()==sname.value.toLowerCase());
    console.log(comparison);
    if(comparison!=undefined)
    {
        tablehead();
        const tbody=document.getElementById("tbody");
        fetch(`http://localhost:9090/student-details`,{method:"GET"})
        .then((res) => res.json())
        .then((data) =>{
            const details = data.filter((item) => item.name.toLowerCase() == sname.value.toLowerCase());
            console.log(details);
            details.map((el)=>
            {
                const tr=tablebody(el);
                tbody.append(tr);
            })
        })
    }
    else{
        swal({
            icon: 'error',
            title: "Student of this name doesn't exist!"
          }).then(function() {
            window.location.reload();
        });
    }
});
});

function tablehead(){
    const table=document.createElement("table");
    table.setAttribute("class","table table-striped");
    table.setAttribute("id","table");

    const thead=document.createElement("thead");
    thead.setAttribute("class","bg-primary text-white");
    
    const trh=document.createElement("tr");
    
    const hid=document.createElement("th");
    hid.setAttribute("scope","col");
    hid.innerText="ID";

    const hname=document.createElement("th");
    hname.setAttribute("scope","col");
    hname.innerText="Name";

    const hemail=document.createElement("th");
    hemail.setAttribute("scope","col");
    hemail.innerText="Email";

    const hphone=document.createElement("th");
    hphone.setAttribute("scope","col");
    hphone.innerText="Phone no.";

    const hclass=document.createElement("th");
    hclass.setAttribute("scope","col");
    hclass.innerText="Class";

    const haction=document.createElement("th");
    haction.setAttribute("scope","col");
    haction.innerText="Action";

    const tbody=document.createElement("tbody");
    tbody.setAttribute("id","tbody");

    trh.append(hid,hname,hemail,hphone,hclass,haction);
    thead.append(trh);

    table.append(thead,tbody);

    container.append(table);

}

function tablebody(el){

    const tr=document.createElement("tr");

    const sid=document.createElement("td");
    sid.innerText=el.id;

    const name=document.createElement("td");
    name.innerText=el.name;

    const email=document.createElement("td");
    email.innerText=el.email;
    
    const phone=document.createElement("td");
    phone.innerText=el.phone;

    const uclass=document.createElement("td");
    uclass.innerText=el.class;

    const action=document.createElement("td");
    const updatebutton = document.createElement("button");
    updatebutton.innerText = "Update";
    updatebutton.setAttribute("id","update");
    updatebutton.setAttribute("data-bs-toggle","modal");
    updatebutton.setAttribute("data-bs-target","#confirmationModal");
    updatebutton.addEventListener("click",() => {
        localStorage.setItem("stid",JSON.stringify(el.id));
        fetch(`http://localhost:9090/student-details`, {method: "GET",})
        .then((res)=>res.json())
    .then((data)=>{
            const student = data.filter((ele)=>ele.id==el.id);
            console.log(student[0].stream);   
            ssname.value=student[0].name;
            fname.value=student[0].fname;
            uemail.value=student[0].email;
            uphone.value=student[0].phone;  
            date.value=student[0].date;
            document.getElementById(student[0].gender).checked=true;
            stream.value=student[0].stream;
            stclass.value=student[0].class;
    })
})

    const deletebutton = document.createElement("button");
      deletebutton.innerText = "Delete";
      deletebutton.setAttribute("id","delete");
      deletebutton.addEventListener("click", () => {
        fetch(`http://localhost:9090/student-details/${el.id}`, {
          method: "DELETE",
        }).then((res) => {
          alert("DELETED");
        });
      });
    action.append(updatebutton,deletebutton);

    tr.append(sid,name,email,phone,uclass,action);
    return tr; 
}

save.addEventListener("click",()=>{
    const stid=JSON.parse(localStorage.getItem("stid"));
    console.log(gen);
        for (i = 0; i < gen.length; i++) {
          if (gen[i].checked)
              var gender= gen[i].value;
      }
      console.log(gender);
        if(Validation()){
        const dataobj = {
          name: ssname.value,
          fname: fname.value,
          email: uemail.value,
          phone: uphone.value,
          date: date.value,
          gender: gender,
          stream: stream.value,
          class: stclass.value
        };
      console.log(dataobj);
      fetch(`http://localhost:9090/student-details/`+stid, {method: 'PATCH',headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(dataobj),})
      .then((res) => res.json())
      .then((data) => {
          console.log(data);
          localStorage.removeItem("stid");
          alert('Successfully Updated!'),
          window.location.href="record.html";
          
      });
    }
});



function  Validation(){

    //name validation
    if(ssname.value==""){
      document.getElementById("check").innerHTML="name cannot be null";
      return false;
    }
    if(fname.value==""){
      document.getElementById("check").innerHTML="Fathername cannot be null";
       return false;
    } 
    if(uemail.value=="")
    {
       document.getElementById("check").innerHTML="email cannot be null";
       return false;
    }
    if(uphone.value=="")
    {
       document.getElementById("check").innerHTML="mobile no. cannot be null";
       return false;
    }
    if(date.value=="")
    {
       document.getElementById("check").innerHTML="date cannot be null";
       return false;
    }
    
    if (ssname.value.length < 3 || ssname.value.length > 20) {
        document.getElementById("check").innerHTML="Name length should be more than 3 and less than 21";
        return false;
      }
      if (/\d/.test(ssname.value)){
         
        document.getElementById("check").innerHTML="Name should only contain alphabetic characters!";
        return false;
      }
  
      
      if (fname.value.length < 3 || fname.value.length > 20) {
        document.getElementById("check").innerHTML="Fathername length should be more than 3 and less than 21";
        return false
        
      }
   
      if (/\d/.test(fname.value)){
        document.getElementById("check").innerHTML="Fathername should only contain alphabetic characters!!";
        return false;
      }
     
     var at=uemail.value.indexOf("@");
     var dot=uemail.value.lastIndexOf(".");
     var len=uemail.value.length;
     if(dot==len-1 || at==len-1|| dot<at){
      document.getElementById("check").innerHTML="please enter a valid email address"
      return false
    }
    if (uphone.value.length !== 10 || isNaN(uphone.value)) {
          document.getElementById("check").innerHTML = "Please enter a valid 10-digit phone number.";
          return false;
    }
    else{
      return true;
    }
  }
}
