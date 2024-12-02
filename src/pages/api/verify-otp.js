import { db} from '@/firebase-admin-config'; // Make sure Firebase Admin is initialized here
import { Timestamp } from 'firebase-admin/firestore';
import { getAuth } from 'firebase-admin/auth';

// Helper function to get the timestamp 10 minutes ago
const getTimestamp10MinutesAgo = () => {
  const now = new Date();
  return new Date(now.getTime() - 10 * 60 * 1000); // 10 minutes in milliseconds
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { otp, email, name, phone, password} = req.body;

  let userId;

  try {
    const userDocRef = db.collection('authusers').doc(email); 
    const userDoc = await userDocRef.get();

    if (!userDoc.exists) {
      return res.status(404).json({ message: 'No OTP record found for this email.' });
    }

    const { otp: storedOtp, timestamp } = userDoc.data();

    console.log(otp)
    console.log(storedOtp) 

    const otpTimestamp = timestamp.toDate(); // Firebase Timestamp to JS Date
    const timeLimit = getTimestamp10MinutesAgo();

    // 1. Check if the OTP matches
    if (parseInt(otp) != parseInt(storedOtp)) {
      return res.status(400).json({ message: 'Wrong OTP' });
    }

    // 2. Check if the OTP is still valid (within 10 minutes)
    if (otpTimestamp < timeLimit) {
      return res.status(400).json({ message: 'OTP expired' });
    }


    const auth = getAuth(); // Firebase Admin Auth instance
    let userRecord;

    try {
      // Create a new user with only email and password in Firebase Authentication
      userRecord = await auth.createUser({
        email,
        password,  // Use the password from the request body
        emailVerified: true, // Set to true as OTP verification is successful
      });

      console.log('User registered successfully:', userRecord.uid);

      userId = userRecord.uid
    } catch (error) {
      console.error('Error creating user:', error);
      return res.status(500).json({ message: 'Error creating user in Firebase Auth' });
    }

    // 3. OTP is valid, update user's profile and auth documents
    const authDocRef = db.collection('authusers').doc(email);
    const profileDocRef = db.collection('profile').doc(userId);

    // Set `verified` to true in auth document 
    await authDocRef.update({ verified: true });   

    // Update profile document with new name, phone, and email
    await profileDocRef.set({ name, phone, email, userId }, { merge: true });

    return res.status(200).json({ message: 'OTP verified and profile updated successfully' });

  } catch (error) {
    console.error('Error verifying OTP:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}
 