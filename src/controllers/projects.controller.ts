import { Controller, Get, Inject } from '@nestjs/common';
import { Connection, Repository } from 'typeorm';

import { Project } from '../entities/project.entity';

@Controller('projects')
export class ProjectsController {
  repository: Repository<Project>;

  constructor(
    private connection: Connection,
  ) {
    this.repository = connection.getRepository(Project);
  }

  @Get()
  findAll() {
    return this.repository.find();
  }
}
