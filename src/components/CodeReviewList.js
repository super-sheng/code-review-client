import React from 'react';
import { Link } from 'react-router-dom';

function CodeReviewList() {
  // Sample data - in a real app, this would come from an API
  const reviews = [
    { id: 1, title: 'Fix authentication bug', author: 'John Doe', status: 'Pending', date: '2025-05-15' },
    { id: 2, title: 'Add user profile page', author: 'Jane Smith', status: 'Completed', date: '2025-05-14' },
    { id: 3, title: 'Refactor API service', author: 'Alex Johnson', status: 'In Progress', date: '2025-05-17' },
  ];

  return (
    <div>
      <h2>Code Reviews</h2>
      <div className="review-list">
        {reviews.map(review => (
          <div key={review.id} className="review-item">
            <div>
              <h3><Link to={`/reviews/${review.id}`}>{review.title}</Link></h3>
              <p>By {review.author} • {review.date} • Status: {review.status}</p>
            </div>
            <Link to={`/reviews/${review.id}`} className="button">View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CodeReviewList;