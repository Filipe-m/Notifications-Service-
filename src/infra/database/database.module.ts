import { Module } from '@nestjs/common';
import { NotificationsRepositories } from 'src/app/repositories/notifications-repositorie';
import { PrismaService } from './Prisma/prisma.service';
import { PrismaNotificationsRepository } from './Prisma/repositories/prisma-notifications-repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: NotificationsRepositories,
      useClass: PrismaNotificationsRepository,
    },
  ],
  exports: [NotificationsRepositories],
})
export class DatabaseModule {}
