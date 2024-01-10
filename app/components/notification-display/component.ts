// components/notification-display.ts
import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import NotificationService from 'emberjs-dynamic-tables/services/notification';

export default class NotificationDisplayComponent extends Component {
  @service('notification') notificationService!: NotificationService;
}
