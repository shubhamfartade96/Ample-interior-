'use client';

import { useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { errorEmitter } from '@/firebase/error-emitter';

export default function FirebaseErrorListener() {
  const { toast } = useToast();

  useEffect(() => {
    const handlePermissionError = (error: any) => {
      console.error('Firestore Permission Error:', error);

      // In a development environment, you could show a more detailed error.
      if (process.env.NODE_ENV === 'development') {
        toast({
          variant: 'destructive',
          title: 'Firestore Permission Denied',
          description: error.message || 'Check the console for details.',
          duration: 10000,
        });
      } else {
        // In production, show a generic error.
        toast({
          variant: 'destructive',
          title: 'An error occurred',
          description: 'Could not complete the request. Please try again later.',
        });
      }
    };

    errorEmitter.on('permission-error', handlePermissionError);

    return () => {
      errorEmitter.off('permission-error', handlePermissionError);
    };
  }, [toast]);

  return null;
}
