import { useState,useCallback } from 'react';

const useHttp = () => {
    const [ loading,setLoading ] = useState(false);
   const [ error,setError ] = useState(null);


 const sendRequest = useCallback( async (url,body=null,method='GET',headers={})=>{
          setLoading(true);
          try {
             const response = await fetch(url,{
                 method:method,
                 body:body,
                 headers:headers
             });
             const responseData = response.json();
             if(!response.ok) {
                throw new Error('could not perform action')
             }
             setLoading(false);
             setError(null);
             return responseData;
          }catch(e) {
              setLoading(false);
              setError(e.message);
          }
 },[])

  return  { loading,error,sendRequest };
}

export default useHttp;