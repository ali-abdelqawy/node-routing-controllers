import { IsNumber, Min, Max } from "class-validator";

export class Pagination {
  @IsNumber()
  @Min(0)
  pageNumber: number;

  @IsNumber()
  @Max(30)
  pageSize: number;
}
