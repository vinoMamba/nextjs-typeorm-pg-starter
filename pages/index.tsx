import {FC, useEffect, useState} from "react";
import axios from "axios";


const Home: FC = () => {
    const [name, setName] = useState(null);
    const [age, setAge] = useState(0);
    useEffect(() => {
        axios.get('/api/v1').then((response) => {
            setAge(age => response.data.age);
            setName(name => response.data.name);
        });
    }, []);
    return (
        <>
            <h1>hello Vino</h1>
            <p>{name} -- {age}</p>
        </>
    );
};

export default Home;