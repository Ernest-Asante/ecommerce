// src/pages/api/send-email.js
import nodemailer from 'nodemailer';
import { db} from "@/firebase-admin-config"

 
 

export default async function handler(req, res) { 
    if (req.method === 'POST') {
        const { email } = req.body; 

        // Step 1: Check if the email already exists and is verified in Firestore
        try {
            const existingUserSnapshot = await db.collection('authusers')
                .where('email', '==', email) 
                .where('verified', '==', true)
                .get();

            if (!existingUserSnapshot.empty) {
                // If the user is already verified, return an error
                return res.status(400).json({ success: false, message: 'Email already exists and is verified.' });
            }
        } catch (error) {
            console.error('Error checking Firestore for existing user:', error);
            return res.status(500).json({ success: false, message: 'Error checking for existing user.' });
        }

        // Step 2: Generate a 4-digit OTP
        const otp = Math.floor(1000 + Math.random() * 9000); // generates a random 4-digit OTP

        // Step 3: Create a timestamp
        const timestamp = new Date();

        // Step 4: Store email, OTP, and timestamp in Firestore (upsert behavior)
        try {
            await db.collection('authusers').doc(email).set({
                otp,
                timestamp,
                verified: false // Ensure that the user is not marked as verified
            }, { merge: true }); // merge: true updates the document if it already exists

            // Step 5: Send the OTP via email
            const transporter = nodemailer.createTransport({
                service: 'gmail', // Replace with your SMTP server
                auth: {
                    user: 'waecbay@gmail.com',
                    pass: 'puae vhmw tugh ltrb',
                },
            });

            const mailOptions = {
                from: 'Drift <waecbay@gmail.com>',
                to: email,
                subject: 'Your OTP Code',
                text: `Your OTP code is ${otp}. It will expire in 10 minutes.`,
            };

            await transporter.sendMail(mailOptions);

            return res.status(200).json({ success: true, message: 'OTP sent successfully' });
        } catch (error) {
            console.error('Error storing OTP or sending email:', error);
            return res.status(500).json({ success: false, message: 'Error storing OTP or sending email.' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
