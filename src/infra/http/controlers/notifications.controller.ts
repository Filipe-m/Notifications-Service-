import { Body, Controller, Post } from '@nestjs/common';
import { SendNotification } from 'src/app/use-cases/send.notifications';
import { CreateNotificationsBody } from '../DTOS/create-notification-body';
import { NotificationViewModel } from '../view-models/notifications-view-model';

@Controller('notifications')
export class notificationsController {
  constructor(private sendNotification: SendNotification) {}

  @Post()
  async create(@Body() body: CreateNotificationsBody) {
    const { recipientId, content, category } = body;
    const { notification } = await this.sendNotification.execute({
      recipientId,
      content,
      category,
    });
    return {
      notification: NotificationViewModel.toHTTP(notification),
    };
  }
}
