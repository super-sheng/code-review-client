import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  // Sample data - in a real app, this would come from an API
  const stats = {
    pendingReviews: 5,
    completedReviews: 12,
    myAssignments: 3
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <div className="dashboard">
        <div className="dashboard-card">
          <h3>Pending Reviews</h3>
          <p>{stats.pendingReviews}</p>
          <Link to="/reviews" className="button">View All</Link>
        </div>
        <div className="dashboard-card">
          <h3>Completed Reviews</h3>
          <p>{stats.completedReviews}</p>
          <Link to="/reviews" className="button">View All</Link>
        </div>
        <div className="dashboard-card">
          <h3>My Assignments</h3>
          <p>{stats.myAssignments}</p>
          <Link to="/reviews" className="button">View Assigned</Link>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;