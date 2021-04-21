import React from 'react';

const RenderTask = ({tasks}) => {
    return (
        <React.Fragment>
            {tasks.map(item => (
                <div key={item.id}>
                    <h2>Task ID : {item.id}</h2>
                    <div>Title : {item.title}</div>
                    <div>participants : </div>
                    {item.participants.map(unit => (
                        <div key={unit.user}>
                            <div style={{marginLeft: "100px"}}>{unit.user}, {unit.task}, {unit.role}</div>
                        </div>
                    ))}
                    <div>labels : </div>
                    {item.labels.map(unit => (
                        <div key={unit.name}>
                            <div style={{marginLeft: "100px"}}>{unit.name}, {unit.color}, {unit.meta}</div>
                        </div>
                    ))}
                    <div>{item.created}</div>
                </div>
            ))}
        </React.Fragment>
    );
}

export default RenderTask;
