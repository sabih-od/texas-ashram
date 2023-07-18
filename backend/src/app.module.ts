import {MiddlewareConsumer, Module} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { SermonsModule } from './sermons/sermons.module';
import { PostsModule } from './posts/posts.module';
import { PrayerRequestsModule } from './prayer-requests/prayer-requests.module';
import { AnnouncementsModule } from './announcements/announcements.module';
import { EventsModule } from './events/events.module';
import { BooksModule } from './books/books.module';
import { ContactsModule } from './contacts/contacts.module';
import { SpeakersModule } from './speakers/speakers.module';
import { StaffMembersModule } from './staff-members/staff-members.module';
import { PagesModule } from './pages/pages.module';
import { MailModule } from './mail/mail.module';
import { DonationsModule } from './donations/donations.module';
import { GroupsModule } from './groups/groups.module';
import { MessagesModule } from './messages/messages.module';
import { NotificationsModule } from './notifications/notifications.module';
import { GroupRequestsModule } from './group-requests/group-requests.module';
import {AbusiveWordsMiddleware} from "./middlewares/abusiveWords.middleware";
import { ReportsModule } from './reports/reports.module';

@Module({
  imports: [
      ConfigModule.forRoot(),
      UsersModule,
      AuthModule,
      SermonsModule,
      PostsModule,
      PrayerRequestsModule,
      AnnouncementsModule,
      EventsModule,
      BooksModule,
      ContactsModule,
      SpeakersModule,
      StaffMembersModule,
      PagesModule,
      MailModule,
      DonationsModule,
      GroupsModule,
      MessagesModule,
      NotificationsModule,
      GroupRequestsModule,
      ReportsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(AbusiveWordsMiddleware).forRoutes('*');
    }
}
