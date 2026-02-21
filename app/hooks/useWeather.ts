import { useState, useEffect } from 'react';
import { axiosclient } from '../api/axiosClinet';

export function useWeather(endpoint:string) {
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<any>(null);

    useEffect(()=>{
        axiosclient.get(endpoint)
        .then(res=>setData(res.data))
        .catch(err=>setError(err))
        .finally(()=>setLoading(false));
    },[endpoint]);
    return {data,loading,error};

}