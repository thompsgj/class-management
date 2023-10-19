import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { GradedItemService } from "./gradedItem.service";
import { GradedItemControllerBase } from "./base/gradedItem.controller.base";

@swagger.ApiTags("gradedItems")
@common.Controller("gradedItems")
export class GradedItemController extends GradedItemControllerBase {
  constructor(
    protected readonly service: GradedItemService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
