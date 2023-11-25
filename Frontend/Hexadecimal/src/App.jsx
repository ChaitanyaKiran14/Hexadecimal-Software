import React from 'react';
import './App.css';
import UserTable from './components/UserTable';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>MERN Stack Example</h1>
      </header>
      <main>
        <UserTable />
      </main>
    </div>
  );
}

export default App;
