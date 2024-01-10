// services/types.d.ts
export interface NotificationMessage {
  message: string;
  type: 'info' | 'success' | 'error';
  duration: number;
  visible: boolean;
}
//{{if message.visible 'block' 'hidden'}}
