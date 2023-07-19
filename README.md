# STUDENTS_PORTAL

<img width="960" alt="Screenshot 2023-07-17 114439" src="https://github.com/AnmolBehera/STUDENTS_PORTAL/blob/main/images/logo.png">

## INTRODUCTION

The Student Portal is a web application that provides a centralized platform for students and administrators to manage various aspects of academic life. It offers separate modules for administrators and students, each with their own set of features and functionalities.

## COMPONENTS/userflow

Home module ----> this module contains the home page,ab
out us page etc.From home page we can traverse to signup,signin pages.

ProEd :

<img width="960" alt="Screenshot 2023-07-17 122225" src="https://github.com/AnmolBehera/STUDENTS_PORTAL/blob/main/images/Screenshot%202023-07-17%20122225.png">
<img width="960" alt="Screenshot 2023-07-17 114504" src="https://github.com/AnmolBehera/STUDENTS_PORTAL/blob/main/images/Screenshot%202023-07-17%20114504.png">
<img width="960" alt="Screenshot 2023-07-17 114520" src="https://github.com/AnmolBehera/STUDENTS_PORTAL/blob/main/images/Screenshot%202023-07-17%20114520.png">

Mobile Responsive View:
<div><img width="158" alt="Screenshot 2023-07-17 120221" src="https://github.com/AnmolBehera/STUDENTS_PORTAL/blob/main/images/Screenshot%202023-07-17%20120221.png"></div>
<div><img width="158" alt="Screenshot 2023-07-17 120252" src="https://github.com/AnmolBehera/STUDENTS_PORTAL/blob/main/images/Screenshot%202023-07-17%20120252.png"></div>
<div><img width="158" alt="Screenshot 2023-07-17 120311" src="https://github.com/AnmolBehera/STUDENTS_PORTAL/blob/main/images/Screenshot%202023-07-17%20120311.png"></div>
<div><img width="158" alt="Screenshot 2023-07-17 120328" src="https://github.com/AnmolBehera/STUDENTS_PORTAL/blob/main/images/Screenshot%202023-07-17%20120328.png"></div>

About Us:
<img width="960" alt="Screenshot 2023-07-17 114551" src="https://github.com/AnmolBehera/STUDENTS_PORTAL/blob/main/images/Screenshot%202023-07-17%20114551.png">

signup page ----> for the new admin includes username,email, password, confirm password and contact number of the user after successful signUp, the User will get the access of the portal

<img width="960" alt="Screenshot 2023-07-17 114619" src="https://github.com/AnmolBehera/STUDENTS_PORTAL/blob/main/images/Screenshot%202023-07-17%20114619.png">
<img width="960" alt="Screenshot 2023-07-17 114633" src="https://github.com/AnmolBehera/STUDENTS_PORTAL/blob/main/images/Screenshot%202023-07-17%20114633.png">

Showing of error message:

<img width="960" alt="Screenshot 2023-07-17 121021" src="https://github.com/AnmolBehera/STUDENTS_PORTAL/blob/main/images/Screenshot%202023-07-17%20121021.png">

signin page ----> for the user who signedup the page already next time they will only login with email and password that is already being done with same email an password in the signUp, User will get the access of the portal

<img width="959" alt="Screenshot 2023-07-17 114650" src="https://github.com/AnmolBehera/STUDENTS_PORTAL/blob/main/images/Screenshot%202023-07-17%20114650.png">

The student portal includes 1 module:- admin.

## ADMIN MODULE

User authentication: Admins can securely log in to the system using their credentials.

Admin module -----> this model has a Home page/landing page, where the home page includes nav-links of home,about,signUp, signin and also the admin module will be doing CRUD operations where we can add,edit,delete,update the student details and show the data in table format. Admin can create the details of the student, delete the records of a student, update the subjects marks of a student and so on.

<img width="960" alt="Screenshot 2023-07-17 114727" src="https://github.com/AnmolBehera/STUDENTS_PORTAL/blob/main/images/Screenshot%202023-07-17%20114727.png">

registration -----> In this page the admin will register themselves by giving their details which includes name, fathername, email,etc after successful registration the the admin will be applying CRUD operations.

<img width="960" alt="Screenshot 2023-07-17 114747" src="https://github.com/AnmolBehera/STUDENTS_PORTAL/blob/main/images/Screenshot%202023-07-17%20114747.png"><img width="960" alt="Screenshot 2023-07-17 115756" src="https://github.com/AnmolBehera/STUDENTS_PORTAL/blob/main/images/Screenshot%202023-07-17%20115756.png">

students' record -----> In this page the list of students is shown.We can find the students of class 11 or 12 and also searching of a particular student can be done by using his or her name.Again, we can update the student details and also we can remove the details of a student.

PC view:
<img width="960" alt="Screenshot 2023-07-17 114804" src="https://github.com/AnmolBehera/STUDENTS_PORTAL/blob/main/images/Screenshot%202023-07-17%20114804.png">

Update Page using modal:
<img width="960" alt="Screenshot 2023-07-17 114838" src="https://github.com/AnmolBehera/STUDENTS_PORTAL/blob/main/images/Screenshot%202023-07-17%20114838.png">
<img width="960" alt="Screenshot 2023-07-17 115826" src="https://github.com/AnmolBehera/STUDENTS_PORTAL/blob/main/images/Screenshot%202023-07-17%20115826.png">

Mobile view:

<div><img width="248" alt="Screenshot 2023-07-19 122349" src="https://github.com/AnmolBehera/STUDENTS_PORTAL/blob/main/images/Screenshot%202023-07-19%20122349.png"></div>


## Installation

Clone the repository: git clone https://github.com/your-username/student-portal.git

Install dependencies: npm install

Configure the database connection in the config.js file.

Run the application: npm start
Access the student portal in your browser at http://localhost:3000.

## Technologies Used

Backend: Node.js,
Frontend: HTML, CSS, JavaScript
Database: json
Authentication: JWT (JSON Web Tokens)

## Contributing

Contributions are welcome! If you find a bug or have a feature request, please open an issue or submit a pull request. Make sure to follow the coding style and guidelines.
