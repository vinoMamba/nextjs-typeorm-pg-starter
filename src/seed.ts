import "reflect-metadata";
import {createConnection} from "typeorm";
import {Post} from "./entity/Post";

createConnection().then(async connection => {

    const posts = await connection.manager.find(Post);
    if (posts.length === 0) {
        await connection.manager.save([1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i => {
            return new Post({title: `POST-${i}`, content: `MambaOut - ${i}`});
        }));
    }
    await connection.close();

}).catch(error => console.log(error));
