import React, { useState, useEffect } from 'react';
import useAxios from "src/utils/useAxios";
import fetchCUD from "src/utils/fetchCUD";
// import axiosCUD from "src/utils/axiosCUD";

const JobUpdate = ({ taskId, jobId }) => {
    const [values, setValues] = useState({assignee: "", reviewer: "", history: "", status: ""});

    const [read, setRead] = useState(false);
    const handleRead = (e) => {
        e.preventDefault();
        setRead(!read);
    }

    const configRead = {
        method: 'GET',
        url: `http://127.0.0.1:8000/job/${taskId}/${jobId}`,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Token 5a8649c953ee29fee0f24fd1845035e7d8e944be'
        },
    }

    // const [tasks, loading] = useFetch({config: configRead, read});
    const [labels, loading] = useAxios({config: configRead, read});

    useEffect(() => {
        setValues(labels);
    },[labels]);

    const config = {
        method: "PUT",
        url: `http://127.0.0.1:8000/job/${taskId}/${jobId}`,
        header: {
            'Content-Type': 'application/json',
            'Authorization': 'Token 5a8649c953ee29fee0f24fd1845035e7d8e944be'
        }
    }
    const formData = JSON.stringify({
        'assignee': values.assignee,
        'reviewer': values.reviewer,
        'history': values.history,
        'status': values.status,
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({...values, [name]: value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchCUD({config, formData});
        // axiosCUD({config, formData});
        setValues({assignee: "", reviewer: "", history: "", status: ""});
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <span style={{marginLeft: "1%"}}>assignee : </span>
                <input
                    type="text"
                    value={values.assignee}
                    onChange={handleChange}
                    name={"assignee"}
                />
            </div>
            <div>
                <span style={{marginLeft: "1%"}}>reviewer : </span>
                <input
                    type="text"
                    value={values.reviewer}
                    onChange={handleChange}
                    name={"reviewer"}
                />
            </div>
            <div>
                <span style={{marginLeft: "1%"}}>history : </span>
                <input
                    type="text"
                    value={values.history}
                    onChange={handleChange}
                    name={"history"}
                />
            </div>
            <div>
                <span style={{marginLeft: "1%"}}>status : </span>
                <input
                    type="text"
                    value={values.status}
                    onChange={handleChange}
                    name={"status"}
                />
            </div>
            <button style={{marginLeft: "1%"}} onClick={handleRead}>Read</button>
            <button style={{marginLeft: "1%"}} type={"submit"}>Update</button>
        </form>
    )
}

export default JobUpdate;