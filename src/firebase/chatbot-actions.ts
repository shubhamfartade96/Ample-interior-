'use client';

import { addDoc, collection, serverTimestamp, type Firestore } from 'firebase/firestore';
import { errorEmitter } from './error-emitter';
import { FirestorePermissionError } from './errors';

interface ChatbotLead {
    name: string;
    phone: string;
    service: string;
    source: string;
    page: string;
}

interface ChatbotEscalation {
    chatHistory: string[];
    leadInfo: {
        name: string;
        phone: string;
    }
}

export function saveChatbotLead(db: Firestore, lead: ChatbotLead) {
    const leadsCollection = collection(db, 'chatbot_leads');
    
    const promise = addDoc(leadsCollection, {
        ...lead,
        createdAt: serverTimestamp(),
    });

    promise.catch(async () => {
        const permissionError = new FirestorePermissionError({
            path: leadsCollection.path,
            operation: 'create',
            requestResourceData: lead,
        });
        errorEmitter.emit('permission-error', permissionError);
    });

    return promise;
}

export function saveChatbotEscalation(db: Firestore, escalation: ChatbotEscalation) {
    const escalationsCollection = collection(db, 'chatbot_escalations');

    const promise = addDoc(escalationsCollection, {
        ...escalation,
        createdAt: serverTimestamp(),
    });

    promise.catch(async () => {
        const permissionError = new FirestorePermissionError({
            path: escalationsCollection.path,
            operation: 'create',
            requestResourceData: escalation,
        });
        errorEmitter.emit('permission-error', permissionError);
    });

    return promise;
}

// Placeholder for logging paid API calls in the future.
export function logChatbotApiCall(db: Firestore, reason: string, userId: string) {
    const apiCallsCollection = collection(db, 'chatbot_api_calls');
    
    const promise = addDoc(apiCallsCollection, {
        reason,
        userId,
        createdAt: serverTimestamp(),
    });

    promise.catch(async () => {
        const permissionError = new FirestorePermissionError({
            path: apiCallsCollection.path,
            operation: 'create',
            requestResourceData: { reason, userId },
        });
        errorEmitter.emit('permission-error', permissionError);
    });

    return promise;
}
