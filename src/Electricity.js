import React from 'react';

const Electricity = () => {
  return (
    <div>
      <h1>Vanderbilt Electricity</h1>
      {/* Add your content here */}
      <img className='elec' src='elec.png' alt='Electricity ' />
      <div className='electricity-visualization'>
        <h2 className='subtitle'>Electricity Usage</h2>
        <h3 className='subtitle'>Electricity Usage Change</h3>
        <img className='elec_building' src='elec_year.png' alt='Electricity year usage' />
    
        <h3 className='subtitle'>Electricity in Buildings</h3>
      <img className='elec_building' src='elec_building.png' alt='Electricity to Building' />
    
      </div>
      </div>
  );
};

export default Electricity;
