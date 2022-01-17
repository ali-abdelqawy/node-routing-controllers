import { Length, IsEmail, IsMobilePhone } from "class-validator";
import { UserRole } from "../../enums";

export class AddNewUser {
  @Length(10, 20)
  firstName: string;

  @Length(10, 20)
  lastName: string;

  @IsEmail()
  email: string;

  @IsMobilePhone("ar-SA")
  phone: string;

  @Length(64, 128)
  password: string;

  role: UserRole;
}
