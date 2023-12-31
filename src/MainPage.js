import React, { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory

  
const MainPage = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [charCount, setCharCount] = useState(0);
const maxCharCount = 1000; 
const [showCompostPreview, setShowCompostPreview] = useState(false);
const [showElectricityPreview, setShowElectricityPreview] = useState(false);
const [showDiningPreview, setShowDiningPreview] = useState(false);
const [showFoodConsumptionPreview, setShowFoodConsumptionPreview] = useState(false);
const [showUCPreview, setShowUCPreview] = useState(false);
const [showIAPreview, setShowIAPreview] = useState(false);


  

useEffect(() => {
    const savedComments = localStorage.getItem('comments');
    if (savedComments) {
      setComments(JSON.parse(savedComments));
    }
  }, []);


  // Define function to navigate to Electricity page
  const goToElectricity = () => {
    navigate('/electricity'); // Navigate to Electricity page
  };

  const goToDining = () => {
    navigate('/dining'); // Navigate to Electricity page
  };
  const goToCompost = () => {
    navigate('/compost_to_dining'); // Navigate to Electricity page
  };
  const goToUniversity = () => {
    navigate('/FCTUC'); // Navigate to Electricity page
  };

  const goToUC = () => {
    navigate('/UC'); // Navigate to Electricity page
  };
  const goToMain = () => {
    navigate('/main'); // Navigate to Electricity page
  };
  const goToIndividual = () => {
    navigate('/individual'); // Navigate to Electricity page
  };


  const handleCommentChange = (e) => {
    const value = e.target.value;
  setNewComment(value);
  setCharCount(value.length);
  };

  const handleCommentSubmit = () => {
    const updatedComments = [...comments, newComment];
    setComments(updatedComments);

    localStorage.setItem('comments', JSON.stringify(updatedComments));
    setNewComment('');
  };

  const CompostPreviewBubble = ({goToCompost}) => {
    return (
      <div className="preview-bubble">
        <img className='preview_compost' src='recycling.png' alt='recycling' onClick={goToCompost}/>
        <p style={{ fontSize: '0.7em' }} onClick={goToCompost}>Learn More about Composting at Vanderbilt.</p>
        
        {/* Add more preview content here */}
       
      </div>
    );
  };

  const IAPreviewBubble = ({goToIndividual}) => {
    return (
      <div className="preview-bubble">
        <img className='preview_compost' src='inid.png' alt='recycling' onClick={goToCompost}/>
        <p style={{ fontSize: '0.7em' }} onClick={goToIndividual}>Learn More about Individual Actions.</p>
        
        {/* Add more preview content here */}
       
      </div>
    );
  };

  // Add this new state variable alongside your existing ones

// Create a new bubble component for Electricity
const ElectricityPreviewBubble = ({ goToElectricity }) => {
  return (
    <div className="preview-bubble" onClick={goToElectricity}>
      <img className='preview_electricity' src='elec.png' alt='electricity' />
      <p style={{ fontSize: '0.7em' }}>Learn More about Electricity Usage.</p>
      {/* Add more preview content here */}
    </div>
  );
};

const FoodConsumptionPreviewBubble = ({ goToUniversity }) => {
    return (
      <div className="preview-bubble" onClick={goToUniversity}>
        <img className='preview_dining' src='consumption.png' alt='food' />
        <p style={{ fontSize: '0.7em' }}>Learn More about Dining to Food Consumption.</p>
        {/* Add more preview content here */}
      </div>
    );
  };
  

const DiningPreviewBubble = ({ goToDining }) => {
    return (
      <div className="preview-bubble" onClick={goToDining}>
        <img className='preview_dining' src='dining.png' alt='dining' />
        <p style={{ fontSize: '0.7em' }}>Learn More about Compost to Dining at Vanderbilt.</p>
        {/* Add more preview content here */}
      </div>
    );
  };

  const UCPreviewBubble = ({ goToUC }) => {
    return (
      <div className="preview-bubble" onClick={goToUC}>
        <img className='preview_electricity' src='vandy.png' alt='electricity' />
        <p style={{ fontSize: '0.7em' }}>Learn More about Univerisity Control on Food Waste.</p>
        {/* Add more preview content here */}
      </div>
    );
  };

  const UCPreviewBubbleStyle = {
    position: 'absolute',
    top: '44%', 
    left: '73%', 
    zIndex: 1,
    backgroundColor: '#f9f9f9',
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '10px',
    width: '100px',
    opacity: 0.7,
  };

  const UCPreviewBubbleHoverStyle = {
    position: 'absolute',
    top: '44%', 
    left: '73%', 
    zIndex: 1,
    backgroundColor: '#f9f9f9',
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '10px',
    width: '100px',
    opacity: 1,

  };

  const IAPreviewBubbleStyle = {
    position: 'absolute',
    top: '60%', 
    left: '73%', 
    zIndex: 1,
    backgroundColor: '#f9f9f9',
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '10px',
    width: '100px',
    opacity: 0.7,
  };

  const IAPreviewBubbleHoverStyle = {
    position: 'absolute',
    top: '60%', 
    left: '73%', 
    zIndex: 1,
    backgroundColor: '#f9f9f9',
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '10px',
    width: '100px',
    opacity: 1,

  };

  
  

  const diningPreviewBubbleStyle = {
    position: 'absolute',
    top: '60%', 
    left: '26%', 
    zIndex: 1,
    backgroundColor: '#f9f9f9',
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '10px',
    width: '100px',
    opacity: 0.7,
  };
  
  const diningPreviewBubbleHoverStyle = {
    position: 'absolute',
    top: '60%', 
    left: '26%', 
    zIndex: 1,
    backgroundColor: '#f9f9f9',
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '10px',
    width: '100px',
    opacity: 1,
  };

  const foodConsumptionPreviewBubbleStyle = {
    position: 'absolute',
    top: '50%',  
    left: '48%', 
    zIndex: 1,
    backgroundColor: '#f9f9f9',
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '10px',
    width: '100px',
    opacity: 0.7,
  };
  
  const foodConsumptionPreviewBubbleHoverStyle = {
    position: 'absolute',
    top: '50%',  
    left: '48%', 
    zIndex: 1,
    backgroundColor: '#f9f9f9',
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '10px',
    width: '100px',
    opacity: 1,
  };
  
  
  

  const previewBubbleStyle = {
    position: 'absolute',
    top: '66%',  // Adjust as needed
    left: '4%', // Adjust as needed
    zIndex: 1,
    backgroundColor: '#f9f9f9',
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '10px',
    width: '100px',
    opacity: 0.7,
    
  };

  const previewBubbleHoverStyle = {
    position: 'absolute',
    top: '66%',  // Adjust as needed
    left: '4%', // Adjust as needed
    zIndex: 1,
    backgroundColor: '#f9f9f9',
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '10px',
    width: '100px',
    opacity: 1, // Fully opaque
  };

  const electricityPreviewBubbleStyle = {
    // ... existing style attributes
    position: 'absolute',
    top: '26%', 
    left: '9%', 
    zIndex: 1,
    backgroundColor: '#f9f9f9',
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '10px',
    width: '100px',
    opacity: 0.8,
    // ...
  };
  
  const electricityPreviewBubbleHoverStyle = {
    // ... existing style attributes
    position: 'absolute',
    top: '26%', 
    left: '9%', 
    zIndex: 1,
    backgroundColor: '#f9f9f9',
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '10px',
    width: '100px',
    opacity: 1, 
    // ...
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
      <h1 className='main-header'>Vanderbilt Sustainability    Dashboard</h1>
      <h3 className='instruction'>Click on bars to filter. Click on boxes to display Entries</h3>
      <div className="triangle-container">
  <div className="triangle-wrapper">
    <div className="triangle"></div>
    <div className="triangle-text">Define</div>
  </div>
  <div className="triangle-wrapper">
    <div className="triangle"></div>
    <div className="triangle-text">Track</div>
  </div>
  <div className="triangle-wrapper">
    <div className="triangle"></div>
    <div className="triangle-text">Apply</div>
  </div>
  <div className="triangle-wrapper">
    <div className="triangle"></div>
    <div className="triangle-text">Solve</div>
  </div>
</div>
      <div className="image-container">
        <img className="sankey-image" src='sankey_no.png' alt="Sankey Diagram" />
        <div className='preview-dining'
  onClick={goToElectricity}
  style={showElectricityPreview ? electricityPreviewBubbleHoverStyle : electricityPreviewBubbleStyle} 
  onMouseEnter={() => setShowElectricityPreview(true)}
  onMouseLeave={() => setShowElectricityPreview(false)}
>
  <ElectricityPreviewBubble goToElectricity={goToElectricity} />
</div>
        <button 
          className="overlay-button-1" 
          style={{ top: '21%', left: '8%' }} 
          onMouseEnter={() => setShowElectricityPreview(true)}
  onMouseLeave={() => setShowElectricityPreview(false)}
          onClick={goToElectricity} // Set onClick to navigate
        >
          More on Electricity
        </button>
        <button className="overlay-button-2" style={{ top: '21.5%', left: '40%' }}>More on Purchased Energy</button>
        <div className='preview-dining'
  onClick={goToDining} 
  style={showDiningPreview ? diningPreviewBubbleHoverStyle : diningPreviewBubbleStyle} 
  onMouseEnter={() => setShowDiningPreview(true)}
  onMouseLeave={() => setShowDiningPreview(false)}
>
  <DiningPreviewBubble goToDining={goToDining} />
</div>

        <button 
          className="overlay-button-3" 
          style={{ top: '64%', left: '30%' }} 
          onClick={goToDining} // Set onClick to navigate
          onMouseEnter={() => setShowDiningPreview(true)}
          onMouseLeave={() => setShowDiningPreview(false)}
        >
          Compost to Dining
        </button>
        <div 
        onClick={goToCompost} 
  style={showCompostPreview ? previewBubbleHoverStyle : previewBubbleStyle} 
  onMouseEnter={() => setShowCompostPreview(true)}
  onMouseLeave={() => setShowCompostPreview(false)}
  

>
<CompostPreviewBubble goToCompost={goToCompost} /> 
</div>
        <button 
          className="overlay-button-4" 
          style={{ top: '68%', left: '14%' }} 
          onMouseEnter={() => setShowCompostPreview(true)}
          onMouseLeave={() => setShowCompostPreview(false)}
          onClick={goToCompost} // Set onClick to navigate
        >
          Vanderbilt Compost
        </button>
        {showCompostPreview && <div style={previewBubbleStyle}><CompostPreviewBubble /></div>}
        
        <div onClick={goToUniversity}
  style={showFoodConsumptionPreview ? foodConsumptionPreviewBubbleHoverStyle : foodConsumptionPreviewBubbleStyle} 
  onMouseEnter={() => setShowFoodConsumptionPreview(true)}
  onMouseLeave={() => setShowFoodConsumptionPreview(false)}
>
  <FoodConsumptionPreviewBubble goToUniversity={goToUniversity} />
</div>
        <button 
          className="overlay-button-5" 
          style={{ top: '54%', left: '54%' }} 
          onClick={goToUniversity} // Set onClick to navigate
          onMouseEnter={() => setShowFoodConsumptionPreview(true)}
  onMouseLeave={() => setShowFoodConsumptionPreview(false)}

        >
          Dining to Food Consumption
        </button>
        <div onClick={goToUC}
  style={showUCPreview ? UCPreviewBubbleHoverStyle : UCPreviewBubbleStyle} 
  onMouseEnter={() => setShowUCPreview(true)}
  onMouseLeave={() => setShowUCPreview(false)}
>
  <UCPreviewBubble goToUC={goToUC} />
</div>
        <button 
          className="overlay-button-6" 
          style={{ top: '50%', left: '76%' }} 
          onClick={goToUC} // Set onClick to navigate
          onMouseEnter={() => setShowUCPreview(true)}
  onMouseLeave={() => setShowUCPreview(false)}

        >
          Food Consumption to Univerisity Control
        </button>
        <div onClick={goToIndividual}
  style={showIAPreview ? IAPreviewBubbleHoverStyle : IAPreviewBubbleStyle} 
  onMouseEnter={() => setShowIAPreview(true)}
  onMouseLeave={() => setShowIAPreview(false)}
>
  <IAPreviewBubble goToIndividual={goToIndividual} />
</div>
        <button 
          className="overlay-button-7" 
          style={{ top: '62%', left: '77%' }} 
          onClick={goToIndividual} // Set onClick to navigate
          onMouseEnter={() => setShowIAPreview(true)}
  onMouseLeave={() => setShowIAPreview(false)}

        >
          Individual Actions
        </button>
        
      </div>
      <div className="discussion-board">
        <h2 className='discuss'>Share Your Ideas</h2>
        <div className='board-comment'>
        <textarea 
          value={newComment} 
          onChange={handleCommentChange}
          placeholder="Type your comment here..."
        />
        <span className="char-count">{`${charCount}/${maxCharCount}`}</span>
        <br/>
        <button className='submit' onClick={handleCommentSubmit}>Submit</button>
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>{comment}</li>
          ))}
        </ul>
        </div>
        
      </div>
    </div>
  );
};

export default MainPage;
