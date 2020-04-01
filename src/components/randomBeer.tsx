import * as React from 'react';
import { Beer } from './beer';
import { useFetch } from '../hooks/useFetch';
import { baseUrl } from '../util/constants';

export const RandomBeer = () => {
   const [isLoading, error, payload] = useFetch(`${baseUrl}random`);

   return (
      <>
         {isLoading && <span data-testid="allbeers-loading">Loading...</span>}
         {error && <p data-testid="allbeers-error">{error.toString()}</p>}
         {payload && <Beer beer={payload[0]} />}
      </>
   )
}
