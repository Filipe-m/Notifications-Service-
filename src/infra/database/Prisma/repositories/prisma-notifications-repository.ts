import { Injectable } from '@nestjs/common/decorators';
import { PrismaNotificationMapper } from 'prisma/mappers/prisma-notification-mapper';
import { Notification } from 'src/app/entities/notification';
import { NotificationsRepositories } from '../../../../app/repositories/notifications-repositorie';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaNotificationsRepository
  implements NotificationsRepositories
{
  constructor(private prismaService: PrismaService) {}
  async create(notification: Notification): Promise<void> {
    const raw = PrismaNotificationMapper.toPrisma(notification);
    await this.prismaService.notification.create({
      data: raw,
    });
  }
}
