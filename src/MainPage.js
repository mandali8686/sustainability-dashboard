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

  const diningPreviewBubbleStyle = {
    position: 'absolute',
    top: '58%', 
    left: '29%', 
    zIndex: 1,
    backgroundColor: '#f9f9f9',
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '10px',
    width: '100px',
    opacity: 0.8,
  };
  
  const diningPreviewBubbleHoverStyle = {
    position: 'absolute',
    top: '58%', 
    left: '29%', 
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
    top: '54%',  
    left: '50%', 
    zIndex: 1,
    backgroundColor: '#f9f9f9',
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '10px',
    width: '100px',
    opacity: 0.8,
  };
  
  const foodConsumptionPreviewBubbleHoverStyle = {
    position: 'absolute',
    top: '54%',  
    left: '50%', 
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
    top: '70%',  // Adjust as needed
    left: '4%', // Adjust as needed
    zIndex: 1,
    backgroundColor: '#f9f9f9',
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '10px',
    width: '100px',
    opacity: 0.8,
    
  };

  const previewBubbleHoverStyle = {
    position: 'absolute',
    top: '70%',  // Adjust as needed
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
        <img src="/Vanderbilt-University-Logo.png" alt="Vanderbilt Logo" className="logo" />
      </div>
      <h1>Vanderbilt Sustainability    Dashboard</h1>
      <a href="SankeyPlot.html" className="sankey-link"><h3>》〉》〉》〉Sankey Plot Builder 《〈《〈《〈</h3></a>
      <div className="column-names">
        <span>Metric</span>
        <span>Use</span>
        <span>Opportunity</span>
        <span>Responsibility</span>
      </div>
      <div className="image-container">
        <img className="sankey-image" src='sankey_no.png' alt="Sankey Diagram" />
        <div 
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
        <div 
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
        
        <div 
  onClick={goToUniversity}
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
        
        
      </div>
      <div className="discussion-board">
        <h2>Discussion Board</h2>
        <textarea 
          value={newComment} 
          onChange={handleCommentChange}
          placeholder="Type your comment here..."
        />
        <span className="char-count">{`${charCount}/${maxCharCount}`}</span>
        <br/>
        <button onClick={handleCommentSubmit}>Submit</button>
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>{comment}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MainPage;
