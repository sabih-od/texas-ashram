import * as admin from 'firebase-admin';
import * as path from "path";

// console.log(path.join(__dirname, 'fbase.json'));

const serviceAccount = require(path.join(__dirname, 'fbase.json')); // Path to your Firebase SDK credentials JSON file

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

export const firebaseAdmin = admin;
