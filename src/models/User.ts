import { Length, IsEmail, IsMobilePhone } from "class-validator";

export class User {
  constructor(
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    password: string
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phone = phone;
    this.password = password;
  }

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
}
