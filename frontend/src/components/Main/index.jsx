import React, { useState } from 'react';
import Account from "./Account";
import Create from "./Create";
import Read from "./Read";
import Update from "./Update";
import Delete from "./Delete";

const Main = () => {
    const [values, setValues] = useState({ select: "task", taskId: "" });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({...values, [name]: value});
        console.log(values)
    }

    return (
        <React.Fragment>
            <Account />
            <label style={{marginLeft: "1%"}}>
                Select task or job :
                <select value={values.select}  name={"select"} onChange={handleChange}>
                    <option value="task">task</option>
                    <option value="job">job</option>
                    <option value="data">data</option>
                </select>
            </label>
            { values.select !== "task" && <div>
                <span style={{marginLeft: "1%"}}>task ID : </span>
                <input
                    type="text"
                    value={values.taskId}
                    onChange={handleChange}
                    name={"taskId"}
                />
            </div> }
            <Create select={values.select} taskId={values.taskId}/>
            <Read select={values.select} taskId={values.taskId}/>
            <Update select={values.select} taskId={values.taskId}/>
            <Delete select={values.select} taskId={values.taskId}/>
        </React.Fragment>
    );
}

export default Main;