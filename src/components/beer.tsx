import * as React from 'react';
import { useInView } from 'react-intersection-observer';

interface IBeerProps {
   beer: {
      description?: string;
      first_brewed?: string;
      image_url?: string;
      name?: string;
      tagline?: string;
   };
}

export const Beer = ({ beer: { description, first_brewed, image_url, name, tagline } }: IBeerProps) => {
   const [ref, inView] = useInView({ threshold: 0 });

   return (
      <div className="beer" ref={ref}>
         {inView ?
            <>
               <h1>{name}</h1>
               <p>{tagline}</p>
               {first_brewed && <p>First brewed: {first_brewed}</p>}
               <img src={image_url} alt={description} />
            </> : null
         }
      </div>
   );
}
