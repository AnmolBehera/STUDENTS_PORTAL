# STUDENTS_PORTAL

## INTRODUCTION

The Student Portal is a web application that provides a centralized platform for students and administrators to manage various aspects of academic life. It offers separate modules for administrators and students, each with their own set of features and functionalities.

## COMPONENTS/user flow

The student portal includes 2 modules:- admin and student 

 ## ADMIN MODULE

User authentication: Admins can securely log in to the system using their credentials.

Admin module -----> this model has a Home page/landing page, where the home page includes nav-links of home,about,signUp, signin and also the admin module will be doing CRUD operations where we can add,edit,delete,update the student details and show the data in table format. Admin can create the details of the student, delete the records of a student, update the subjects marks of a student and so on.

signup page ----> for the new admin includes username,email, password, confirm password and contact number of the user after successful signUp, the User will get the access of the portal

signin page ----> for the user who signedup the page already next time they will only login with email and password that is already  being done with same email an password in the signUp, User will get the access of the portal

registration -----> In this page the admin  will register themselves by giving their details which includes  name, fathername, email,etc after successful registration the the admin will be applying CRUD operations.

subject registration ----> the admin will register the subjects of student and insert the marks of the student.

The admin will make the report card of student in which student will make the entries of the subject marks of each student and also the total marks and the percentage

## STUDENT MODULE

User authentication: Students can securely log in to the system using their credentials.

student module -----> in this module there will be 2 pages.

first page will search the roll number if the roll number is present then in then student can see their result with their details but student cannot access the admin module

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



