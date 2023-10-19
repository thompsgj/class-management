import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { GradedItemModuleBase } from "./base/gradedItem.module.base";
import { GradedItemService } from "./gradedItem.service";
import { GradedItemController } from "./gradedItem.controller";
import { GradedItemResolver } from "./gradedItem.resolver";

@Module({
  imports: [GradedItemModuleBase, forwardRef(() => AuthModule)],
  controllers: [GradedItemController],
  providers: [GradedItemService, GradedItemResolver],
  exports: [GradedItemService],
})
export class GradedItemModule {}
