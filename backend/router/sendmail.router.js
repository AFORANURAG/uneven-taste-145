
const nodemailer = require('nodemailer');
const express=require("express")
const mailRouter=express.Router();;



const otpgenerator=()=>{
let otp=Math.floor(Math.random()*9000+1000)
return otp
}

async function sendEmail(email,details){
    try {
    
    const transport=nodemailer.createTransport({
    service:"gmail",
    auth:{
    type:"OAuth2",
    user:"anuragupadhyay172912313@gmail.com",
    accessToken:"ya29.a0AVvZVsp5vxXaknxqVY4sI1Se65r6AALzOrrIR1QPfWCAECC-pwyT1RoQBjsLFlqvmviJfpSu3dGcdv6dRqpkDyHFIz6P6_aSbkX06i8Kj3Zm76a_Y34NupvxmBkjSzL_Z428oWjcmcfrlmoeaD7BOmD4cYlgaCgYKAcMSARASFQGbdwaI_wpoJZsWMb2M5nyxyaOFVg0163",
    refreshToken: '1//04itZXTobZV4gCgYIARAAGAQSNwF-L9Ir6CmlRoLqH0KjhspuGFLhtwuINrS2TM2zU3ZgTv9pfW9vyR2XaTdLGC5WwMQIfckyxUA',
    clientId:"172721478034-tesnpt2cg096svdifscbo9vm953vac1s.apps.googleusercontent.com",
    clientSecret:"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",
    }
    })

    const mailOptions={
        from:"anuragupadhyay172912313@gmail.com",
        to:email,
        subject:"Email from ayuva private limited ,providing most affordable health servicies",
        html:`<!DOCTYPE html>
        <html>
        <head>
            <title>Appointment Confirmation</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    font-size: 16px;
                    line-height: 1.6;
                    color: #333;
                    margin: 0;
                    padding: 0;
                }
                h1 {
                    font-size: 28px;
                    color: White;
                    font-weight: bold;
                    font-family:Noto-serif
                    margin-top: 20px;
                    margin-bottom: 20px;
                }
                p {
                    margin-bottom: 10px;
                }
                .container {
                    max-width: 600px;
                    margin: 0 auto;
                    padding: 20px;
                    background-color: #f7f7f7;
                    border-radius: 10px;
                    box-shadow: 0 0 10px rgba(0,0,0,0.2);
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>Appointment Confirmation</h1>
                <p>Dear ${details.patientName},</p>
                <p>This email is to confirm your appointment with ${details.doctorName} on ${details.dateTime} AM.</p>
                <p>Your patient ID is ${details.patientId} and your doctor's ID is ${details.doctorId}.</p>
                <p>Please arrive 15 minutes early for your appointment.</p>
                <p>Thank you for choosing our healthcare facility. We look forward to seeing you soon!</p>
                <p>your issue :${details.note}</p>
            </div>
        </body>
        </html>
        `,
      
        }
        
        const result=await transport.sendMail(mailOptions)
        return result;
        
        } catch (error) {
        return error
 }
 }



mailRouter.post("/",(req,res)=>{
let appointmentDetails=req.body
console.log("hello world")
console.log(appointmentDetails)
sendEmail(appointmentDetails.data.email,appointmentDetails.data).then((result)=>{
    console.log("email is sent ",result)
    res.json({message:"email send successfully"})
    }).catch((error)=>{
        console.log(error)
        res.json({message:"email not sent",error:error.message})
    })

})

module.exports={mailRouter}