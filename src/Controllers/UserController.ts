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
import { User } from "../models/User";

@JsonController("/users")
export class UserController {
  @Get()
  getAll(@QueryParam("limit", { required: true }) limit: number) {
    if (limit > 20)
      return "maximum number of user to be returned in a single request = 20";
    return `This action returns ${limit} users`;
  }

  @Get("/:id")
  getOne(@Param("id") id: number) {
    return "This action returns user #" + id;
  }

  @Post("")
  post(@Body() user: User) {
    return "Saving user...";
  }

  @Put("/:id")
  put(@Param("id") id: number, @Body() user: any) {
    return "Updating a user...";
  }

  @Delete("/:id")
  remove(@Param("id") id: number) {
    return "Removing user...";
  }
}
