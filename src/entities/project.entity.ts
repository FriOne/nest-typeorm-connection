import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, OneToMany } from 'typeorm';

@Entity()
export class Project {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  machineName: string;

  @Column('varchar')
  name: string;

  @CreateDateColumn()
  createdAt: Date;

  @Column('boolean', {default: false})
  hidden: boolean;

  @Column('timestamp')
  lastBuildDate: Date;
}
