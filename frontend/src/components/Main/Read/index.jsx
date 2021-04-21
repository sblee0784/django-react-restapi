import React, { useState, useEffect } from 'react';
import TaskRead from "./TaskRead";
import JobRead from "./JobRead";
import DataRead from "./DataRead";

const Read = ({ select, taskId }) => {
    const [read, setRead] = useState(false);
    const subTitle = (select === "data") ? "Download" : "Read";
    const handleRead = () => {
        setRead(!read);
    }
    const [jobId, setJobId] = useState("");

    const handleChange = (e) => {
        setJobId(e.target.value);
    }

    useEffect(() => {
        if (select === "data") {
            DataRead({ taskId, jobId, read });
        }
    }, [read]);

    return (
        <div style={{border: "1px solid gray", margin: "10px" }}>
            { select === "task" && <TaskRead read={read}/> }
            { select === "job" && <JobRead taskId={taskId} read={read}/> }
            { select === "data" && <div>
                <span style={{marginLeft: "1%"}}>job ID : </span>
                <input
                    type="text"
                    value={jobId}
                    onChange={handleChange}
                    name={"jobId"}
                />
            </div> }
            <button style={{marginLeft: "1%"}} onClick={handleRead}>{subTitle}</button>
        </div>
    );
}

export default Read;