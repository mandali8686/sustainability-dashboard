
import React, { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory

const Individual = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const goToMain = () => {
    navigate('/main'); // Navigate to Electricity page
  };

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
        <img src="/vandy-logo.png" alt="Vanderbilt Logo" className="logo" onClick={goToMain} />
        <div className="header-links">
    <a href="/menu">Menu</a>
    <a href="/faq">FAQ</a>
    <a href="/contact">Contact Us</a>
  </div>
  </div>
      
      <h1 className='main-header'>Individual Actions of Food Waste</h1>
      <img className='icon-dining' src='/inid.png' alt='food consumption'/>
      
      <div className='compost'>
      <h2>Food Choices</h2>
      
      <p>Adopting a more eco-friendly diet can significantly benefit the environment. Here are some guidelines to help you make sustainable food choices:
</p>
<ul>
    <li><strong>Mindful Portion Sizes:</strong> Take smaller portions to avoid leaving uneaten food on your plate. You can always go back for seconds if you're still hungry.
</li>
<li><strong>Limit Intake of Meat, Particularly Beef:</strong> Consider reducing the amount of meat in your diet, with a focus on consuming less beef, as its production is notably resource-intensive.</li>
<li><strong>Look for Third-Party Certified Products:</strong> Seek out foods that have been certified by independent organizations, like those carrying the USDA Organic or Marine Stewardship Council (MSC) labels for seafood. These certifications often indicate more sustainable production practices.
</li>
<li><strong>Support Local Farmers:</strong> Shopping at local farmers' markets can lower the environmental impact associated with transporting food over long distances. Plus, it's a great way to enjoy fresher produce while supporting your local economy.</li>
</ul>
<br></br>
      <h2>Vendor Choices</h2>
      <div className='vendor'>
      <a href='https://produceplace.com/' className="vendor-item">
        <img src="local1.png" alt="Image 1"/>
        <span>Produce Place</span>
    </a>
    <a href='https://eatatlocaltable.com/' className="vendor-item">
        <img src="local2.png" alt="Image 2"/>
        <span>Local Table</span>
    </a>
    <a href='https://www.wholefoodsmarket.com/' className="vendor-item">
        <img src="local3.png" alt="Image 3"/>
        <span>Whole Food Markets</span>
    </a>
    <a href='https://www.nashvillefarmersmarket.org/' className="vendor-item">
        <img src="local4.png" alt="Image 4"/>
        <span>Farmers Market</span>
    </a>

      </div>

      <h2>Sustainability Leader Program</h2>
      <p>Participation in the Sustainability Leaders program as a volunteer entails:</p>
        <ul>
          <li>Attending monthly meetings during the academic year.
</li>
<li>Sustainability Leaders will take an active role in facilitating sustainable practices within their offices, departments, or residences by certifying these areas. They will also provide educational support and guidance in departmental and organizational meetings, organize outreach events and competitions, and set an example through their sustainable practices.</li>
        </ul>
        <button className='learn'>Learn More</button>

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
        
        <button className='to-main' onClick={goToMain}>Go Back To MainPage</button>
      
      
      </div>
    </div>
  );
};

export default Individual;
