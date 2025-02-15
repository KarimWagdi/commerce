import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, UpdateDateColumn, DeleteDateColumn } from "typeorm";
import { Product } from "./Product";
import { Order } from "./Order";

@Entity()
export class OrderProduct {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    order_id!: number;

    @Column()
    product_id!: number;

    @Column({ type: "int", default: 1 })
    quantity!: number;

    @Column({ type: "decimal", precision: 10, scale: 2 })
    unit_price!: number;

    @ManyToOne(() => Order, (order) => order.orderProducts)
    order!: Order;

    @ManyToOne(() => Product, (product) => product.orderProducts)
    product!: Product;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt!: Date;
    
    @UpdateDateColumn({ type: 'timestamp', nullable: true })
    updatedAt!: Date;

    @DeleteDateColumn({ type: 'timestamp', nullable: true })
    deletedAt!: Date;
}