import { SendNotification } from './send.notifications';

describe('Send notification', () => {
  it('should be able to send a notification', async () => {
    const sendNotification = new SendNotification();

    const { notification } = await sendNotification.execute({
      category: 'social',
      content: 'This is a notification',
      recipientId: 'example-recipientId',
    });
    expect(notification).toBeTruthy();
  });
});
