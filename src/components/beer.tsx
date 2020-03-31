import * as React from 'react';

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
   return (
      <div className="beer">
         <h1>{name}</h1>
         <p>{tagline}</p>
         {first_brewed && <p>First brewed: {first_brewed}</p>}
         <img src={image_url} alt={description} />
      </div>
   );
}
