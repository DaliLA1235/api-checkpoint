import React from 'react';
import './App.css'; // Create App.css with your styles
import UserList from './UserList';

const App = () => {
  return (
    <div className="app">
      <header className="app-header">
        <h1>React User List App</h1>
      </header>
      <UserList />
    </div>
  );
};

export default App;

