import { useEffect, useState } from 'react';
import { api } from '../api';

export const useApiLoader = ()=>{
    const [ db, setDb ] = useState([]);
    const [ isFetching, setIsFetching ] = useState(true);
    const [ isServerError, setIsServerError ] = useState(false);
    const [ isClientError, setIsClientError ] = useState(false);

    useEffect(()=>{
        (async ()=>{
            const response = await api.news.fetch();
            const data = await response.json();
            setDb(data);
            if (response.status >= 500) {
                setIsServerError(true);
            }
            if (response.status >= 400 && response.status <= 499) {
                setIsClientError(true);
            }
            setIsFetching(false);
        })();
    }, []);

    return {
        db,
        isFetching,
        isServerError,
        isClientError,
    };
};
