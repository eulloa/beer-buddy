import axios from 'axios';
import { useEffect, useState } from 'react';

export function useFetch(url: string): [boolean, any, any] {
   const [error, setError] = useState<any>(null);
   const [isLoading, setIsLoading] = useState<boolean>(false);
   const [payload, setPayload] = useState<any>(null);

   useEffect(() => {
      let response;
      setIsLoading(true);

      const fetch = async () => {
         try {
            response = await axios.get(url);
            setIsLoading(false);
            setPayload(response.data);
         } catch(error) {
            setIsLoading(false);
            setError(error);
         }
      }

      fetch();
   }, [url]);

   return [isLoading, error, payload];
}