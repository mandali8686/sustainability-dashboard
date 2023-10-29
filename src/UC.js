import React from 'react';

const UC = () => {
  return (
    <div>
      <h1>University Control of Food Waste</h1>
      <img className='icon-dining' src='/Vanderbilt-University-Logo.png' alt='food consumption'/>
      
      <div className='compost'>
      <h2>Local Sourcing</h2>
      <p>Vanderbilt collaborates with local farmers through Creation Gardens and suppliers to support the community and reduce the environmental impact associated with long-distance transportation. 
</p>
      {/* Add your content here */}
      <h2>Direct Communication and Collaboration with University Community</h2>
      <ul>
          <li>Hosts food waste tabling events for food waste and sustainability</li>
          <li>Real time food waste data is displayed on TV screens in Rand</li>
          <li>Vanderbilt supports innovation: The Greenfund competition winners of the 2022-2023 academic year proposed that the size of plates should be smaller to reduce food waste. Has been successfully implemented in EBI, and there are hopes to expand to other all-you-can-eat locations. </li>
        </ul>
        <h2>Landfill Diversion</h2>
        <ul>
          <li>Trashcans were removed from Kissam and Rand in order to avoid having compostable containers sent to the landfill. If all items are returned to dish returns, the staff is trained in order for items to be properly sorted. </li>
          <li>#7 on Princeton review for green colleges</li>
          <li>Dining halls are zero waste: 90% landfill diversion </li>
          <li>Excess food is donated to people in need in the community.</li>
        </ul>
        <img src='landfill.png' className='elec_building' alt='landfill pie'/>
      
      
      </div>
    </div>
  );
};

export default UC;
