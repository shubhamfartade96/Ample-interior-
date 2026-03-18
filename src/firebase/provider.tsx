'use client';

import React, { createContext, useContext } from 'react';
import { getApps, initializeApp, type FirebaseApp } from 'firebase/app';
import { getAuth, type Auth } from 'firebase/auth';
import { getFirestore, type Firestore } from 'firebase/firestore';
import { firebaseConfig } from './config';


export type FirebaseInstances = {
  app: FirebaseApp;
  auth: Auth;
  firestore: Firestore;
};

const FirebaseContext = createContext<FirebaseInstances | null>(null);

interface FirebaseProviderProps {
  children: React.ReactNode;
  instances: FirebaseInstances;
}

export function FirebaseProvider({ children, instances }: FirebaseProviderProps) {
  return (
    <FirebaseContext.Provider value={instances}>
      {children}
    </FirebaseContext.Provider>
  );
}

export const useFirebase = () => useContext(FirebaseContext);
export const useFirebaseApp = () => useContext(FirebaseContext)?.app ?? null;
export const useAuth = () => useContext(FirebaseContext)?.auth ?? null;
export const useFirestore = () => useContext(FirebaseContext)?.firestore ?? null;

let firebaseInstances: FirebaseInstances | null = null;

export function initializeFirebase(): FirebaseInstances {
  if (typeof window === 'undefined') {
    // Return mock instances for SSR
    return {
      app: {} as FirebaseApp,
      auth: {} as Auth,
      firestore: {} as Firestore,
    };
  }
  
  if (firebaseInstances) {
    return firebaseInstances;
  }

  const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
  const auth = getAuth(app);
  const firestore = getFirestore(app);

  firebaseInstances = { app, auth, firestore };
  return firebaseInstances;
}
