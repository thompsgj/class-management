import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GradeServiceBase } from "./base/grade.service.base";

@Injectable()
export class GradeService extends GradeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
