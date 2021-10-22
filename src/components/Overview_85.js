import React, { useState } from 'react';
import './Overview_85.scss';
import mens from './mens-data';
import sneakers from './sneakers-data';
import Preview_85 from './Preview_85';

const Overview_85 = () => {
  const [mensItems, setMensItems] = useState(mens);
  console.log('mensItems', mensItems);
  const [sneakersItems, setSneakersItems] = useState(sneakers);
  console.log('sneakersItems', sneakersItems);
  return (
    <div>
      <div className="collection-overview">
        <div className="collection-preview">
          <h2 className="title">SNEAKERS</h2>
          <div className="preview">
            {sneakersItems.map((sneakers) => {
              const { id, name, remoteUrl, price } = sneakers;

              return (
                <Preview_85
                  key={id}
                  name={name}
                  remoteUrl={remoteUrl}
                  price={price}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="collection-overview">
        <div className="collection-preview">
          <h2 className="title">MENS</h2>
          <div className="preview">
            {mensItems.map((mens) => {
              const { id, name, remoteUrl, price } = mens;

              return (
                <Preview_85
                  key={id}
                  name={name}
                  remoteUrl={remoteUrl}
                  price={price}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview_85;