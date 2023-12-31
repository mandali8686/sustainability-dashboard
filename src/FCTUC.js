import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory


const FCTUC = () => {

  const navigate = useNavigate(); // Initialize useNavigate
  const goToNext = () => {
    navigate('/UC'); // Navigate to Electricity page
  };
  const goToMain = () => {
    navigate('/main'); 
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
      
      <h1 className='main-header'>Dining to Food Consumption</h1>
      <img className='icon-dining' src='/consumption.png' alt='food consumption'/>
      
      <div className='compost'>
      <h2>Food Consumption for Average Vanderbilt Student</h2>
      <div className='img-display'>
      <img className='dummy' src='/food_consumption.png' alt='food consumption'/>
      
      </div>
      <p>Here is the bar graph showcasing food consumption at Vanderbilt University by different dining hall categories. Each bar represents the average food consumption in kilograms for the respective category, and each column has a distinct color for easy identification. As you can see, the "Average Student" category has significantly higher food consumption compared to the specific dining halls.</p>
      
      <p>The bar graph visualizes the average food consumption in kilograms across different dining hall categories at Vanderbilt University. Seven categories are represented: 'Average Student,' 'Rand,' 'Kissam,' 'Commons,' 'EBI,' 'Rothschild,' and 'Zeppos.' Each bar is color-coded for easy identification, and the values range from highest to lowest, aligning closely with the spectrum: 'Average Student,' 'Rand,' 'Commons,' 'Zeppos,' 'Kissam,' 'Rothschild,' and 'EBI.' The graph paints a clear picture of the disparities in food consumption across different dining categories, with the average student consuming far more than any individual dining hall.</p>
      </div>
      <button className='next' onClick={goToNext}>Go To Next Path</button>
      <button className='to-main' onClick={goToMain}>Go Back To MainPage</button>
      
    </div>
  );
};

export default FCTUC;
