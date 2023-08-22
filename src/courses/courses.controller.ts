import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Patch,
  Delete,
} from "@nestjs/common";
import { CoursesService } from "./courses.service";

@Controller("courses")
export class CoursesController {
  constructor(private readonly coursesServices: CoursesService) {}

  @Get("getall")
  findAll() {
    return this.coursesServices.findAll();
  }

  @Get("by-id/:id")
  findById(@Param("id") id: string) {
    return this.coursesServices.findOne(id);
  }

  @Post()
  create(@Body() body) {
    return this.coursesServices.create(body);
  }

  @Patch("update/:id")
  update(@Param("id") id: string, @Body() body) {
    return this.coursesServices.update(id, body);
  }

  @Delete("delete-id/:id")
  deleteById(@Param("id") id: string) {
    return this.coursesServices.remove(id);
  }
}
