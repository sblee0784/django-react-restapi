import React, { useState } from 'react';
import TaskUpdate from "./TaskUpdate";
import JobUpdate from "./JobUpdate";
import DataUpdate from "./DataUpdate";

const Update = ({ select }) => {
    const [values, setValues] = useState({ taskId: "", jobId: "" });
    const handleChange = (e) => {
        const {name, value} = e.target;
        setValues({...values, [name]: value});
    }

    return (
        <div style={{border: "1px solid gray", margin: "10px" }}>
            <span style={{marginLeft: "1%"}}>task ID : </span>
            <input
                type="text"
                value={values.taskId}
                onChange={handleChange}
                name={"taskId"}
            />
            { select === "task" && <TaskUpdate taskId={values.taskId}/> }
            { select === "job" &&
            <div>
                <span style={{marginLeft: "1%"}}>job ID : </span>
                <input
                    type="text"
                    value={values.jobId}
                    onChange={handleChange}
                    name={"jobId"}
                />
                <JobUpdate taskId={values.taskId} jobId={values.jobId}/>
            </div> }
            { select === "data" &&
            <div>
                <span style={{marginLeft: "1%"}}>job ID : </span>
                <input
                    type="text"
                    value={values.jobId}
                    onChange={handleChange}
                    name={"jobId"}
                />
                <DataUpdate taskId={values.taskId} jobId={values.jobId}/>
            </div> }
        </div>
    );
}

export default Update;