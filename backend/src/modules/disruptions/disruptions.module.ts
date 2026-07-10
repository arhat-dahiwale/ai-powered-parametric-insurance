// src/modules/disruptions/disruptions.module.ts

import { Module } from "@nestjs/common"
import { DisruptionsController } from "./disruptions.controller"
import { DisruptionsService } from "./disruptions.service"
import { DisruptionsRepository } from "./disruptions.repository"
import { DatabaseModule } from "../../database/database.module"
import { EventsModule } from "../../events/events.module"

@Module({
  imports: [DatabaseModule, EventsModule],
  controllers: [DisruptionsController],
  providers: [DisruptionsService, DisruptionsRepository],
  exports: [DisruptionsService],
})
export class DisruptionsModule {}