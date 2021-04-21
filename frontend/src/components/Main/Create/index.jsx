import React from 'react';
import TaskCreate from "./TaskCreate";
import JobCreate from "./JobCreate";

const Create = ({ select, taskId }) => {
    return (
        <div style={{border: "1px solid gray", margin: "10px" }}>
            { select === "task" && <TaskCreate /> }
            { select === "job" && <JobCreate taskId={taskId}/> }
        </div>
    );
}

export default Create;