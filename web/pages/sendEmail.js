// import nodemailer from "nodemailer"

async function sendEmail(name, email, contact, startDate, endDate, time, description) {
    try {
        // Create a Nodemailer transporter with your SMTP configuration
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: false, // Set to true if using SSL/TLS
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD,
            },
            tls: {
                rejectUnauthorized: false,
            },
        });

        // Prepare the email content
        const text = `
                      Name: ${name}
                      Email: ${email}
                      Contact: ${contact}
                      Start Date: ${startDate}
                      End Date: ${endDate}
                      Time: ${time}
                      Description: ${description}
                    `;

        const mailOptions = {
            from: process.env.MAIL_FROM_ADDRESS,
            to: 'prayerrequests@texaschristianashram.org',
            subject: 'New Prayer Request',
            text: text,
        };

        // Send the email
        const emailResponse = await transporter.sendMail(mailOptions);
        console.log('Email sent successfully:', emailResponse);

        return true; // Indicate that the email was sent successfully
    } catch (error) {
        console.error('Error sending email:', error);
        return false; // Indicate that there was an error sending the email
    }
}

module.exports = sendEmail;
