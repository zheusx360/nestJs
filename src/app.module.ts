import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CoursesController } from './courses/courses.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController, CoursesController],
  providers: [AppService],
})
export class AppModule {}
