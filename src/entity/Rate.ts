import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "rate" })
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

}


