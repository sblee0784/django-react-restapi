import { useState, useEffect } from "react";
function useFetch({ config, read }) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    async function fetchUrl() {
        const response = await fetch(config.url);
        const json = await response.json();
        setData(json);
        setLoading(false);
    }
    useEffect(() => {
        fetchUrl();
    }, [read]);
    return [data, loading];
}
export { useFetch };