import React, { useState, useEffect } from 'react';
import fetchCUD from "src/utils/fetchCUD";
// import axiosCUD from "src/utils/axiosCUD";

const TaskCreate = () => {
    const [title, setTitle] = useState("");
    const [users, setUsers] = useState({index: 0, user: "", task: "", role: ""});
    const [userList, setUserList] = useState([users]);
    const [userData, setUserData] = useState([{user: "", task: "", role: ""}]);

    const [labels, setLabels] = useState({index: 0, name: "", color: "", meta: ""});
    const [labelList, setLabelList] = useState([labels]);
    const [labelData, setLabelData] = useState([{name: "", color: "", meta: ""}]);

    const config = {
        method: "POST",
        url: 'http://127.0.0.1:8000/task/',
        header: {
            'Content-Type': 'application/json',
            'Authorization': 'Token 5a8649c953ee29fee0f24fd1845035e7d8e944be'
        }
    };
    const formData = JSON.stringify({
        'title': title,
        'participants': userData,
        'labels': labelData
    });

    const handleTitle = (e) => {
        setTitle(e.target.value);
    }

    const handleUser = (e) => {
        const { id, name, value } = e.target;
        setUsers({...userList[id], "index": Number(id), [name]: value});
    }

    useEffect(() => {
        setUserList([
            ...userList.slice(0, users.index),
            users,
            ...userList.slice(users.index+1),
        ]);
    },[users]);

    useEffect(() => {
        setUserData(userList.map((item) => {
            return ({
                user: item.user,
                task: item.task,
                role: item.role,
            })
        }));
    },[userList]);

    const handleLabel = (e) => {
        const { id, name, value } = e.target;
        setLabels({...labelList[id], "index": Number(id), [name]: value});
    }

    useEffect(() => {
        setLabelList([
            ...labelList.slice(0, labels.index),
            labels,
            ...labelList.slice(labels.index+1),
        ]);
    },[labels]);

    useEffect(() => {
        setLabelData(labelList.map((item) => {
            return ({
                name: item.name,
                color: item.color,
                meta: item.meta,
            })
        }));
    },[labelList]);

    const handleSubmit = (e) => {
        e.preventDefault();
        // fetchPost({url, data});
        fetchCUD({config, formData});
        // axiosCUD({config, formData});
        setTitle("");
        setUserList([{index: 0, user: "", task: "", role: ""}]);
        setLabelList([{index: 0, name: "", color: "", meta: ""}]);
    };

    const handleAddUser = (e) => {
        e.preventDefault();
        setUserList([...userList, {index: userList[userList.length-1].index+1, user: "", task: "", role: ""}]);
    }

    const handleRemoveUser = (e) => {
        e.preventDefault();
        setUserList([...userList.slice(undefined, -1)]);
    }

    const handleAddLabel = (e) => {
        e.preventDefault();
        setLabelList([...labelList, {index: labelList[labelList.length-1].index+1, name: "", color: "", meta: ""}]);
    }

    const handleRemoveLabel = (e) => {
        e.preventDefault();
        setLabelList([...labelList.slice(undefined, -1)]);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <span style={{marginLeft: "1%"}}>title : </span>
                <input
                    type="text"
                    value={title}
                    onChange={handleTitle}
                    name={"title"}
                />
            </div>
            <div>
                <div style={{marginLeft: "1%"}}>participants : </div>
                <ul>
                    {userList.map((item) => {
                        return (
                            <li key={item.index}>
                                <span style={{marginLeft: "2%"}}>user : </span>
                                <input
                                    id={item.index}
                                    type="text"
                                    value={item.user}
                                    onChange={handleUser}
                                    name={"user"}
                                />
                                <span style={{marginLeft: "2%"}}>task : </span>
                                <input
                                    id={item.index}
                                    type="text"
                                    value={item.task}
                                    onChange={handleUser}
                                    name={"task"}
                                />
                                <span style={{marginLeft: "2%"}}>role : </span>
                                <input
                                    id={item.index}
                                    type="text"
                                    value={item.role}
                                    onChange={handleUser}
                                    name={"role"}
                                />
                            </li>
                        )
                    })}
                </ul>
                <button style={{marginLeft: "10px"}} onClick={handleAddUser}>Add</button>
                <button style={{marginLeft: "10px"}} onClick={handleRemoveUser}>Remove</button>
            </div>
            <div>
                <div style={{marginLeft: "1%"}}>labels : </div>
                <ul>
                    {labelList.map((item) => {
                        return (
                            <li key={item.index}>
                                <span style={{marginLeft: "2%"}}>name : </span>
                                <input
                                    id={item.index}
                                    type="text"
                                    value={item.name}
                                    onChange={handleLabel}
                                    name={"name"}
                                />
                                <span style={{marginLeft: "2%"}}>color : </span>
                                <input
                                    id={item.index}
                                    type="text"
                                    value={item.color}
                                    onChange={handleLabel}
                                    name={"color"}
                                />
                                <span style={{marginLeft: "2%"}}>meta : </span>
                                <input
                                    id={item.index}
                                    type="text"
                                    value={item.meta}
                                    onChange={handleLabel}
                                    name={"meta"}
                                />
                            </li>
                        )
                    })}
                </ul>
                <button style={{marginLeft: "10px"}} onClick={handleAddLabel}>Add</button>
                <button style={{marginLeft: "10px"}} onClick={handleRemoveLabel}>Remove</button>
            </div>
            <button style={{marginLeft: "1%"}} type={"submit"}>Create</button>
        </form>
    )
}

export default TaskCreate;