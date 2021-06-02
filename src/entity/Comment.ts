import {Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";
import {User} from "./User";
import {Post} from "./Post";

@Entity("comments")
export class Comment {
    @PrimaryGeneratedColumn()
    id!: number;
    @Column("int")
    userId!: number;
    @Column("int")
    postId!: number;
    @Column("text")
    content!: string;
    @CreateDateColumn()
    createdAt!: Date;
    @UpdateDateColumn()
    updatedAt!: Date;
    @ManyToOne(() => User, user => user.comments)
    user!: User;
    @ManyToOne(() => Post, post => post.comments)
    post!: Post;
}
