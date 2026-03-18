const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// A function that throws if any of the env vars are missing.
function assertFirebaseConfig(config: typeof firebaseConfig): void {
    const missing = Object.entries(config).filter(([, value]) => !value).map(([key]) => key);
    if (missing.length > 0 && typeof window !== 'undefined') {
        // In the future, we can provide a link to the Firebase console to help the user.
        // For now, we'll just throw a helpful error message.
        throw new Error(`Missing Firebase config: ${missing.join(", ")}. Please add these to your .env file.`);
    }
}

assertFirebaseConfig(firebaseConfig);


export { firebaseConfig };
