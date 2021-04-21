import React, { useRef } from 'react';
// import fetchCUD from "src/utils/fetchCUD";
import axiosCUD from "src/utils/axiosCUD";

const DataUpdate = ({ taskId, jobId }) => {
    const fileRef = useRef(null);

    const formData = new FormData();

    const handleLoadButton = (e) => {
        e.preventDefault();
        console.log("File Load");
        fileRef.current.click();
    };

    const inputImgFile = (e) => {
        const file = e.target.files[0];
        const file_name = file.name;

        let reader = new FileReader();
        reader.onloadend = function(e) {
            if (null !== e.target) {
                const result = e.target.result;
                formData.append("file", new Blob([result], { type: "application/zip" }), file_name);
            }
        };
        reader.readAsArrayBuffer(file);
        e.target.value = "";
    }

    const config = {
        method: "PUT",
        url: `http://127.0.0.1:8000/data/raw/${taskId}/${jobId}`,
        header: {
            'Content-Type': 'multipart/form-data',
            'Authorization': 'Token 5a8649c953ee29fee0f24fd1845035e7d8e944be'
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // fetchCUD({config, formData});
        axiosCUD({config, formData});
    };

    return (
        <form onSubmit={handleSubmit}>
            <span style={{marginLeft: "1%"}}>
                <button
                    onClick={handleLoadButton}
                >Input</button>
                <input
                    type={"file"}
                    ref={fileRef}
                    style={{display: "none"}}
                    onChange={inputImgFile}
                />
            </span>
            <button style={{marginLeft: "1%"}} type={"submit"}>Update</button>
        </form>
    )
}

export default DataUpdate;