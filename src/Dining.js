import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory


const Dining = () => {

  const navigate = useNavigate(); // Initialize useNavigate
  const goToNext = () => {
    navigate('/FCTUC'); // Navigate to Electricity page
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
      
    <h1 className='main-header'>Compost to Dining</h1>
    <br></br>
    <img className='icon-dining' src='/dining.png' alt='dining'/>
      
    <br></br>
    <div className='compost'>

      <h2>Food Consumption Over Years</h2>
      <img className='dummy' src='/waste.png' alt='dummy DTFC'/>
      <div className='connection'>
      On average, Vanderbilt composts <span className="green-text">____pounds</span> of food per day. 
  This is like wasting <span className="green-text">___meals</span> ; enough to feed 
  <span className="green-text">___Americans</span> .
      </div>
      <br></br>
      <p>Vanderbilt has seen a consistent increase in food consumption across dining facilities. 
</p>
<br></br>
<p>This trend is indicative of multiple factors, including...
</p>
<ul>
  <li>Growing student body</li>
  <li>Enhanced dining options</li>
  <li>Potentially changing eating habits among the community</li>
</ul>
<br></br>
<p>The increase in food consumption is not just a statistical footnote; it has tangible implications for the university's sustainability efforts, supply chain management, and dining services budget. 
</p>
<p>To accommodate this rise, dining services are continuously updating their menus, expanding hours, and even considering new dining hall locations. Additionally, the university is looking into more sustainable food options to offset the environmental impact of increased consumption. Overall, the rising trend in food consumption at Vanderbilt is a multifaceted issue that the university is actively monitoring and addressing.</p>
      </div>
      <button className='next' onClick={goToNext}>Go To Next Path</button>
      <button className='to-main' onClick={goToMain}>Go Back To MainPage</button>
      
    </div>
  );
};

export default Dining;
