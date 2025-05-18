import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import CodeReviewList from './components/CodeReviewList';
import CodeReviewDetails from './components/CodeReviewDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="app-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/reviews" element={<CodeReviewList />} />
            <Route path="/reviews/:id" element={<CodeReviewDetails />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;