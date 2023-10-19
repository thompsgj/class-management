import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GradedItemServiceBase } from "./base/gradedItem.service.base";

@Injectable()
export class GradedItemService extends GradedItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
