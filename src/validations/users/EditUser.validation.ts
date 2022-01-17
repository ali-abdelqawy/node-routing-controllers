import { Length, IsEmail, IsMobilePhone, IsOptional } from "class-validator";
import { UserRole } from "../../enums";

export class EditUser {
  @IsOptional()
  @Length(10, 20)
  firstName: string;

  @IsOptional()
  @Length(10, 20)
  lastName: string;

  @IsOptional()
  @IsEmail()
  email: string;

  @IsOptional()
  @IsMobilePhone("ar-SA")
  phone: string;

  @IsOptional()
  @Length(64, 128)
  password: string;

  @IsOptional()
  role: UserRole;
}
