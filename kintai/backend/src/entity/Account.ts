import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  VersionColumn,
  Index
} from 'typeorm';

enum Status {
  '有料' = '有料',
  '無料' = '無料',
  'ログイン不可' = 'ログイン不可'
}

@Entity()
export class Account {
  @PrimaryGeneratedColumn()
  id: number;
  @CreateDateColumn()
  @Index()
  created: Date;
  @UpdateDateColumn()
  updated: Date;
  @VersionColumn()
  version: number;

  @Column({
    unique: true
  })
  systemId: string = '';
  @Column()
  accountId: string = '';
  @Column()
  password: string = '';
  @Column()
  company: string = '';
  @Column()
  busho: string = '';
  @Column()
  name: string = '';
  @Column()
  zip: string = '';
  @Column()
  address: string = '';
  @Column()
  address2: string = '';
  @Column()
  tel: string = '';
  @Column({
    unique: true
  })
  email: string = '';
  @Column()
  staff: string = '';
  @Column()
  remarks: string = '';
  @Column('enum', { enum: Status })
  status: Status = Status.有料;
  @Column()
  num: number = 10;
}
