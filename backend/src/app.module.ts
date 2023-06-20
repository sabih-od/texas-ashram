import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { SermonsModule } from './sermons/sermons.module';

@Module({
  imports: [
      ConfigModule.forRoot(),
      UsersModule,
      AuthModule,
      SermonsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
