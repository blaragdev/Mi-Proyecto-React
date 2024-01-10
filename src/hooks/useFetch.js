import { useCallback, useEffect, useState } from "react"

export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const getData = useCallback(() => {

        const fetchData = async () => {
            try {
                const res = await fetch(url);

                if (res.status > 400) throw new Error('Error fetching data');

                const data = await res.json();
                setData(data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [url]);

    useEffect(() => {
        getData();
    }, [getData]);

    return { data, loading, error }
}
