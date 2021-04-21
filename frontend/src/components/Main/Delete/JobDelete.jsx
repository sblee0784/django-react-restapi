import React, { useState } from 'react';
import fetchCUD from "src/utils/fetchCUD";
// import axiosCUD from "src/utils/axiosCUD";

const JobDelete = ({ taskId }) => {
    const [values, setValues] = useState({jobId: ""});

    const config = {
        method: "DELETE",
        url: `http://127.0.0.1:8000/job/${taskId}/${values.jobId}`,
        header: {
            'Content-Type': 'application/json',
            'Authorization': 'Token 5a8649c953ee29fee0f24fd1845035e7d8e944be'
        }
    }
    const formData = null;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({...values, [name]: value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchCUD({config, formData});
        // axiosCUD({config, formData});
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <span style={{marginLeft: "1%"}}>job ID : </span>
                <input
                    type="text"
                    value={values.jobId}
                    onChange={handleChange}
                    name={"jobId"}
                />
            </div>
            <button style={{marginLeft: "1%"}} type={"submit"}>Delete</button>
        </form>
    )
}

export default JobDelete;