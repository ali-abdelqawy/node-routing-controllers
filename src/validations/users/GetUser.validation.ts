import { IsMongoId } from "class-validator";

export class GetUser {
  @IsMongoId()
  id: string;
}
