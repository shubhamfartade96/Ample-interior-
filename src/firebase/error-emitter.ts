import { EventEmitter } from 'events';
import type { FirestorePermissionError } from './errors';

interface ErrorEmitterEvents {
  'permission-error': (error: FirestorePermissionError) => void;
}

class TypedEventEmitter extends EventEmitter {
  emit<T extends keyof ErrorEmitterEvents>(event: T, ...args: Parameters<ErrorEmitterEvents[T]>): boolean {
    return super.emit(event, ...args);
  }

  on<T extends keyof ErrorEmitterEvents>(event: T, listener: ErrorEmitterEvents[T]): this {
    return super.on(event, listener);
  }

  off<T extends keyof ErrorEmitterEvents>(event: T, listener: ErrorEmitterEvents[T]): this {
    return super.off(event, listener);
  }
}

export const errorEmitter = new TypedEventEmitter();
