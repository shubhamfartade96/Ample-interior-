'use client';

import React from 'react';
import { FirebaseProvider, initializeFirebase } from './provider';

interface FirebaseClientProviderProps {
  children: React.ReactNode;
}

export function FirebaseClientProvider({ children }: FirebaseClientProviderProps) {
  const instances = initializeFirebase();
  return <FirebaseProvider instances={instances}>{children}</FirebaseProvider>;
}
