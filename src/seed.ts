import "reflect-metadata";
import {createConnection} from "typeorm";
import {User} from "./entity/User";
import {Post} from "./entity/Post";
import {Comment} from "./entity/Comment";

createConnection().then(async connection => {
    const manager = connection.manager;
    const u1 = new User();
    u1.username = "vino";
    u1.passwordDigest = "123456";
    await manager.save(u1);
    const p1 = new Post();
    p1.author = u1;
    p1.title = "Post 1";
    p1.content = "MambaOut";
    await manager.save(p1);
    const c1 = new Comment();
    c1.content = "suck";
    c1.post = p1;
    c1.user = u1;
    await manager.save(c1);
    await connection.close();

}).catch(error => console.log(error));
