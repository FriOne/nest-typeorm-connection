import { Module } from '@nestjs/common';

import { DatabaseModule } from './database/database.module';
import { ProjectsController } from './controllers/projects.controller';
import { BuildsService } from './services/builds.service';

@Module({
  modules: [
    DatabaseModule,
  ],
  controllers: [
    ProjectsController,
  ],
  components: [
    BuildsService,
  ],
})
export class ApplicationModule {}
