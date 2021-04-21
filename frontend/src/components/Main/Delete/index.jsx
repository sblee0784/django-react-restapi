import React from 'react';
import TaskDelete from "./TaskDelete";
import JobDelete from "./JobDelete";
import DataDelete from "./DataDelete";

const Create = ({ select, taskId }) => {
    return (
        <div style={{border: "1px solid gray", margin: "10px" }}>
            { select === "task" && <TaskDelete /> }
            { select === "job" && <JobDelete taskId={taskId}/> }
            { select === "data" && <DataDelete taskId={taskId}/> }
        </div>
    );
}

export default Create;