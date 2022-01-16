import { ObjectId } from "mongoose";
import {
  Param,
  Body,
  Get,
  Post,
  Put,
  Delete,
  JsonController,
  QueryParam,
} from "routing-controllers";

@JsonController("/users")
export class UserController {
  @Get()
  getAll(@QueryParam("limit", { required: true }) limit: number): string {
    if (limit > 20)
      return "maximum number of user to be returned in a single request = 20";
    return `This action returns ${limit} users`;
  }

  @Get("/:id")
  getOne(@Param("id") id: number): string {
    return "This action returns user #" + id;
  }

  @Post("")
  post(@Body() user: any): string {
    return `Adding user -> ${user}`;
  }

  @Put("/:id")
  put(@Param("id") id: ObjectId, @Body() user: any): string {
    return `updated user with id = ${id} -> ${user}`;
  }

  @Delete("/:id")
  remove(@Param("id") id: ObjectId): string {
    return `Removing user with id =${id}`;
  }
}
