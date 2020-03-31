import * as React from 'react';
import { useFetch } from '../hooks/useFetch';
import { Beer } from './beer';

const url = 'https://api.punkapi.com/v2/beers';

export const AllBeers = () => {
   const [isLoading, error, payload] = useFetch(url);
   
   return (
      <>
         {isLoading && <span data-testid="allbeers-loading">Loading...</span>}
         {error && <p data-testid="allbeers-error">{error.toString()}</p>}
         {payload && payload.length &&
            <div className="beers">
               {payload && payload.map((beer: any, i: number) => <Beer key={`${beer.name}-${i}`} beer={beer} />)}
            </div>
         }
      </>
   )
}
