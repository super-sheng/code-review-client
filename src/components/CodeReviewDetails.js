import React from 'react';
import { useParams } from 'react-router-dom';

function CodeReviewDetails() {
  const { id } = useParams();
  
  // Sample data - in a real app, this would come from an API based on the ID
  const review = {
    id: parseInt(id),
    title: 'Fix authentication bug',
    description: 'Address the issue with token refresh in the authentication flow',
    author: 'John Doe',
    status: 'Pending',
    date: '2025-05-15',
    code: `function refreshToken() {
  const refreshToken = localStorage.getItem('refreshToken');
  
  if (!refreshToken) {
    return Promise.reject('No refresh token found');
  }
  
  return fetch('/api/auth/refresh', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ refreshToken })
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to refresh token');
    }
    return response.json();
  })
  .then(data => {
    localStorage.setItem('token', data.token);
    return data.token;
  });
}`,
    comments: [
      { id: 1, author: 'Jane Smith', text: 'Consider adding error handling for network failures', date: '2025-05-16' },
      { id: 2, author: 'Alex Johnson', text: 'The token refresh logic looks good, but we should also update the user session', date: '2025-05-17' }
    ]
  };

  return (
    <div>
      <h2>{review.title}</h2>
      <div className="review-details">
        <p><strong>Description:</strong> {review.description}</p>
        <p><strong>Author:</strong> {review.author}</p>
        <p><strong>Status:</strong> {review.status}</p>
        <p><strong>Submitted:</strong> {review.date}</p>
        
        <h3>Code Changes</h3>
        <pre className="code-block">{review.code}</pre>
        
        <div className="comments-section">
          <h3>Comments ({review.comments.length})</h3>
          {review.comments.map(comment => (
            <div key={comment.id} className="comment">
              <div className="comment-header">
                <span><strong>{comment.author}</strong></span>
                <span>{comment.date}</span>
              </div>
              <p>{comment.text}</p>
            </div>
          ))}
          
          <div style={{ marginTop: '20px' }}>
            <h4>Add Comment</h4>
            <textarea rows="4" style={{ width: '100%', marginBottom: '10px' }} placeholder="Type your comment here..."></textarea>
            <button className="button">Submit Comment</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CodeReviewDetails;