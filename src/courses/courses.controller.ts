import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Patch,
  Delete,
} from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto/update-course.dto';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesServices: CoursesService) {}

  @Get('getall')
  findAll() {
    return this.coursesServices.findAll();
  }

  @Get('by-id/:id')
  findById(@Param('id') id: string) {
    return this.coursesServices.findOne(id);
  }

  @Post()
  create(@Body() createCourseDto: CreateCourseDto) {
    return this.coursesServices.create(createCourseDto);
  }

  @Patch('update/:id')
  update(@Param('id') id: string, @Body() updateCourseDto: UpdateCourseDto) {
    return this.coursesServices.update(id, updateCourseDto);
  }

  @Delete('delete-id/:id')
  deleteById(@Param('id') id: string) {
    return this.coursesServices.remove(id);
  }
}
