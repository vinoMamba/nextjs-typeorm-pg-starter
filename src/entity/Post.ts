import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity("posts")
export class Post {
    @PrimaryGeneratedColumn("increment")
    id!: number;
    @Column("varchar")
    title!: string;
    @Column("text")
    content: string | undefined;

    // https://github.com/typeorm/typeorm/issues/3445
    constructor(attributes: Partial<Post>) {
        Object.assign(this, attributes);
    }
}

