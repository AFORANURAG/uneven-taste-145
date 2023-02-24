
const nodemailer = require('nodemailer');
const { google } = require("googleapis")
const CLIENT_ID = "45580238799-3hvqsnkni176cevg8prr9a40jr792rmt.apps.googleusercontent.com"
const CLIENT_SECRET = "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";
const REDIRECT_URL = "https://developers.google.com/oauthplayground";
const REFRESH_TOKEN = "1//04uWrU2e5UGUOCgYIARAAGAQSNwF-L9IroVmF_DVaAAr23pgIiSTA9yIHvgpSdC0yzz5C4u1_1mLOGu2DxWExPnAfUV785HfLZXI";



const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URL)

oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN })


async function sendMail() {
    try {
        const accessToken = await oAuth2Client.getAccessToken();
        const transport = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                type: 'OAuth2',
                user: 'manekishor0612@gmail.com',
                clientId: CLIENT_ID,
                clientSecret: CLIENT_SECRET,
                refreshToken: REFRESH_TOKEN,
                accessToken: accessToken

            }
        })

        const mailOptions = {
            from: "manekishor <manekishor0612@gmail.com>",
            to:"manekishor212@gmail.com",
            subject:"Hello from kishor nodemailer",
            text:"hello ",
            // html:"<h1>hello</h1>"
        }



        const result =await transport.sendMail(mailOptions);
        return result

    } catch (err) {
        return err
    }
}





sendMail()
.then((result)=>console.log("email sent" , result))
.catch((err)=>console.log(err.message))


