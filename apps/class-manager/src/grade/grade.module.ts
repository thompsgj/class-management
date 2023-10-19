import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { GradeModuleBase } from "./base/grade.module.base";
import { GradeService } from "./grade.service";
import { GradeController } from "./grade.controller";
import { GradeResolver } from "./grade.resolver";

@Module({
  imports: [GradeModuleBase, forwardRef(() => AuthModule)],
  controllers: [GradeController],
  providers: [GradeService, GradeResolver],
  exports: [GradeService],
})
export class GradeModule {}
