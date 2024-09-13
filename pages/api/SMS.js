import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method === 'POST') {

        const {fullName, email, message} = req.body;

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const smsRecipient = ` ${process.env.MYPHONENUMBER}@tmomail.net `;

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: smsRecipient,
            subject: 'New Contact Form ',
            text: `you have received a new messaage from ${fullName} (${email}):\n\n${message}`,
        };

        try{
            await transporter.sendMail(mailOptions);
            res.status(200).json({ success: true, message: 'SMS sent successfully!' });
            //

        }catch (error) {
            console.error('Error Sending Email:', error);
            res.status(500).json({ success: false, message: 'SMS failed', error });


        }
    
        


    }
}