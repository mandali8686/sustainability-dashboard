import React from 'react';

const FCTUC = () => {
  return (
    <div>
      <h1>Dining to Food Consumption</h1>
      <img className='icon-dining' src='/consumption.png' alt='food consumption'/>
      
      <div className='compost'>
      <h2>Food Consumption for Average Vanderbilt Student</h2>
      <p>Here is the bar graph showcasing food consumption at Vanderbilt University by different dining hall categories. Each bar represents the average food consumption in kilograms for the respective category, and each column has a distinct color for easy identification. As you can see, the "Average Student" category has significantly higher food consumption compared to the specific dining halls.</p>
      <img className='dummy' src='/food_consumption.png' alt='food consumption'/>
      {/* Add your content here */}
      <h3>Detailed Graph Description</h3>
      <p>The bar graph visualizes the average food consumption in kilograms across different dining hall categories at Vanderbilt University. Seven categories are represented: 'Average Student,' 'Rand,' 'Kissam,' 'Commons,' 'EBI,' 'Rothschild,' and 'Zeppos.' Each bar is color-coded for easy identification, and the values range from highest to lowest, aligning closely with the spectrum: 'Average Student,' 'Rand,' 'Commons,' 'Zeppos,' 'Kissam,' 'Rothschild,' and 'EBI.' The graph paints a clear picture of the disparities in food consumption across different dining categories, with the average student consuming far more than any individual dining hall.</p>
      </div>
    </div>
  );
};

export default FCTUC;
