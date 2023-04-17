import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [AuthModule, UserModule, BookmarkModule,  MongooseModule.forRoot('mongodb+srv://shubhamtribhuvan:1234@cluster0.dkffjqp.mongodb.net/?retryWrites=true&w=majority'),],
})

export class AppModule {}
