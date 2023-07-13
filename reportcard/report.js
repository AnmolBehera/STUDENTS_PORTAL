const sname = document.getElementById('name');
const id = document.getElementById('id');
const math = document.getElementById('math');
const eng = document.getElementById('eng');
const science = document.getElementById('science');
const odia = document.getElementById('odia');
const social_science = document.getElementById('social_science');
const save = document.getElementById('save');

save.addEventListener('click',()=>{
    const student={
        id:id.value,
        name:sname.value,
        math:math.value,
        english:eng.value,
        science:science.value,
        odical:odia.value,
        socialScience : social_science.value
    }
    fetch("http://localhost:9090/student-report",{
        method:'POST',
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(student)
    }).then((res)=>alert('Data Saved Successfully'));
});


function getId() {
    fetch('http://localhost:9090/student-details', {
        method: 'GET'
    })
        .then((res) => res.json())
        .then((data) => {
            const student = data.filter((item) => {
                const dname = item.name.toLowerCase()
                const uname = sname.value.toLowerCase()
                return (dname === uname)
            })
            console.log(student);
            id.value=student[0].id;
        })
}
