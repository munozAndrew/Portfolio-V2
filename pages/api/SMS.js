import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method === 'POST') {

        const {FullName, email, message} = req.body;

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.email_USER,
                pass: process.env.email_PASS,
            },
        });

        const smsRecipient = ' ${process.env.MYPHONENUMBER}@tmomail.net ';

        const mailOptions = {
            from: process.env.email_USER,
            to: smsRecipient,
            subject: 'New Contact Form ',
            text: 'you have received a new messaage from ${FullName} (${email}):\n\n${message}',
        };

        try{
            await transporter.sendMail(mailOptions);
            //

        }catch (error) {
            console.error('Error Sending Email: error');

        }


    }
}