import React, { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory
import SankeyImage from './Sankey.jpeg'; // Assuming Sankey.jpeg is in the same directory as App.js

const MainPage = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [charCount, setCharCount] = useState(0);
const maxCharCount = 1000; 

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

  return (
    <div>
      <div className="header">
        <img src="/Vanderbilt-University-Logo.png" alt="Vanderbilt Logo" className="logo" />
      </div>
      <h1>Sustainability Dashboard Prototype</h1>
      <a href="SankeyPlot.html" className="sankey-link"><h3>》〉》〉》〉Sankey Plot Builder 《〈《〈《〈</h3></a>
      <div className="column-names">
        <span>Metric</span>
        <span>Use</span>
        <span>Opportunity</span>
        <span>Responsibility</span>
      </div>
      <div className="image-container">
        <img className="sankey-image" src={SankeyImage} alt="Sankey Diagram" />
        <button 
          className="overlay-button-1" 
          style={{ top: '34%', left: '23%' }} 
          onClick={goToElectricity} // Set onClick to navigate
        >
          More on Electricity
        </button>
        <button className="overlay-button-2" style={{ top: '21.5%', left: '40%' }}>More on Purchased Energy</button>
        <button 
          className="overlay-button-3" 
          style={{ top: '51.5%', left: '39%' }} 
          onClick={goToDining} // Set onClick to navigate
        >
          Dining to Food Consumption
        </button>
        <button 
          className="overlay-button-4" 
          style={{ top: '79%', left: '19%' }} 
          onClick={goToCompost} // Set onClick to navigate
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
