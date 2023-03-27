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
 <h3>The frontend is deployed on vercel and bakcend is deployed on render, we are using freemysql as cloud mysql database.</h3>
</div>
<div text-align = "center">

<a href = "https://github.com/KishorDMane">Kishor Mane</a>
 
Kishor is a backend developer.He entirely created most of models involved in the backend, he setup almost all routes.He is involved is developing the schema code, models, jwt,authentication,Orm management,he is also responsible for writing a very good documentation of the backend api's as.Almost more than 80% of backend is developed by him and 20% is developed by me.As a team were constantly communcating
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

---

### :hammer_and_wrench: Features and functionalities :
<div >
<ul>
We Have implemented Authentication , Seller panel where seller can perform basic Crud,Authentication page,Home page,Categories page , Main product Page,Add to cart , Payment integration Page and Lastly Payment Successfull Page.
<li> 
Authentication, This Website is Enabled With Jwt,Firebase and nodemailer authentication.A normal Signup and Login flow is implemented. User can do forgot password in case he is not able to remember the password.
</li>
<li> 
 Password are hashed before dumping to DB for ensuring Security using Bcrypt.
</li>
<li> 
Some Nice carousel for enhancing the UX of website
</li>
<li> 
In main categories, There are ranges of product Available which is fetched from our server built with Node and Express
</li>
<li> 
Add To cart Functionality is Given in Both categories and main product Page Where User can Add A product to his/her cart. We have created a cart collection in mongodb and we have populated our cart and user detail in that collection.
</li>
<li> 
The User can read the whole Description of a product in main product Page and then he can add that product to his/her cart. And from his cart he can directly checkout for payment.
</li>
<li> 
For A Smooth User experience We have used Stripe Api in test mode.Stripe payment gateway is integrated with Express.
</li>
<li> 
A seller can also use This website for marketing and selling his product. As a Seller He can perform Crud operations. That means He can add his product to the main products streamline and can remove from streamline , update from streamline.
</li>
</ul> 
 
</div>
<h1 align="center">Workflow Of This Website</h1>
<h3>Homepage of the website</h3>
<p> On Opening of this website You will land to the homepage</p>

![Screenshot from 2023-01-17 22-36-57](https://user-images.githubusercontent.com/108891203/212974975-1a832e8e-650e-4b1b-b79e-429eb6296688.jpg)

![Screenshot from 2023-01-17 22-37-41](https://user-images.githubusercontent.com/108891203/212975261-f63b276b-8c02-4c3a-b7b9-5a9b90fb1523.jpg)

<h3>Authentication Page(login/signup)</h3>
<p> On clicking of account in top right section of this section you will be redirected to signup page </p>

![Screenshot from 2023-01-17 22-37-50](https://user-images.githubusercontent.com/108891203/212975421-72e7260c-39e8-4700-98f7-499365909786.jpg)

<p> If you already has an account then you just have to login</p>
<p> For signingup you have to give your number since this is two factor authentication ,and after submitting your phone number you will get an otp </p>
<p> 
Check your mobile for otp and submit it to verify
</p>

![Screenshot from 2023-01-17 22-38-52](https://user-images.githubusercontent.com/108891203/212976228-09697441-57cf-4838-8ffd-a2fd54a330b8.jpg)

<h3>Fill your credentials to signup or create your account</h3>

![Screenshot from 2023-01-17 22-39-38](https://user-images.githubusercontent.com/108891203/212976448-37ff8bb9-fb50-45b5-b6b9-35da53aae2c2.jpg)

<p>after filling and signing up  </p>

![Screenshot from 2023-01-17 22-39-38](https://user-images.githubusercontent.com/108891203/212976690-6e2d10cb-784a-4aa3-bd3a-747017dbf4cb.jpg)

<h2>Click on category page(top-right corner in the navbar)  to see all the product and You will be redirected to main category page </h2>

![Screenshot from 2023-01-17 22-40-24](https://user-images.githubusercontent.com/108891203/212976895-832d883e-7340-4add-84ac-465c369005f3.jpg)

<p> Click on any product and you will be redirected to product dexcription page </p>

![Screenshot from 2023-01-17 22-40-42](https://user-images.githubusercontent.com/108891203/212977513-86595910-0afb-4fd3-96e3-4afadd489016.jpg)

<p>You can read description here and also you can fill your pincode to view the avalability of product in your locality </p>
 
<h3> Click on Add to cart and you will be redirected to add to cart page </h3> 

![Screenshot from 2023-01-17 22-42-18](https://user-images.githubusercontent.com/108891203/212977972-b5d126e3-7c55-4c38-b341-47b04e0988f7.jpg)

<p>You can increase or decrease the quantity of product in add to cart to page. Also You can use BB20 use get a discount of 10%</p>

![Screenshot from 2023-01-17 22-42-18](https://user-images.githubusercontent.com/108891203/212978350-e3697997-9baa-47f2-a8ff-01c3d3add75d.jpg)

<h3> You can click on proceed to pay and you will be redirected to payment gateway</h3>

![Screenshot from 2023-01-17 22-42-40](https://user-images.githubusercontent.com/108891203/212978577-57ac6959-9fb3-477e-98b1-bc88b0378d67.jpg)

<p>Now Fill all the correct information. Since we are using test mode payment gateway of stripe , you can fill 4242424242424242 as the card number </p>

![Screenshot from 2023-01-17 22-43-50](https://user-images.githubusercontent.com/108891203/212978823-750418ba-e183-47ce-98b9-1bf198bcee8a.jpg)

<p> Click On pay and if payment is successfull then the blue payment button will change to green and if payment is unsuccessfull,then it will change to red</p>
<p>On Successfull payment  </p>

![Screenshot from 2023-01-17 22-44-03](https://user-images.githubusercontent.com/108891203/212979126-710ca6b4-1fec-46fc-9038-1bb9e74e6b1d.jpg)

<h1>Thanks for reading till last.Have a great day. </h1>
<h3>This documentation is created by Anurag Upadhyay</h3>













