import downAxios from "src/utils/downAxios";

const DataRead = ({ taskId, jobId }) => {
    const config = {
        method: "GET",
        url: `http://127.0.0.1:8000/data/raw/${taskId}/${jobId}`,
        header: {
            'Content-Type': 'multipart/form-data',
            'Authorization': 'Token 5a8649c953ee29fee0f24fd1845035e7d8e944be'
        },
        // responseType: 'blob'
        responseType: 'arraybuffer'
    }

    downAxios({ config });
}

export default DataRead;