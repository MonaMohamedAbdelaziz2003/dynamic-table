import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatasheetModule } from './datasheet/datasheet.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost', // اسم السيرفر أو IP
      port: 3306, // البورت الافتراضي لـ MySQL
      username: 'root', // اسم المستخدم في MySQL
      password: '12345', // الباسورد
      database: 'test_db', // اسم قاعدة البيانات
      autoLoadEntities: true, // يحمّل الـ Entities تلقائيًا
      synchronize: true, // ينشئ الجداول أو يعدّلها تلقائيًا (مفيد في التطوير فقط)
      logging: true, // ✅ فعّلي الـ logging هنا
    }),
    UsersModule,
    DatasheetModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
