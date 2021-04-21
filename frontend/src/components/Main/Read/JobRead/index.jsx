import React from 'react';
// import { useFetch } from "src/utils/useFetch";
import useAxios from "src/utils/useAxios";
import RenderJobs from "./RenderJobs";

const JobRead = ({ taskId, read }) => {
    const config = {
        method: 'GET',
        url: `http://127.0.0.1:8000/job/${taskId}`,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Token 5a8649c953ee29fee0f24fd1845035e7d8e944be'
        },
    }

    // const [jobs, loading] = useFetch({config, read});
    const [jobs, loading] = useAxios({config, read});

    return (
        <React.Fragment>
            { loading ? (
                "Loading..."
            ) : (
                <RenderJobs jobs={jobs}/>
            )}
        </React.Fragment>
    );
}

export default JobRead;