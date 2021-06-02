import {Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";
import {Post} from "./Post";
import {Comment} from "./Comment";

@Entity("users")
export class User {
    @PrimaryGeneratedColumn()
    id!: number;
    @Column("varchar")
    username!: string;
    @Column("text")
    passwordDigest!: string;
    @CreateDateColumn()
    createdAt!: Date;
    @UpdateDateColumn()
    updatedAt!: Date;
    @OneToMany(() => Post, post => post.author)
    posts?: Post[];
    @OneToMany(() => Comment, comment => comment.user)
    comments?: Comment[];
}
