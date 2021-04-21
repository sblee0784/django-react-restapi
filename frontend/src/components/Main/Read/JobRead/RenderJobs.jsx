import React from 'react';

const RenderJobs = ({jobs}) => {
    return (
        <React.Fragment>
            {jobs.map(item => (
                <div key={item.id}>
                    <h3>Job ID : {item.id}</h3>
                    <div>assignee : {item.assignee}</div>
                    <div>reviewer : {item.reviewer}</div>
                    <div>history : {item.history}</div>
                    {/*{item.history.map(unit => (*/}
                    {/*    <div key={unit.user}>*/}
                    {/*        <div style={{marginLeft: "100px"}}>{unit.user}, {unit.task}, {unit.role}</div>*/}
                    {/*    </div>*/}
                    {/*))}*/}
                    <div>status : {item.status}</div>
                    <div>started on : {item.started_on}</div>
                </div>
            ))}
        </React.Fragment>
    );
}

export default RenderJobs;
