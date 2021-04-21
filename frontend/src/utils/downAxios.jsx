import axios from "axios";

const downAxios = ({ config }) => {
    axios({
        method: config.method,
        url: config.url,
        headers: config.header,
        responseType: config.responseType,
    })
        .then(res => {
            const url = window.URL.createObjectURL(new Blob([res.data], { type: res.headers['content-type'] }));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'download.zip');
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        })
        .catch(error => {
            console.log(error);
            throw new Error(error);
        });
}

export default downAxios;