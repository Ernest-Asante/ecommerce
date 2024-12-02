import { initializeApp, cert, getApps } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import serviceAccount from './serviceAccount.json'; // Adjust the path based on your file structure

// Check if Firebase Admin app is already initialized
if (!getApps().length) {
  initializeApp({
    credential: cert(serviceAccount),
  });
}

// Export the Firestore instance
const db = getFirestore();
export { db};
