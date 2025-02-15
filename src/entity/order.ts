import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, UpdateDateColumn, DeleteDateColumn } from "typeorm";
import { User } from "./User";
import { OrderProduct } from "./OrderProduct";

export enum OrderState {
    PENDING = "pending",
    PROCESSING = "processing",
    SHIPPED = "shipped",
    DELIVERED = "delivered",
    CANCELLED = "cancelled"
}

@Entity()
export class Order {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    user_id!: number;

    @Column({ nullable: true })
    delivery_id!: string;

    @Column({ type: "decimal"})
    total_price!: number;

    @Column({
        type: "enum",
        enum: OrderState,
        default: OrderState.PENDING
    })
    state!: OrderState;

    // @ManyToOne(() => User, (user) => user.orders)
    // user!: User;

    // @OneToMany(() => OrderProduct, (orderProduct) => orderProduct.order)
    // orderProducts!: OrderProduct[];

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt!: Date;
    
    @UpdateDateColumn({ type: 'timestamp', nullable: true })
    updatedAt!: Date;

    @DeleteDateColumn({ type: 'timestamp', nullable: true })
    deletedAt!: Date;
}