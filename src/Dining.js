import React from 'react';

const Dining = () => {
  return (

    <div>
    <h1>Compost to Dining</h1>
    <br></br>
    <img className='icon-dining' src='/dining.png' alt='dining'/>
      
    <br></br>
    <div className='dining'>

      <h2>Food Consumption Over Years</h2>
      <p>Over the years, Vanderbilt University has seen a consistent uptick in food consumption across its various dining facilities. This trend is indicative of multiple factors, including a growing student body, enhanced dining options, and possibly even changing eating habits among the community. The increase in food consumption is not just a statistical footnote; it has tangible implications for the university's sustainability efforts, supply chain management, and dining services budget. To accommodate this rise, dining services are continuously updating their menus, expanding hours, and even considering new dining hall locations. Additionally, the university is looking into more sustainable food options to offset the environmental impact of increased consumption. Overall, the rising trend in food consumption at Vanderbilt is a multifaceted issue that the university is actively monitoring and addressing.</p>
      <img className='dummy' src='/waste.png' alt='dummy DTFC'/>
      {/* Add your content here */}
    </div>
    </div>
  );
};

export default Dining;
