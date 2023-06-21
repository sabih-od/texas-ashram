import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { SermonsModule } from './sermons/sermons.module';
import { PostsModule } from './posts/posts.module';
import { PrayerRequestsModule } from './prayer-requests/prayer-requests.module';

@Module({
  imports: [
      ConfigModule.forRoot(),
      UsersModule,
      AuthModule,
      SermonsModule,
      PostsModule,
      PrayerRequestsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
