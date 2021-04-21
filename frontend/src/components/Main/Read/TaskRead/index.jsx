import React from 'react';
// import { useFetch } from "src/utils/useFetch";
import useAxios from "src/utils/useAxios";
import RenderTask from "./RenderTask";

const TaskRead = ({ read }) => {
    const config = {
        method: 'GET',
        url: 'http://127.0.0.1:8000/task/',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Token 5a8649c953ee29fee0f24fd1845035e7d8e944be'
        },
    }

    // const [tasks, loading] = useFetch({config, read});
    const [tasks, loading] = useAxios({config, read});

    return (
        <React.Fragment>
            { loading ? (
                "Loading..."
            ) : (
                <RenderTask tasks={tasks}/>
            )}
        </React.Fragment>
    );
}

export default TaskRead;