import { useState, useEffect } from "react";
import axios from "axios";

const useAxios = ({ config, read }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    async function axiosUrl() {
        axios({
            method: config.method,
            url: config.url,
            headers: config.headers,
        })
            .then(res => {
                console.log("res : ", res);
                setData(res.data);
            })
            .catch(error => {
                console.log(error);
                // throw new Error(error);
            });
        setLoading(false);
    }

    useEffect(() => {
        axiosUrl();
    }, [read]);

    return [data, loading];
}

export default useAxios;