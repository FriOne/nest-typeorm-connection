import { Component } from '@nestjs/common';
import { Connection, Repository } from 'typeorm';

import { Project } from '../entities/project.entity';

@Component()
export class BuildsService {
  projectRepository: Repository<Project>;

  constructor(
    private connection: Connection,
  ) {
    this.projectRepository = connection.getRepository(Project);
  }
}
