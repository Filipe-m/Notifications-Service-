import { Module } from '@nestjs/common';
import { SendNotification } from 'src/app/use-cases/send.notifications';
import { DatabaseModule } from 'src/infra/database/database.module';
import { notificationsController } from '../controlers/notifications.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [notificationsController],
  providers: [SendNotification],
})
export class HttpModule {}
