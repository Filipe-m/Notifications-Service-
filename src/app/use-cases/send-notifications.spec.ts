import { SendNotification } from './send.notifications';

const notifications: Notification[] = [];

const notificationRepositorie = {
  async create(notification: Notification) {
    notifications.push(notification);
  },
};

describe('Send notification', () => {
  it('should be able to send a notification', async () => {
    const sendNotification = new SendNotification(notificationRepositorie);

    const { notification } = await sendNotification.execute({
      category: 'social',
      content: 'This is a notification',
      recipientId: 'example-recipientId',
    });
    expect(notification).toBeTruthy();
  });
});
