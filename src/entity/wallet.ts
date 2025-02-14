import { Entity, PrimaryGeneratedColumn, Column, OneToMany, UpdateDateColumn, DeleteDateColumn, OneToOne, JoinColumn } from "typeorm";
import { User } from "./User";

@Entity()
export class Wallet {
  @PrimaryGeneratedColumn()
  id!: number;

  @OneToOne(() => User, (user) => user.id)
  user: User;
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
      user_id: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  balance!: number;


  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
  
  @UpdateDateColumn({ type: 'timestamp', nullable: true })
  updatedAt: Date;

  @DeleteDateColumn({ type: 'timestamp', nullable: true })
  deletedAt: Date;
}
