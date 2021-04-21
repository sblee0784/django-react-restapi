
const fetchCUD = ({ config, formData }) => {
    fetch(config.url, {
        method: config.method,
        headers: config.header,
        body: formData,
    })
        .then(res => console.log(res))
        .catch(error => {
            console.log(error);
            throw new Error(error);
        });
}

export default fetchCUD;