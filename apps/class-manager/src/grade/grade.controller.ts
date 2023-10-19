import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { GradeService } from "./grade.service";
import { GradeControllerBase } from "./base/grade.controller.base";

@swagger.ApiTags("grades")
@common.Controller("grades")
export class GradeController extends GradeControllerBase {
  constructor(
    protected readonly service: GradeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
