import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  DeleteDateColumn,
  UpdateDateColumn,
  Check
} from "typeorm";

@Entity({ name: "rate" })
@Check(`"rate" >= 1 AND "rate" <= 5`)

export class Rate {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ default: null })
  productId!: number;

  @Column({ default: null })
  userId!: number;

  @Column()
  rate!: number;

  @Column({ default: null })
  comment!: string;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @UpdateDateColumn({ type: "timestamp", nullable: true })
  updatedAt: Date;

  @DeleteDateColumn({ type: "timestamp", nullable: true })
  deletedAt: Date;
}