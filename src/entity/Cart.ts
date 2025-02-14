import{ Entity, PrimaryGeneratedColumn, Column, OneToMany, UpdateDateColumn, DeleteDateColumn } from "typeorm";

@Entity()
    export class cart{
        @PrimaryGeneratedColumn()
        id!: number;

        @Column()
        user_id!: number;
        
        @Column()
        total_price!: number;
      
        @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
        createdAt: Date;
        
        @UpdateDateColumn({ type: 'timestamp', nullable: true })
        updatedAt: Date;
      
        @DeleteDateColumn({ type: 'timestamp', nullable: true })
        deletedAt: Date;
      }
      
