// src/modules/claims/claims.module.ts

import { Module } from "@nestjs/common"
import { ClaimsService } from "./claims.service"
import { ClaimsRepository } from "./claims.repository"
import { ClaimsConsumer } from "./claims.consumer"
import { DatabaseModule } from "../../database/database.module"
import { RedisModule } from "../../redis/redis.module"
import { EventsModule } from "../../events/events.module"

@Module({
  imports: [DatabaseModule, EventsModule, RedisModule],
  providers: [ClaimsService, ClaimsRepository, ClaimsConsumer],
})
export class ClaimsModule {}