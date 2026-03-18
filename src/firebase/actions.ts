'use client';

import { addDoc, collection, serverTimestamp, type Firestore } from 'firebase/firestore';
import { errorEmitter } from './error-emitter';
import { FirestorePermissionError } from './errors';

export interface Lead {
    name: string;
    phone: string;
    projectType: string;
}

export function saveLead(db: Firestore, lead: Lead) {
    const leadsCollection = collection(db, 'leads');
    
    const promise = addDoc(leadsCollection, {
        ...lead,
        createdAt: serverTimestamp(),
    });

    promise.catch(async (serverError) => {
        const permissionError = new FirestorePermissionError({
            path: leadsCollection.path,
            operation: 'create',
            requestResourceData: lead,
        });
        errorEmitter.emit('permission-error', permissionError);
    });

    return promise;
}
