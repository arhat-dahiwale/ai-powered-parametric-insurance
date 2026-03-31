import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify'
import cors from '@fastify/cors' // ✅ ADD THIS

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  )

  // ✅ REGISTER CORS
  await app.register(cors, {
    origin: "http://localhost:3001",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // ✅ ADD THIS
    allowedHeaders: ["Content-Type", "Authorization"],
  })

  await app.listen(3000, '0.0.0.0')
}

bootstrap()