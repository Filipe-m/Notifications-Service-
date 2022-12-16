import { Content } from './content';
import { Notification } from './notification';

describe('Notification ', () => {
  it(' should be able to create a Notification', () => {
    const notification = new Notification({
      content: new Content('Nova solicitação de amizade'),
      category: 'social',
      recipientId: 'example-recipientId',
    });

    expect(notification).toBeTruthy();
  });
});
