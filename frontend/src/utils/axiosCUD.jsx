import axios from "axios"

const axiosCUD = ({ config, formData }) => {
    axios({
        method: config.method,
        url: config.url,
        headers: config.header,
        data: formData,
    })
        .then(res => console.log(res))
        .catch(error => {
            console.log(error);
            throw new Error(error);
        });
}

export default axiosCUD;