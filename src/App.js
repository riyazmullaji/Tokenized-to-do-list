import React from 'react';
import Footer from './Footer';
import Header from './Header';
import TodoList from './TododoList';

function App() {
  return (
    <div className="App">
      <Header />
      <TodoList />
      <Footer />
    </div>
  );
}

export default App;
