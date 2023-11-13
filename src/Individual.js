import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory

const Individual = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const goToMain = () => {
    navigate('/main'); // Navigate to Electricity page
  };
  
  return (
    <div>
       <div className="header">
        <img src="/vandy-logo.png" alt="Vanderbilt Logo" className="logo" onClick={goToMain} />
        <div className="header-links">
    <a href="/menu">Menu</a>
    <a href="/faq">FAQ</a>
    <a href="/contact">Contact Us</a>
  </div>
  </div>
      
      <h1 className='main-header'>individual Actions of Food Waste</h1>
      <img className='icon-dining' src='/vandy.png' alt='food consumption'/>
      
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
        <button className='to-main' onClick={goToMain}>Go Back To MainPage</button>
      
      
      </div>
    </div>
  );
};

export default Individual;
