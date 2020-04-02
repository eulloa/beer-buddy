import * as React from 'react';
import { Beer } from './beer';
import  { LoadingBeer } from './skeleton';
import { useFetch } from '../hooks/useFetch';
import { baseUrl } from '../util/constants';

export const RandomBeer = () => {
   const [isLoading, error, randomBeer] = useFetch(`${baseUrl}random`);

   return (
      <>
         {isLoading && <LoadingBeer />}
         {error && <p data-testid="random-beer__error">{error.toString()}</p>}
         <div data-testid="random-beer__payload">
            {randomBeer && randomBeer[0] && <Beer beer={randomBeer[0]} />}
         </div>
      </>
   )
}
