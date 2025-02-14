import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User, user => user.id)
    @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
    user_id: number;

<<<<<<< HEAD
    @OneToMany(() => OrderProduct, (orderProduct) => orderProduct.product)
    orderProducts!: OrderProduct[];
=======
    //@ManyToOne (() => Category )
>>>>>>> 3f4a0efb281da9f980405ce639efc59e3c54f82d
    
    @Column({ type: 'varchar', length: 100 })
    name: string;
    
    @Column({ type: 'decimal', precision: 10, scale: 2 })
    price: number;
    
    @Column({ type: 'varchar', length: 255 })
    description: string;

    @Column({ type: 'int', default: 0 })
    quantity: number;

    @Column({ type: 'varchar', length: 255, nullable: true })
    image: string;
    
    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;
    
    @Column({ type: 'timestamp', nullable: true })
    updatedAt: Date;
    
} 