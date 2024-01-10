import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import type { NotificationMessage } from './types';
import { action } from '@ember/object';
import { later } from '@ember/runloop';

export default class NotificationService extends Service {
  @tracked messages: NotificationMessage[] = [];

  @action
  show(message: string, type: NotificationMessage['type'] = 'info', duration = 2000) {
    const notificationMessage = { message, type, duration, visible: true };

    // Update messages in a new run loop to avoid immediate reactivity issues
    later(this, () => {
      this.messages = [...this.messages, notificationMessage];

      // Hide the message after the duration
      later(this, () => {
        this.messages = this.messages.map(msg => {
          if (msg === notificationMessage) {
            return { ...msg, visible: false };
          }
          return msg;
        }).filter(msg => msg.visible);
      }, duration);
    }, 0);
  }
}



declare module '@ember/service' {
  interface Registry {
    notification: NotificationService;
  }
}
