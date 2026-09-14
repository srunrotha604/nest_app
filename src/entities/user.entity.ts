import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  age?: number;

  @Column({ nullable: true })
  profilePicture?: string;

  @Column({ default: false })
  subscribeNewsletter: boolean;

  @Column({ default: true })
  isActive: boolean;
}
