import admin from "firebase-admin"
import serviceAccount from "../serviceAccountKey.json" with {type: "json"};

const app = admin.initializeApp({
    credential: cert(serviceAccount)
});
