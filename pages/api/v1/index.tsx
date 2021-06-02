import {NextApiHandler} from "next";

const index: NextApiHandler = async (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({name: 'vino', age: 24}));
};
export default index;