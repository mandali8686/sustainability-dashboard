import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory


const CompostToDining = () => {

  const navigate = useNavigate(); // Initialize useNavigate
  const goToDining = () => {
    navigate('/dining'); // Navigate to Electricity page
  };
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
      <h1 className='main-header'>Vanderbilt Compost</h1>
      <img className='recycling' src='recycling.png' alt='recycling'/>
      <div className='compost'>
        <h2>What is Compost/Recycling</h2>
      <h3 className='green'>Compost</h3>
      <ul>
        <li>Natural process of turning organic material into a nutrient-rich soil conditioner</li>
        <li>Benefits </li>
        <ul>
          <li>Sustainable way to recycle kitchen and garden waste</li>
          <ul>
          <li>Significantly reduces the amount of waste sent to landfill</li>
          </ul>
          <li>Provides an excellent soil additive</li>
          </ul>
          <li>At Vanderbilt, food scraps from dining halls, and organic waste from labs or gardens could be collected and sent to a composting facility</li>
      </ul>
      <h3 className='green'>Recycling</h3>
      <p>Recycling involves collecting, processing, and converting waste materials into new products. This reduces the amount of waste that goes to landfills, conserves natural resources, and saves energy. On the Vanderbilt campus, you'll find designated bins for materials like paper, plastic, metal, and glass, which are then collected and sent to recycling centers.</p>
      <h2>Where does Compost/Recycling Go?</h2>
      <h3 className='green'>Composting</h3>
      <h4>On-Campus Facilities: </h4>
      <p>Some universities have their own composting facilities. The composted material may be used on campus gardens and green spaces.</p>
      <h4>Local Farms or Facilities: </h4>
      <p>More commonly, organic waste for composting is collected and transported to a local composting facility or farm, where it's turned into soil conditioner or fertilizer.</p>
      <h3>Recycling:</h3>
      <h4>Recycling Centers:</h4>
      <p>Materials like paper, plastic, metal, and glass are usually sorted on-site and then sent to local or regional recycling centers for further processing.</p>
      <h4>Specialized Facilities:</h4>
      <p>Some materials may require specialized recycling facilities. For example, electronic waste is often sent to facilities equipped to safely handle and recycle these materials.</p>
      </div>
      <div className='compost'>
        {/* ... [previous content] */}
        <h2>What other energy uses/sustainability metrics does it overlap with?</h2>
        <p>Both composting and recycling play significant roles in the broader context of energy use and sustainability. Here's how they intersect with other sustainability metrics:</p>
        <ul>
          <li><strong>Carbon Footprint Reduction</strong>: Composting organic waste prevents the release of methane, a potent greenhouse gas, when the waste decomposes in a landfill. Recycling materials, especially aluminum and plastics, reduces the energy required to produce new products, leading to fewer carbon emissions compared to producing items from raw materials.</li>
          <li><strong>Waste Reduction</strong>: Both composting and recycling directly reduce the amount of waste sent to landfills. This reduces the need for new landfills and the environmental degradation associated with them.</li>
          <li><strong>Water Conservation</strong>: Recycling paper products results in significant water savings compared to producing new paper from trees. Similarly, using compost can reduce the need for water in agriculture due to its water retention capabilities.</li>
          <li><strong>Preservation of Natural Resources</strong>: Recycling conserves raw materials, reducing the need for deforestation, mining, and drilling, which can be disruptive to ecosystems.</li>
          <li><strong>Economic Benefits</strong>: Recycling can lead to job creation in the recycling and manufacturing sectors. Composting can boost the agricultural sector by producing high-quality soil additives.</li>
        </ul>
        <button className='next' onClick={goToDining}>Go To Next Path</button>
        <button className='to-main' onClick={goToMain}>Go Back To MainPage</button>
      
      </div>
    </div>
  );
};

export default CompostToDining;
