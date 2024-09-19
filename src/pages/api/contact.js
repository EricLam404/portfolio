import nodemailer from "nodemailer";

export default async function handler(req, res) {
    if (req.method === "POST") {
        const { name, email, message } = req.body;

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        try {
            await transporter.sendMail({
                from: email,
                to: process.env.EMAIL_TO,
                subject: `Portfolio - New message from ${name}`,
                text: message,
                html: `<p>You have a new message from <strong>${name}</strong> (${email}):</p><p>${message}</p>`,
            });

            return res
                .status(200)
                .json({ message: "Email sent successfully!" });
        } catch (error) {
            console.log(error);
            return res
                .status(500)
                .json({ message: "Error sending email", error });
        }
    } else {
        res.status(405).json({ message: "Method not allowed" });
    }
}
