'use client';

// Re-export hooks and providers
export { FirebaseProvider, useFirebaseApp, useFirestore, useAuth, useFirebase, initializeFirebase, type FirebaseInstances } from './provider';
export { FirebaseClientProvider } from './client-provider';
export { useUser } from './auth/use-user';
export { useCollection } from './firestore/use-collection';
export { useDoc } from './firestore/use-doc';
