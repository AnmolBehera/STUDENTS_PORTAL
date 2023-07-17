# STUDENTS_PORTAL

## INTRODUCTION

The Student Portal is a web application that provides a centralized platform for students and administrators to manage various aspects of academic life. It offers separate modules for administrators and students, each with their own set of features and functionalities.

## COMPONENTS/user flow

Home module ----> this module contains the home page,ab
out us page etc.From home page we can traverse to signup,signin pages.

ProEd :
<img width="960" alt="Screenshot 2023-07-17 114439" src="https://github.com/AnmolBehera/STUDENTS_PORTAL/assets/118097628/e057b819-ac25-4ac1-bebc-ecde51f573d3">
<img width="960" alt="Screenshot 2023-07-17 114504" src="https://github.com/AnmolBehera/STUDENTS_PORTAL/assets/118097628/ef635359-361b-4fc2-b7fe-b692ec2f112c">
<img width="960" alt="Screenshot 2023-07-17 114520" src="https://github.com/AnmolBehera/STUDENTS_PORTAL/assets/118097628/83adbc54-ccd2-4d4e-a226-3051d57575a7">

Mobile Responsive View:

<div><img width="158" alt="Screenshot 2023-07-17 120221" src="https://github.com/AnmolBehera/STUDENTS_PORTAL/assets/118097628/03362f40-7ab8-470f-b75e-905ad377f7d2"></div>
<div><img width="158" alt="Screenshot 2023-07-17 120252" src="https://github.com/AnmolBehera/STUDENTS_PORTAL/assets/118097628/0a5fb65b-4205-4500-be8d-752d7831d945"></div>
<div><img width="158" alt="Screenshot 2023-07-17 120311" src="https://github.com/AnmolBehera/STUDENTS_PORTAL/assets/118097628/58f22315-825a-4a11-9569-154d8290e46f"></div>
<div><img width="158" alt="Screenshot 2023-07-17 120328" src="https://github.com/AnmolBehera/STUDENTS_PORTAL/assets/118097628/02a77ccc-9547-48b9-a7bd-611b8a2128c1"></div>


About Us:
<img width="960" alt="Screenshot 2023-07-17 114551" src="https://github.com/AnmolBehera/STUDENTS_PORTAL/assets/118097628/4a3343a1-5a84-4058-b5da-9808e555aea3">

signup page ----> for the new admin includes username,email, password, confirm password and contact number of the user after successful signUp, the User will get the access of the portal

<img width="960" alt="Screenshot 2023-07-17 114619" src="https://github.com/AnmolBehera/STUDENTS_PORTAL/assets/118097628/f6304c14-d581-4785-83fc-94a5f9df98bb">
<img width="960" alt="Screenshot 2023-07-17 114633" src="https://github.com/AnmolBehera/STUDENTS_PORTAL/assets/118097628/7651cb99-0aef-492e-9c2e-cb070f193267">

signin page ----> for the user who signedup the page already next time they will only login with email and password that is already being done with same email an password in the signUp, User will get the access of the portal

<img width="959" alt="Screenshot 2023-07-17 114650" src="https://github.com/AnmolBehera/STUDENTS_PORTAL/assets/118097628/82a4e747-1085-4bc3-838f-789d4642fab7">



The student portal includes 1 module:- admin.

## ADMIN MODULE

User authentication: Admins can securely log in to the system using their credentials.

Admin module -----> this model has a Home page/landing page, where the home page includes nav-links of home,about,signUp, signin and also the admin module will be doing CRUD operations where we can add,edit,delete,update the student details and show the data in table format. Admin can create the details of the student, delete the records of a student, update the subjects marks of a student and so on.

<img width="960" alt="Screenshot 2023-07-17 114727" src="https://github.com/AnmolBehera/STUDENTS_PORTAL/assets/118097628/6784f6ee-e4ca-4e43-b63a-2baca4dbc902">

registration -----> In this page the admin will register themselves by giving their details which includes name, fathername, email,etc after successful registration the the admin will be applying CRUD operations.

<img width="960" alt="Screenshot 2023-07-17 114747" src="https://github.com/AnmolBehera/STUDENTS_PORTAL/assets/118097628/ba7d0602-fd44-4a7d-9be4-58cc54b20217"><img width="960" alt="Screenshot 2023-07-17 115756" src="https://github.com/AnmolBehera/STUDENTS_PORTAL/assets/118097628/81700255-214a-4f27-9a41-17bddb3c4de5">

students' record -----> In this page the list of students is shown.We can find the students of class 11 or 12 and also searching of a particular student can be done by using his or her name.Again, we can update the student details and also we can remove the details of a student.

<img width="960" alt="Screenshot 2023-07-17 114804" src="https://github.com/AnmolBehera/STUDENTS_PORTAL/assets/118097628/0af37f79-a1dd-42b8-b79d-c058f7aa6d7b">
<img width="960" alt="Screenshot 2023-07-17 114838" src="https://github.com/AnmolBehera/STUDENTS_PORTAL/assets/118097628/9dcac7b7-36ae-48d2-81aa-5ae03a4c8445">
<img width="960" alt="Screenshot 2023-07-17 115826" src="https://github.com/AnmolBehera/STUDENTS_PORTAL/assets/118097628/8b550b60-d330-45d7-8daf-98bb4412afdb">



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
