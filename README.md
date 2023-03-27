# Ayuva Hospital management system.
<H1>Welcome to this repository and we are excited to share our project with you.Have a great look! </H1>
---

### :man_technologist: About Project :
<h3>Ayuva is an online hospital management system where users can signup and register as a patient, user can book appointments,can pay fees of appointments ,see all of this appointments, can cancel the appointments.We also provided a doctor panel where user can login with the credentials given by admin and can see and cancel all of his appointments, this will be reflected both on doctor side and user or patent side.</h3>
<h3>
frontend deployment:<a href = "https://hmsfrontend-eight.vercel.app/">click here to see the deployment</a>
</h3>
<h3>
backend deployment:<a href = "https://hospitalmanagementsystembackend-gnz7.onrender.com/">click here to test the backend apis</span>
</h3>

<h3>
presentation video:<a href = "https://drive.google.com/file/d/1AVgPQlaTx3DFsKIX6lzFsbGeStxEbAIn/view">click here to see the full project presentation</span>
</h3>


---


### :man_technologist: About Contributors :
<h3>This project has been built by a team of three web developers and it took us almost 5 days to built it, we all were very new to react so it was a great challenge.</h3>

<div text-align = "center">
Anurag Upadhyay(me)
I am a full stack developer.I was the team lead and i was involved in the development of the schema and models design, workflow of the website, I entirely created payment gatewateway,nodemailer,oauth in the backend , and homepage,userdashboard,doctor panel in the frontend with the collaboration of my teammates. I was involved in managing most of states involved in the frontend and i used React context api for state management and material ui and pure css for frontend design.I was also responsible for deployment of backend and frontend.
As we progress in the project,<b> it sometimes required for us to upgrade the schema by adding a column,so I was also responsible for changing the schema based on the project requirements by writing raw sql query in the cloud database.</b>
</div>
<div text-align = "center">

<a href = "https://github.com/KishorDMane">Kishor Mane</a>
Kishor is a backend developer.He entirely created most of models involved in the backend, he setup almost all routes.He is involved is developing the schema code, models, jwt,authentication,Orm management,building relationships between tables etc he is also responsible for writing a very good documentation of the backend api's as.Almost more than 80% of backend is developed by him and 20% is developed by me.As a team were constantly communcating
.Kishore is also responsible for developing the doctor panel with react js.
</div>


<div>
<a href = "https://github.com/yogendraft21" >Yogendra verma</a>
Yogendra was involved in the frontend and was  responsible for the development of user dasboard panel with reactjs and chakra ui.Anurag and yogendra worked collectively to create a good functional dashboard.In the user dashboard , he was responsible for the ui design and i was responsible for statemanagemtn with context api and connecting each component with the backend.He developed all appointments,dashboard and myaccout pages.He also developed admin panel but that was not functional so we have removed it.
</div>


<h3>
backend deployment:<a href = "https://hospitalmanagementsystembackend-gnz7.onrender.com/">click here to test the backend apis</span>
</h3>

<h3>
presentation video:<a href = "https://drive.google.com/file/d/1AVgPQlaTx3DFsKIX6lzFsbGeStxEbAIn/view">Click here to see the full project presentation</span>
</h3>


---

### :hammer_and_wrench: Languages and Tools Used In This Project :
<div >
 
<!-- 
<img src="https://github.com/devicons/devicon/blob/master/icons/html5/html5-original.svg" title="HTML5" alt="HTML" width="40" height="40"/>&nbsp;
<img src="https://github.com/devicons/devicon/blob/master/icons/javascript/javascript-original.svg" title="JavaScript" alt="JavaScript" width="40" height="40"/>&nbsp; -->
<img src="https://github.com/devicons/devicon/blob/master/icons/express/express-original.svg" title="EXPRESS" alt="EXPRESS" width="40" height="40"/>&nbsp;
<img src="https://img.shields.io/badge/Nodejs-black?style=for-the-badge&logo=MySQL&logoColor=white" alt="MySql"/>
<img src="https://img.shields.io/badge/Nodejs-black?style=for-the-badge&logo=Css&logoColor=white" alt="css"/>
<img src="https://img.shields.io/badge/Nodejs-black?style=for-the-badge&logo=Nodejs&logoColor=white" alt="nodejs"/>
<img src="https://img.shields.io/badge/Stripe-black?style=for-the-badge&logo=Stripe&logoColor=white" alt="stripe"/>
<img src="https://img.shields.io/badge/Sequelize-black?style=for-the-badge&logo=sequelize&logoColor=white" alt="sequelize"/>
<img src="https://img.shields.io/badge/nodemailer-black?style=for-the-badge&logo=nodemailer&logoColor=white" alt="nodemailer"/>
<img src="https://img.shields.io/badge/materialui-black?style=for-the-badge&logo=materialui&logoColor=white" alt="materialui"/>
<img src="https://img.shields.io/badge/Reactjs-black?style=for-the-badge&logo=react&logoColor=blue" alt="reactjs"/>

</div>
 <h3>The frontend is deployed on vercel and bakcend is deployed on render, we are using freemysql as cloud mysql database.</h3>


---

### :hammer_and_wrench: Features and functionalities :
<div >
<ul>
We Have implemented Authentication,Homepage ,user dashboard,doctor,Payment integration Page and Lastly Payment Successfull Page.
<li> 
Authentication, This Website is Enabled With Jwt.A normal Signup and Login flow is implemented. User can do forgot password in case he is not able to remember the password.
</li>
<li> 
 Password are hashed before dumping to DB for ensuring Security using Bcrypt.
</li>
<li> 
Some Nice carousel for enhancing the UX of website
</li>

<li> 
Login,Signup and forgot password functionality is given.Apart from this <b> we also  implemented Oauth for making the authentication fast and improving the UX</b>
</li>
<li> 
 The User can register himself as a patient and has to create a account first by providing all the basic details and after that he can register himself as a patient.After registering , he can update his profile, and can book appointments with the doctor.
</li>
<li> 
For A Smooth User experience We have used Stripe Api in test mode.Stripe payment gateway is integrated with Express.
</li>

</ul> 
 
</div>
<h1 align="center">Workflow Of This Website</h1>
<h3>Homepage of the website</h3>
<p> On Opening of this website You will land to the homepage</p>


![Screenshot from 2023-03-27 16-04-08](https://user-images.githubusercontent.com/108891203/227929786-7643b94c-f7b7-41e0-908b-e98805d837f6.png)



<h3>Authentication Page(login/signup)</h3>
<p> On clicking of account in top right section of this section you will be redirected to signup page </p>

![Screenshot from 2023-03-27 17-02-59](https://user-images.githubusercontent.com/108891203/227929876-3cfd8f40-da13-4362-a837-b7e67c5fcffd.png)


<p> If you already has an account then you just have to login</p>
<p> Signup is pretty straightforward, all you have to do is to enter valid details and set a strong password .<b>Note That:Your password must of length of 8 and it should have atleast one uppercase,one lowercase,one special character, your email should a valid email.If you are not passing all of these checks ,then that means you are filling wrong credentials details.</b> </p>


<h3>Fill your credentials to signup or create your account</h3>


<p>after filling and signing up , you have to login with the same credentials  and on successfull login this modal will be shown,also if you are able to login or signup successfully , there will be another model for failure</p>

![Screenshot from 2023-03-27 17-05-05](https://user-images.githubusercontent.com/108891203/227930534-8fa71408-3be9-40c3-b2e5-5998201c616e.png)

![Screenshot from 2023-03-27 17-07-25](https://user-images.githubusercontent.com/108891203/227930701-770a5acd-2419-4c26-a6dc-d05b44386607.png)


<h2>Click on userDashboard and it will redirect you to user dashboard </h2>

![Screenshot from 2023-03-27 17-08-35](https://user-images.githubusercontent.com/108891203/227930932-3e3725ab-6a36-426b-99f5-b9596ad617bd.png)


<p> click on register page to register yourself as a patient. </p>

![Screenshot from 2023-03-27 17-11-27](https://user-images.githubusercontent.com/108891203/227931517-41bb9999-1c2d-4087-9884-2cd08eb1380b.png)


<p>after registering successfully , the register panel will dissappear </p>

![Screenshot from 2023-03-27 17-12-30](https://user-images.githubusercontent.com/108891203/227931745-0d357810-106f-4740-989e-6d780bdb5548.png)

![Screenshot from 2023-03-27 17-12-18](https://user-images.githubusercontent.com/108891203/227931778-8d1ecd06-f48f-4a84-95aa-7092c06044f9.png)

 
<h3> You can edit your details from here , it is editable content  </h3> 

![Screenshot from 2023-03-27 17-13-56](https://user-images.githubusercontent.com/108891203/227932143-99e13138-a1f4-421b-9ae5-c1613d7bb009.png)


<h3> Click on departments or click on book appointment and it will redirect you to available departments</h3>

![Screenshot from 2023-03-27 17-15-30](https://user-images.githubusercontent.com/108891203/227932566-9e2ec1be-bdee-49d8-99df-7ade86c58924.png)


<p>Select the department, in our case , we only have one department i.e cardio,click on proceed to department </p>

![Screenshot from 2023-03-27 17-17-45](https://user-images.githubusercontent.com/108891203/227933033-4deae511-9033-4cc3-913d-a4b7f606fbaf.png)


<h3>
 Now select the available doctor, we also have rating on each doctor. and after selecting a doctor.A page like this will pop up.
</h3>

![Screenshot from 2023-03-27 17-20-03](https://user-images.githubusercontent.com/108891203/227933478-7fbba565-9f23-4062-8d48-40f63a707a11.png)

<p>Note that:<b>
 you have to select only those dates that falls on Monday, Wednesday or Friday.without select a valid date , you can't really proceed to book appointment.
 </b> </p>
<p> 
after entering a valid date , a payment gateway will show up, and upon successfull payment, you will be redirected to 
homepage,also an email will be send if payment is successfull to the patient
 </p>
 
![Screenshot from 2023-03-27 17-34-39](https://user-images.githubusercontent.com/108891203/227936653-5c81b731-9cac-49a8-bb16-28bcacc2d8d5.png)

![Screenshot from 2023-03-27 17-35-32](https://user-images.githubusercontent.com/108891203/227936881-56b6c6c9-fefb-4a7f-9a07-a0acc2f9a688.png)

<p> on successfull payment, an email will be sent to pateint email  </p>
</p>

![Screenshot from 2023-03-27 17-33-46](https://user-images.githubusercontent.com/108891203/227937039-0f0a089a-9e86-46a9-a315-30ab431b3a0c.png)


<h3>
Now lets logout and open doctor panel, 
</h3>

![Screenshot from 2023-03-27 17-37-23](https://user-images.githubusercontent.com/108891203/227937267-cdf60036-f203-48c3-8ddc-962b54db0540.png)

<p>
The credentials are provided by the admin to a doctor, So only an admin can register a new doctor to the database
</p>

![Screenshot from 2023-03-27 17-39-15](https://user-images.githubusercontent.com/108891203/227937693-b4d41b81-3d7a-4292-a885-fea6f6549849.png)

<p>
 After that you can the doctor profile,and all appointments, a doctor can also cancel an appointment if he want, and doing that will release the slot and change the availability.
</p>

![Screenshot from 2023-03-27 18-44-39](https://user-images.githubusercontent.com/108891203/227948549-4eef4def-a320-4f87-8d5b-45727cb2a380.png)

<h3>
lastly you can logout from doctor panel and you will be redirected to homepage of the website.and thats it 
</h3>
<h1>Thanks for reading till last.Have a great day. </h1>
<h3>This documentation is created by Anurag Upadhyay</h3>
