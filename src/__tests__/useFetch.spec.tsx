import * as React from 'react';

import axios from 'axios';
import { RandomBeer } from '../components/randomBeer';

import { render } from '@testing-library/react';

const mockPayload = {
   abv: 4.5,
   description: 'A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once.',
   id: 1,
   name: 'Buzz'
};

describe('useFetch', () => {
   it('successfully calls punkapi', async () => {
      const mockGet = jest.spyOn(axios, 'get');
      mockGet.mockImplementation(async () => Promise.resolve(mockPayload));
   
      const { container } = await render(<RandomBeer />);

      const elem = container.firstChild;
   
      expect(axios.get).toHaveBeenCalledTimes(1);
      expect(elem).toBeDefined();
      expect(elem).toBeInTheDocument();
   });
})

